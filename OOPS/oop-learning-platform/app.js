// OOP Learning Platform - Application Logic

class LearningPlatform {
  constructor() {
    this.state = {
      currentLevel: 'beginner',
      currentLesson: null,
      completedLessons: new Set(),
      completedQuizzes: new Set(),
      xp: 0,
      quizActive: false,
      currentQuizIndex: 0,
      quizAnswers: [],
      quizScore: 0
    };

    this.init();
  }

  init() {
    this.loadProgress();
    this.renderDashboard();
    this.attachEventListeners();
    this.updateXPDisplay();
  }

  // === SAVE/LOAD PROGRESS ===
  saveProgress() {
    const saveData = {
      completedLessons: Array.from(this.state.completedLessons),
      completedQuizzes: Array.from(this.state.completedQuizzes),
      xp: this.state.xp,
      currentLevel: this.state.currentLevel
    };
    localStorage.setItem('oop-learning-progress', JSON.stringify(saveData));
  }

  loadProgress() {
    const saved = localStorage.getItem('oop-learning-progress');
    if (saved) {
      const data = JSON.parse(saved);
      this.state.completedLessons = new Set(data.completedLessons || []);
      this.state.completedQuizzes = new Set(data.completedQuizzes || []);
      this.state.xp = data.xp || 0;
      this.state.currentLevel = data.currentLevel || 'beginner';
    }
  }

  resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem('oop-learning-progress');
      this.state = {
        currentLevel: 'beginner',
        currentLesson: null,
        completedLessons: new Set(),
        completedQuizzes: new Set(),
        xp: 0,
        quizActive: false,
        currentQuizIndex: 0,
        quizAnswers: [],
        quizScore: 0
      };
      this.renderDashboard();
      this.updateXPDisplay();
    }
  }

  // === EVENT LISTENERS ===
  attachEventListeners() {
    // Level tab switching
    document.querySelectorAll('.level-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const level = tab.dataset.level;
        if (!tab.classList.contains('locked')) {
          this.switchLevel(level);
        }
      });
    });

    // Back to dashboard button
    const backBtn = document.getElementById('back-to-dashboard');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.showDashboard());
    }
  }

  // === RENDERING ===
  renderDashboard() {
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('lesson-detail').classList.add('hidden');

    this.updateLevelTabs();
    this.renderLessons();
    this.updateProgressBar();
  }

  updateLevelTabs() {
    const levels = ['beginner', 'intermediate', 'advanced'];

    levels.forEach(level => {
      const tab = document.querySelector(`[data-level="${level}"]`);
      const isLocked = this.isLevelLocked(level);

      tab.classList.toggle('locked', isLocked);
      tab.classList.toggle('active', level === this.state.currentLevel);

      if (isLocked) {
        const requiredXP = XP_CONFIG.levels[level].min;
        tab.querySelector('p').textContent = `🔒 Requires ${requiredXP} XP`;
      }
    });
  }

  renderLessons() {
    const lessonsGrid = document.getElementById('lessons-grid');
    const lessons = learningData[this.state.currentLevel].lessons;

    lessonsGrid.innerHTML = lessons.map((lesson, index) => {
      const isCompleted = this.state.completedQuizzes.has(lesson.id);
      const isLocked = index > 0 && !this.state.completedQuizzes.has(lessons[index - 1].id);

      let statusIcon = '📚';
      if (isCompleted) statusIcon = '✅';
      else if (isLocked) statusIcon = '🔒';

      return `
        <div class="lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
             data-lesson-id="${lesson.id}"
             onclick="app.openLesson('${lesson.id}')">
          <div class="lesson-header">
            <h3 class="lesson-title">${lesson.title}</h3>
            <span class="lesson-status">${statusIcon}</span>
          </div>
          <div class="lesson-meta">
            <span>📖 Lesson</span>
            <span>❓ Quiz</span>
            <span>✨ ${XP_CONFIG.lessonComplete + XP_CONFIG.quizPass} XP</span>
          </div>
        </div>
      `;
    }).join('');
  }

  showDashboard() {
    this.state.currentLesson = null;
    this.state.quizActive = false;
    this.renderDashboard();
    window.scrollTo(0, 0);
  }

  switchLevel(level) {
    this.state.currentLevel = level;
    this.renderDashboard();
  }

  // === LESSON MANAGEMENT ===
  openLesson(lessonId) {
    const lesson = this.getLessonById(lessonId);
    if (!lesson) return;

    this.state.currentLesson = lesson;
    this.state.quizActive = false;
    this.renderLessonView(lesson);

    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('lesson-detail').classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  renderLessonView(lesson) {
    const container = document.getElementById('lesson-detail');
    const isCompleted = this.state.completedLessons.has(lesson.id);
    const quizCompleted = this.state.completedQuizzes.has(lesson.id);

    container.innerHTML = `
      <div class="lesson-view fade-in">
        <h2>${lesson.title}</h2>
        
        <div class="lesson-content">
          ${lesson.content}
          
          <h4>💻 Code Example:</h4>
          <div class="code-block">
            <pre>${this.escapeHtml(lesson.codeExample)}</pre>
          </div>
        </div>
        
        ${lesson.codingExercise ? `
          <div id="coding-exercise-container"></div>
        ` : ''}
        
        <div class="lesson-actions">
          <button class="btn btn-secondary" onclick="app.showDashboard()">
            ← Back to Dashboard
          </button>
          
          ${!isCompleted ? `
            <button class="btn btn-primary" onclick="app.completeLesson('${lesson.id}')">
              Mark as Complete (+${XP_CONFIG.lessonComplete} XP)
            </button>
          ` : `
            <button class="btn btn-success" disabled>
              ✓ Lesson Completed
            </button>
          `}
          
          ${isCompleted && !quizCompleted ? `
            <button class="btn btn-primary" onclick="app.startQuiz('${lesson.id}')">
              Take Quiz (+${XP_CONFIG.quizPass} XP) →
            </button>
          ` : ''}
          
          ${quizCompleted ? `
            <button class="btn btn-success" onclick="app.startQuiz('${lesson.id}')">
              ✓ Quiz Passed - Retake?
            </button>
          ` : ''}
        </div>
      </div>
    `;

    // Render code editor if lesson has coding exercise
    if (lesson.codingExercise) {
      this.renderCodeEditor(lesson);
    }
  }

  completeLesson(lessonId) {
    if (!this.state.completedLessons.has(lessonId)) {
      this.state.completedLessons.add(lessonId);
      this.addXP(XP_CONFIG.lessonComplete);
      this.saveProgress();
      this.renderLessonView(this.getLessonById(lessonId));
      this.showModal('🎉', 'Lesson Complete!', `You earned ${XP_CONFIG.lessonComplete} XP! Now take the quiz to unlock the next lesson.`);
    }
  }

  // === QUIZ SYSTEM ===
  startQuiz(lessonId) {
    const lesson = this.getLessonById(lessonId);
    if (!lesson || !this.state.completedLessons.has(lessonId)) {
      alert('Please complete the lesson first!');
      return;
    }

    this.state.quizActive = true;
    this.state.currentQuizIndex = 0;
    this.state.quizAnswers = new Array(lesson.quiz.questions.length).fill(null);
    this.state.quizScore = 0;

    this.renderQuiz(lesson);
  }

  renderQuiz(lesson) {
    const container = document.getElementById('lesson-detail');
    const quiz = lesson.quiz;
    const currentQ = this.state.currentQuizIndex;
    const question = quiz.questions[currentQ];

    container.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="quiz-header">
          <h2>📝 Quiz: ${lesson.title}</h2>
          <p>Question ${currentQ + 1} of ${quiz.questions.length}</p>
          
          <div class="quiz-progress">
            ${quiz.questions.map((_, i) => `
              <div class="progress-dot ${i === currentQ ? 'active' : ''} ${this.state.quizAnswers[i] !== null ? (this.state.quizAnswers[i] === quiz.questions[i].correct ? 'correct' : 'incorrect') : ''}"></div>
            `).join('')}
          </div>
        </div>
        
        <div class="question-card">
          <p class="question-text">${question.question}</p>
          
          <div class="options-grid">
            ${question.options.map((option, i) => `
              <button class="option-button ${this.state.quizAnswers[currentQ] === i ? 'selected' : ''}" 
                      onclick="app.selectAnswer(${i})"
                      ${this.state.quizAnswers[currentQ] !== null ? 'disabled' : ''}>
                ${String.fromCharCode(65 + i)}. ${option}
              </button>
            `).join('')}
          </div>
        </div>
        
        <div class="lesson-actions">
          <button class="btn btn-secondary" onclick="app.showDashboard()">
            Exit Quiz
          </button>
          
          ${this.state.quizAnswers[currentQ] !== null ? `
            ${currentQ < quiz.questions.length - 1 ? `
              <button class="btn btn-primary" onclick="app.nextQuestion()">
                Next Question →
              </button>
            ` : `
              <button class="btn btn-success" onclick="app.finishQuiz()">
                See Results
              </button>
            `}
          ` : ''}
        </div>
      </div>
    `;
  }

  selectAnswer(answerIndex) {
    const lesson = this.state.currentLesson;
    const currentQ = this.state.currentQuizIndex;
    const correctAnswer = lesson.quiz.questions[currentQ].correct;

    this.state.quizAnswers[currentQ] = answerIndex;

    // Show visual feedback
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctAnswer) {
        btn.classList.add('correct');
      } else if (i === answerIndex && i !== correctAnswer) {
        btn.classList.add('incorrect');
      }
    });

    if (answerIndex === correctAnswer) {
      this.state.quizScore++;
    }

    this.renderQuiz(lesson);
  }

  nextQuestion() {
    this.state.currentQuizIndex++;
    this.renderQuiz(this.state.currentLesson);
  }

  finishQuiz() {
    const lesson = this.state.currentLesson;
    const quiz = lesson.quiz;
    const passed = this.state.quizScore >= quiz.passingScore;

    let message = '';
    let icon = '';

    if (passed) {
      icon = '🎊';
      message = `Congratulations! You passed with ${this.state.quizScore}/${quiz.questions.length} correct!`;

      // Award XP only if first time passing
      if (!this.state.completedQuizzes.has(lesson.id)) {
        this.state.completedQuizzes.add(lesson.id);
        this.addXP(XP_CONFIG.quizPass);
        message += ` You earned ${XP_CONFIG.quizPass} XP!`;
        this.createConfetti();
      } else {
        message += ' (Already completed - no XP awarded)';
      }
    } else {
      icon = '😔';
      message = `You scored ${this.state.quizScore}/${quiz.questions.length}. You need ${quiz.passingScore}/${quiz.questions.length} to pass. Try again!`;
    }

    this.saveProgress();
    this.showModal(icon, passed ? 'Quiz Passed!' : 'Quiz Failed', message, () => {
      if (passed) {
        this.checkLevelUnlock();
        this.showDashboard();
      } else {
        this.startQuiz(lesson.id);
      }
    });
  }

  // === XP AND PROGRESSION ===
  addXP(amount) {
    this.state.xp += amount;
    this.updateXPDisplay();
    this.saveProgress();
  }

  updateXPDisplay() {
    const xpBadge = document.getElementById('xp-amount');
    const levelBadge = document.getElementById('level-badge');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    if (xpBadge) xpBadge.textContent = `${this.state.xp} XP`;

    const level = this.getCurrentLevel();
    if (levelBadge) levelBadge.textContent = level.charAt(0).toUpperCase() + level.slice(1);

    const levelConfig = XP_CONFIG.levels[level];
    const progress = ((this.state.xp - levelConfig.min) / (levelConfig.max - levelConfig.min)) * 100;
    const cappedProgress = Math.min(progress, 100);

    if (progressFill) progressFill.style.width = cappedProgress + '%';
    if (progressText) {
      progressText.textContent = `${this.state.xp} / ${levelConfig.max} XP`;
    }
  }

  updateProgressBar() {
    const levelTitle = document.getElementById('current-level-title');
    if (levelTitle) {
      const level = this.getCurrentLevel();
      levelTitle.textContent = `${level.charAt(0).toUpperCase() + level.slice(1)} Level Progress`;
    }
    this.updateXPDisplay();
  }

  getCurrentLevel() {
    if (this.state.xp >= XP_CONFIG.levels.advanced.min) return 'advanced';
    if (this.state.xp >= XP_CONFIG.levels.intermediate.min) return 'intermediate';
    return 'beginner';
  }

  isLevelLocked(level) {
    return this.state.xp < XP_CONFIG.levels[level].min;
  }

  checkLevelUnlock() {
    const currentLevel = this.getCurrentLevel();

    if (currentLevel === 'intermediate' && this.state.currentLevel === 'beginner') {
      this.showModal('🎉', 'Level Unlocked!', 'You unlocked Intermediate level! Keep going!');
      this.state.currentLevel = 'intermediate';
      this.saveProgress();
    } else if (currentLevel === 'advanced' && this.state.currentLevel === 'intermediate') {
      this.showModal('🏆', 'Level Unlocked!', 'You unlocked Advanced level! You\'re becoming an OOP master!');
      this.state.currentLevel = 'advanced';
      this.saveProgress();
    }
  }

  // === HELPERS ===
  getLessonById(lessonId) {
    for (const level in learningData) {
      const lesson = learningData[level].lessons.find(l => l.id === lessonId);
      if (lesson) return lesson;
    }
    return null;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // === MODAL ===
  showModal(icon, title, message, callback = null) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = `
      <div class="modal-icon">${icon}</div>
      <h2>${title}</h2>
      <p>${message}</p>
      <button class="btn btn-primary" onclick="app.closeModal()">
        Continue
      </button>
    `;

    modal.classList.add('active');

    if (callback) {
      this.modalCallback = callback;
    } else {
      this.modalCallback = null;
    }
  }

  closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');

    if (this.modalCallback) {
      this.modalCallback();
      this.modalCallback = null;
    }
  }

  // === CODE EDITOR === 
  renderCodeEditor(lesson) {
    if (!lesson.codingExercise) return;

    const editorId = `code-editor-${lesson.id}`;
    const exerciseCompleted = this.state.completedLessons.has(`${lesson.id}-code`);

    // Create container with ID for the code editor
    const container = document.getElementById('coding-exercise-container');
    if (!container) return;

    container.innerHTML = `<div id="${editorId}"></div>`;

    // Initialize code editor
    const editor = new CodeEditor(editorId, {
      description: lesson.codingExercise.description,
      starterCode: lesson.codingExercise.starterCode,
      onRun: (success) => {
        if (success && !exerciseCompleted) {
          // Award XP for successful code execution
          this.addXP(50); // Bonus XP for coding exercise
          this.state.completedLessons.add(`${lesson.id}-code`);
          this.saveProgress();

          // Show success message
          setTimeout(() => {
            this.showModal(
              '🎉',
              'Code Executed Successfully!',
              `<p>Great job! Your code ran without errors.</p>
               <div class="xp-earned">+50 XP Earned!</div>`,
              null
            );
          }, 500);
        }
      }
    });

    // Store editor instance
    this.currentEditor = editor;
  }

  // === CONFETTI EFFECT ===
  createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f5576c', '#4facfe', '#00f2fe', '#10b981'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
      }, i * 30);
    }
  }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new LearningPlatform();
});
