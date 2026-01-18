// Interactive Code Editor Component
class CodeEditor {
    constructor(containerId, options = {}) {
        this.containerId = containerId;
        this.options = {
            starterCode: options.starterCode || '// Write your code here\n',
            description: options.description || '',
            onRun: options.onRun || null,
            readOnly: options.readOnly || false
        };

        this.output = [];
        this.render();
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id "${this.containerId}" not found`);
            return;
        }

        container.innerHTML = `
      <div class="code-editor-container">
        <div class="code-editor-header">
          <div class="code-editor-title">
            <span class="code-icon">💻</span>
            <span>Interactive Code Editor</span>
          </div>
          <div class="code-editor-controls">
            <button class="btn-icon" id="${this.containerId}-run" title="Run Code">
              ▶️ Run
            </button>
            <button class="btn-icon" id="${this.containerId}-clear" title="Clear Output">
              🗑️ Clear
            </button>
            <button class="btn-icon" id="${this.containerId}-reset" title="Reset Code">
              🔄 Reset
            </button>
          </div>
        </div>
        
        ${this.options.description ? `
          <div class="code-editor-description">
            ${this.options.description}
          </div>
        ` : ''}
        
        <div class="code-editor-body">
          <div class="code-editor-input">
            <div class="code-editor-line-numbers" id="${this.containerId}-line-numbers"></div>
            <textarea 
              class="code-editor-textarea" 
              id="${this.containerId}-textarea"
              spellcheck="false"
              ${this.options.readOnly ? 'readonly' : ''}
            >${this.options.starterCode}</textarea>
            <pre class="code-editor-highlight" id="${this.containerId}-highlight"></pre>
          </div>
          
          <div class="code-editor-output-section">
            <div class="output-header">
              <span>📤 Console Output</span>
            </div>
            <div class="code-editor-output" id="${this.containerId}-output">
              <div class="output-placeholder">Run your code to see the output here...</div>
            </div>
          </div>
        </div>
      </div>
    `;

        this.attachEventListeners();
        this.updateLineNumbers();
        this.highlightSyntax();
    }

    attachEventListeners() {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        const runBtn = document.getElementById(`${this.containerId}-run`);
        const clearBtn = document.getElementById(`${this.containerId}-clear`);
        const resetBtn = document.getElementById(`${this.containerId}-reset`);

        if (textarea) {
            textarea.addEventListener('input', () => {
                this.updateLineNumbers();
                this.highlightSyntax();
            });

            textarea.addEventListener('scroll', () => {
                const highlight = document.getElementById(`${this.containerId}-highlight`);
                const lineNumbers = document.getElementById(`${this.containerId}-line-numbers`);
                if (highlight) highlight.scrollTop = textarea.scrollTop;
                if (lineNumbers) lineNumbers.scrollTop = textarea.scrollTop;
            });

            textarea.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
                    textarea.selectionStart = textarea.selectionEnd = start + 2;
                    this.updateLineNumbers();
                    this.highlightSyntax();
                }
            });
        }

        if (runBtn) {
            runBtn.addEventListener('click', () => this.runCode());
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearOutput());
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetCode());
        }
    }

    updateLineNumbers() {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        const lineNumbers = document.getElementById(`${this.containerId}-line-numbers`);

        if (!textarea || !lineNumbers) return;

        const lines = textarea.value.split('\n');
        const lineNumbersHtml = lines.map((_, i) => `<div>${i + 1}</div>`).join('');
        lineNumbers.innerHTML = lineNumbersHtml;
    }

    highlightSyntax() {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        const highlight = document.getElementById(`${this.containerId}-highlight`);

        if (!textarea || !highlight) return;

        const code = textarea.value;
        const highlighted = this.syntaxHighlight(code);
        highlight.innerHTML = highlighted + '\n';
    }

    syntaxHighlight(code) {
        // JavaScript keywords
        const keywords = /\b(class|const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|extends|import|export|from|default|async|await|typeof|instanceof|delete|void|in|of)\b/g;

        // Strings
        const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g;

        // Comments
        const singleLineComments = /(\/\/.*$)/gm;
        const multiLineComments = /(\/\*[\s\S]*?\*\/)/g;

        // Numbers
        const numbers = /\b(\d+\.?\d*)\b/g;

        // Functions and methods
        const functions = /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g;

        let highlighted = code;

        // Order matters - do comments first to avoid highlighting inside comments
        highlighted = highlighted.replace(multiLineComments, '<span class="comment">$1</span>');
        highlighted = highlighted.replace(singleLineComments, '<span class="comment">$1</span>');
        highlighted = highlighted.replace(strings, '<span class="string">$1</span>');
        highlighted = highlighted.replace(keywords, '<span class="keyword">$1</span>');
        highlighted = highlighted.replace(numbers, '<span class="number">$1</span>');
        highlighted = highlighted.replace(functions, '<span class="function">$1</span>');

        return highlighted;
    }

    runCode() {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        if (!textarea) return;

        const code = textarea.value;
        this.output = [];

        // Create a custom console
        const customConsole = {
            log: (...args) => {
                this.output.push({
                    type: 'log',
                    content: args.map(arg => this.formatOutput(arg)).join(' ')
                });
            },
            error: (...args) => {
                this.output.push({
                    type: 'error',
                    content: args.map(arg => this.formatOutput(arg)).join(' ')
                });
            },
            warn: (...args) => {
                this.output.push({
                    type: 'warn',
                    content: args.map(arg => this.formatOutput(arg)).join(' ')
                });
            },
            info: (...args) => {
                this.output.push({
                    type: 'info',
                    content: args.map(arg => this.formatOutput(arg)).join(' ')
                });
            }
        };

        try {
            // Execute code with custom console
            const func = new Function('console', code);
            func(customConsole);

            if (this.output.length === 0) {
                this.output.push({
                    type: 'success',
                    content: '✓ Code executed successfully (no output)'
                });
            }

            // Call the onRun callback if provided
            if (this.options.onRun) {
                this.options.onRun(true);
            }
        } catch (error) {
            this.output.push({
                type: 'error',
                content: `❌ ${error.name}: ${error.message}`
            });

            if (this.options.onRun) {
                this.options.onRun(false);
            }
        }

        this.displayOutput();
    }

    formatOutput(value) {
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return value;
        if (typeof value === 'object') {
            try {
                return JSON.stringify(value, null, 2);
            } catch {
                return String(value);
            }
        }
        return String(value);
    }

    displayOutput() {
        const outputDiv = document.getElementById(`${this.containerId}-output`);
        if (!outputDiv) return;

        if (this.output.length === 0) {
            outputDiv.innerHTML = '<div class="output-placeholder">No output</div>';
            return;
        }

        const outputHtml = this.output.map(item => {
            const className = `output-line output-${item.type}`;
            return `<div class="${className}">${this.escapeHtml(item.content)}</div>`;
        }).join('');

        outputDiv.innerHTML = outputHtml;
    }

    clearOutput() {
        this.output = [];
        const outputDiv = document.getElementById(`${this.containerId}-output`);
        if (outputDiv) {
            outputDiv.innerHTML = '<div class="output-placeholder">Run your code to see the output here...</div>';
        }
    }

    resetCode() {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        if (textarea) {
            textarea.value = this.options.starterCode;
            this.updateLineNumbers();
            this.highlightSyntax();
            this.clearOutput();
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getCode() {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        return textarea ? textarea.value : '';
    }

    setCode(code) {
        const textarea = document.getElementById(`${this.containerId}-textarea`);
        if (textarea) {
            textarea.value = code;
            this.updateLineNumbers();
            this.highlightSyntax();
        }
    }
}
