// Comprehensive Aptitude Questions for Placement Preparation
// Categories: Quantitative, Logical Reasoning, Verbal

export interface AptitudeQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
    category: 'quantitative' | 'logical' | 'verbal';
    subcategory: string;
    difficulty: 'easy' | 'medium' | 'hard';
    timeToSolve: number; // seconds
}

export const aptitudeQuestions: AptitudeQuestion[] = [
    // ==========================================
    // QUANTITATIVE APTITUDE - Numbers
    // ==========================================
    {
        id: 'q1',
        question: 'What is the sum of all natural numbers from 1 to 100?',
        options: ['5000', '5050', '5100', '4950'],
        correctAnswer: 1,
        explanation: 'Using the formula n(n+1)/2 = 100×101/2 = 5050',
        category: 'quantitative',
        subcategory: 'numbers',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'q2',
        question: 'If x + y = 10 and xy = 21, what is the value of x² + y²?',
        options: ['58', '48', '38', '68'],
        correctAnswer: 0,
        explanation: 'x² + y² = (x+y)² - 2xy = 100 - 42 = 58',
        category: 'quantitative',
        subcategory: 'algebra',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q3',
        question: 'The difference between a number and its two-fifths is 150. What is the number?',
        options: ['200', '250', '300', '350'],
        correctAnswer: 1,
        explanation: 'Let N be the number. N - 2N/5 = 150 → 3N/5 = 150 → N = 250',
        category: 'quantitative',
        subcategory: 'numbers',
        difficulty: 'easy',
        timeToSolve: 45
    },
    {
        id: 'q4',
        question: 'What is the LCM of 12, 18, and 24?',
        options: ['72', '48', '36', '96'],
        correctAnswer: 0,
        explanation: '12 = 2²×3, 18 = 2×3², 24 = 2³×3. LCM = 2³×3² = 72',
        category: 'quantitative',
        subcategory: 'numbers',
        difficulty: 'easy',
        timeToSolve: 45
    },
    {
        id: 'q5',
        question: 'The product of two numbers is 120 and their sum is 23. What is their difference?',
        options: ['7', '5', '9', '11'],
        correctAnswer: 0,
        explanation: '(a-b)² = (a+b)² - 4ab = 529 - 480 = 49 → a-b = 7',
        category: 'quantitative',
        subcategory: 'algebra',
        difficulty: 'medium',
        timeToSolve: 60
    },

    // ==========================================
    // QUANTITATIVE APTITUDE - Percentages
    // ==========================================
    {
        id: 'q6',
        question: 'If 20% of a number is 50, what is 40% of the same number?',
        options: ['100', '80', '120', '90'],
        correctAnswer: 0,
        explanation: '20% = 50, so 100% = 250. Therefore, 40% = 100',
        category: 'quantitative',
        subcategory: 'percentages',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'q7',
        question: 'A shopkeeper sold an article for ₹450, incurring a loss of 10%. What was the cost price?',
        options: ['₹500', '₹495', '₹505', '₹510'],
        correctAnswer: 0,
        explanation: 'SP = CP × (1 - Loss%). 450 = CP × 0.9 → CP = 500',
        category: 'quantitative',
        subcategory: 'profit-loss',
        difficulty: 'easy',
        timeToSolve: 45
    },
    {
        id: 'q8',
        question: 'The price of a product is increased by 20% and then decreased by 20%. What is the net percentage change?',
        options: ['No change', '4% decrease', '4% increase', '2% decrease'],
        correctAnswer: 1,
        explanation: 'Let original = 100. After 20% increase = 120. After 20% decrease = 96. Net change = -4%',
        category: 'quantitative',
        subcategory: 'percentages',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q9',
        question: 'In an election between two candidates, one got 55% of total votes and won by 2000 votes. Find total votes.',
        options: ['20000', '18000', '22000', '25000'],
        correctAnswer: 0,
        explanation: 'Winner got 55%, loser got 45%. Difference = 10% = 2000. Total = 20000',
        category: 'quantitative',
        subcategory: 'percentages',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q10',
        question: 'A number is increased by 25% and then decreased by 25%. The result is:',
        options: ['Same as original', '6.25% less', '6.25% more', '12.5% less'],
        correctAnswer: 1,
        explanation: 'Using formula: Net change = -25×25/100 = -6.25%',
        category: 'quantitative',
        subcategory: 'percentages',
        difficulty: 'medium',
        timeToSolve: 45
    },

    // ==========================================
    // QUANTITATIVE APTITUDE - Time and Work
    // ==========================================
    {
        id: 'q11',
        question: 'A can do a piece of work in 10 days and B can do it in 15 days. In how many days can they complete it together?',
        options: ['5 days', '6 days', '7 days', '8 days'],
        correctAnswer: 1,
        explanation: 'A\'s rate = 1/10, B\'s rate = 1/15. Combined = 1/10 + 1/15 = 1/6. So 6 days.',
        category: 'quantitative',
        subcategory: 'time-work',
        difficulty: 'easy',
        timeToSolve: 45
    },
    {
        id: 'q12',
        question: 'If 5 workers can build a wall in 12 days, how many days will 10 workers take?',
        options: ['6 days', '24 days', '5 days', '8 days'],
        correctAnswer: 0,
        explanation: 'Work is constant. 5×12 = 10×D → D = 6 days',
        category: 'quantitative',
        subcategory: 'time-work',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'q13',
        question: 'A and B together can complete work in 12 days. A alone takes 20 days. How many days will B alone take?',
        options: ['30 days', '25 days', '35 days', '40 days'],
        correctAnswer: 0,
        explanation: '1/A + 1/B = 1/12. 1/20 + 1/B = 1/12 → 1/B = 1/12 - 1/20 = 1/30. B = 30 days.',
        category: 'quantitative',
        subcategory: 'time-work',
        difficulty: 'medium',
        timeToSolve: 60
    },

    // ==========================================
    // QUANTITATIVE APTITUDE - Speed, Time, Distance
    // ==========================================
    {
        id: 'q14',
        question: 'A train travels 360 km in 4 hours. What is its speed in m/s?',
        options: ['25 m/s', '30 m/s', '20 m/s', '35 m/s'],
        correctAnswer: 0,
        explanation: 'Speed = 360/4 = 90 km/h. In m/s = 90 × 5/18 = 25 m/s',
        category: 'quantitative',
        subcategory: 'speed-distance',
        difficulty: 'easy',
        timeToSolve: 45
    },
    {
        id: 'q15',
        question: 'A person covers half the distance at 40 km/h and rest at 60 km/h. Find average speed.',
        options: ['48 km/h', '50 km/h', '45 km/h', '52 km/h'],
        correctAnswer: 0,
        explanation: 'Average speed = 2ab/(a+b) = 2×40×60/100 = 48 km/h',
        category: 'quantitative',
        subcategory: 'speed-distance',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q16',
        question: 'Two trains 150m and 200m long are running in opposite directions at 40 km/h and 32 km/h. How long will they take to cross each other?',
        options: ['17.5 sec', '18 sec', '15 sec', '20 sec'],
        correctAnswer: 1,
        explanation: 'Relative speed = 40+32 = 72 km/h = 20 m/s. Distance = 350m. Time = 350/20 = 17.5 ≈ 18 sec',
        category: 'quantitative',
        subcategory: 'speed-distance',
        difficulty: 'medium',
        timeToSolve: 75
    },

    // ==========================================
    // QUANTITATIVE APTITUDE - Ratios and Proportions
    // ==========================================
    {
        id: 'q17',
        question: 'If A:B = 2:3 and B:C = 4:5, find A:B:C',
        options: ['8:12:15', '2:3:5', '4:6:5', '8:12:10'],
        correctAnswer: 0,
        explanation: 'A:B = 2:3 = 8:12, B:C = 4:5 = 12:15. So A:B:C = 8:12:15',
        category: 'quantitative',
        subcategory: 'ratios',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q18',
        question: 'The ratio of ages of A and B is 3:5. After 6 years, ratio becomes 2:3. Find present age of A.',
        options: ['18 years', '15 years', '12 years', '21 years'],
        correctAnswer: 0,
        explanation: 'Let ages be 3x and 5x. (3x+6)/(5x+6) = 2/3 → 9x+18 = 10x+12 → x = 6. A = 18 years',
        category: 'quantitative',
        subcategory: 'ratios',
        difficulty: 'medium',
        timeToSolve: 75
    },

    // ==========================================
    // QUANTITATIVE APTITUDE - Simple/Compound Interest
    // ==========================================
    {
        id: 'q19',
        question: 'Find the simple interest on ₹5000 at 10% per annum for 3 years.',
        options: ['₹1500', '₹1000', '₹1200', '₹1800'],
        correctAnswer: 0,
        explanation: 'SI = P×R×T/100 = 5000×10×3/100 = ₹1500',
        category: 'quantitative',
        subcategory: 'interest',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'q20',
        question: 'Find compound interest on ₹10000 at 10% for 2 years compounded annually.',
        options: ['₹2100', '₹2000', '₹2200', '₹1900'],
        correctAnswer: 0,
        explanation: 'A = P(1+R/100)^n = 10000×1.1² = 12100. CI = 12100-10000 = ₹2100',
        category: 'quantitative',
        subcategory: 'interest',
        difficulty: 'easy',
        timeToSolve: 45
    },

    // ==========================================
    // LOGICAL REASONING - Series
    // ==========================================
    {
        id: 'l1',
        question: 'Find the next number: 2, 6, 12, 20, 30, ?',
        options: ['42', '40', '38', '44'],
        correctAnswer: 0,
        explanation: 'Differences: 4, 6, 8, 10, 12. Each diff increases by 2. Next = 30 + 12 = 42',
        category: 'logical',
        subcategory: 'series',
        difficulty: 'easy',
        timeToSolve: 45
    },
    {
        id: 'l2',
        question: 'Find the next number: 1, 1, 2, 3, 5, 8, ?',
        options: ['13', '11', '12', '15'],
        correctAnswer: 0,
        explanation: 'Fibonacci series: each number is sum of previous two. 5 + 8 = 13',
        category: 'logical',
        subcategory: 'series',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'l3',
        question: 'Find the missing number: 3, 9, 27, ?, 243',
        options: ['81', '54', '72', '90'],
        correctAnswer: 0,
        explanation: 'Each number is multiplied by 3. 27 × 3 = 81',
        category: 'logical',
        subcategory: 'series',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'l4',
        question: 'Find the next: A, C, F, J, O, ?',
        options: ['U', 'T', 'S', 'V'],
        correctAnswer: 0,
        explanation: 'Gaps: +2, +3, +4, +5, +6. O(15) + 6 = U(21)',
        category: 'logical',
        subcategory: 'series',
        difficulty: 'medium',
        timeToSolve: 60
    },

    // ==========================================
    // LOGICAL REASONING - Coding-Decoding  
    // ==========================================
    {
        id: 'l5',
        question: 'If COMPUTER is coded as RFUVQNPC, how is PRINTER coded?',
        options: ['QSHOUFS', 'QSJOUFS', 'SFQSOJT', 'QSJUOFS'],
        correctAnswer: 1,
        explanation: 'Each letter shifted by +1. P→Q, R→S, I→J, N→O, T→U, E→F, R→S',
        category: 'logical',
        subcategory: 'coding-decoding',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'l6',
        question: 'If FRIEND is coded as HUMJTK, how is CANDLE coded?',
        options: ['EDRIRL', 'DCPFNG', 'EDRJFM', 'ECQFNI'],
        correctAnswer: 0,
        explanation: 'Pattern: +2 for each letter. C→E, A→D, N→R, D→I, L→R, E→L',
        category: 'logical',
        subcategory: 'coding-decoding',
        difficulty: 'medium',
        timeToSolve: 60
    },

    // ==========================================
    // LOGICAL REASONING - Blood Relations
    // ==========================================
    {
        id: 'l7',
        question: 'Pointing to a photo, A says "He is the son of my father\'s only daughter". How is the person in photo related to A?',
        options: ['Son', 'Nephew', 'Brother', 'Grandson'],
        correctAnswer: 0,
        explanation: 'Father\'s only daughter = A (if female). Son of A = A\'s son.',
        category: 'logical',
        subcategory: 'blood-relations',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'l8',
        question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to D?',
        options: ['Granddaughter', 'Daughter', 'Grandmother', 'Grandfather'],
        correctAnswer: 0,
        explanation: 'D is C\'s father, C is B\'s mother, A is B\'s sister. So D is A\'s grandfather, A is D\'s granddaughter.',
        category: 'logical',
        subcategory: 'blood-relations',
        difficulty: 'hard',
        timeToSolve: 90
    },

    // ==========================================
    // LOGICAL REASONING - Direction Sense
    // ==========================================
    {
        id: 'l9',
        question: 'A walks 10m South, then turns left and walks 20m. He then turns left again and walks 10m. In which direction is he from starting point?',
        options: ['East', 'West', 'North', 'South'],
        correctAnswer: 0,
        explanation: 'South 10m → East 20m → North 10m. Final position is 20m East of start.',
        category: 'logical',
        subcategory: 'direction',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'l10',
        question: 'P started walking towards South. After walking 50m, he turned left and walked 30m. Then he turned left again and walked 50m. How far is he from starting point?',
        options: ['30m', '50m', '80m', '100m'],
        correctAnswer: 0,
        explanation: 'South 50m → East 30m → North 50m. He is 30m East of start.',
        category: 'logical',
        subcategory: 'direction',
        difficulty: 'medium',
        timeToSolve: 60
    },

    // ==========================================
    // LOGICAL REASONING - Syllogisms
    // ==========================================
    {
        id: 'l11',
        question: 'All dogs are animals. All animals are living beings. Conclusion: All dogs are living beings.',
        options: ['Valid', 'Invalid', 'Cannot be determined', 'Partially valid'],
        correctAnswer: 0,
        explanation: 'This is a valid syllogism following the transitive property.',
        category: 'logical',
        subcategory: 'syllogism',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'l12',
        question: 'Some cats are dogs. All dogs are animals. Conclusion: Some cats are animals.',
        options: ['Valid', 'Invalid', 'Cannot be determined', 'Partially valid'],
        correctAnswer: 0,
        explanation: 'If some cats are dogs and all dogs are animals, then those cats must be animals.',
        category: 'logical',
        subcategory: 'syllogism',
        difficulty: 'medium',
        timeToSolve: 45
    },

    // ==========================================
    // LOGICAL REASONING - Puzzles
    // ==========================================
    {
        id: 'l13',
        question: 'In a row of boys, A is 15th from the left and B is 7th from the right. If they interchange, A becomes 11th from left. How many boys are in the row?',
        options: ['21', '23', '17', '19'],
        correctAnswer: 2,
        explanation: 'After interchange, A is at B\'s position (11th from left). B was 7th from right. Total = 11 + 7 - 1 = 17',
        category: 'logical',
        subcategory: 'puzzles',
        difficulty: 'hard',
        timeToSolve: 90
    },

    // ==========================================
    // VERBAL - Synonyms/Antonyms
    // ==========================================
    {
        id: 'v1',
        question: 'Choose the synonym of "Abundant"',
        options: ['Scarce', 'Plentiful', 'Rare', 'Limited'],
        correctAnswer: 1,
        explanation: 'Abundant means plentiful or in large quantities.',
        category: 'verbal',
        subcategory: 'synonyms',
        difficulty: 'easy',
        timeToSolve: 20
    },
    {
        id: 'v2',
        question: 'Choose the antonym of "Benevolent"',
        options: ['Kind', 'Malevolent', 'Generous', 'Charitable'],
        correctAnswer: 1,
        explanation: 'Benevolent means kind. Malevolent means cruel or harmful.',
        category: 'verbal',
        subcategory: 'antonyms',
        difficulty: 'easy',
        timeToSolve: 20
    },
    {
        id: 'v3',
        question: 'Choose the synonym of "Ephemeral"',
        options: ['Eternal', 'Transient', 'Permanent', 'Lasting'],
        correctAnswer: 1,
        explanation: 'Ephemeral means lasting for a very short time, similar to transient.',
        category: 'verbal',
        subcategory: 'synonyms',
        difficulty: 'medium',
        timeToSolve: 30
    },

    // ==========================================
    // VERBAL - Sentence Completion
    // ==========================================
    {
        id: 'v4',
        question: 'The weather was so _____ that we decided to postpone the picnic.',
        options: ['pleasant', 'inclement', 'beautiful', 'sunny'],
        correctAnswer: 1,
        explanation: 'Inclement means unpleasant, which fits the context of postponing.',
        category: 'verbal',
        subcategory: 'sentence-completion',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'v5',
        question: 'Despite being a _____, he handled the crisis with remarkable calm.',
        options: ['veteran', 'expert', 'novice', 'professional'],
        correctAnswer: 2,
        explanation: '"Despite" indicates contrast. A novice handling crisis calmly is unexpected.',
        category: 'verbal',
        subcategory: 'sentence-completion',
        difficulty: 'medium',
        timeToSolve: 45
    },

    // ==========================================
    // VERBAL - Error Spotting
    // ==========================================
    {
        id: 'v6',
        question: 'Find the error: "He is one of the best player in the team."',
        options: ['He is', 'one of the best', 'player', 'in the team'],
        correctAnswer: 2,
        explanation: '"One of the" takes plural noun. Should be "players".',
        category: 'verbal',
        subcategory: 'error-spotting',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'v7',
        question: 'Find the error: "Neither of the students have completed their assignment."',
        options: ['Neither', 'of the students', 'have completed', 'their assignment'],
        correctAnswer: 2,
        explanation: '"Neither" takes singular verb. Should be "has completed".',
        category: 'verbal',
        subcategory: 'error-spotting',
        difficulty: 'medium',
        timeToSolve: 45
    },

    // ==========================================
    // More Quantitative - Advanced
    // ==========================================
    {
        id: 'q21',
        question: 'A boat can travel 20 km downstream in 2 hours. If the speed of the stream is 2 km/h, find the speed of the boat in still water.',
        options: ['8 km/h', '10 km/h', '12 km/h', '6 km/h'],
        correctAnswer: 0,
        explanation: 'Downstream speed = 20/2 = 10 km/h. Boat speed = 10 - 2 = 8 km/h',
        category: 'quantitative',
        subcategory: 'boats-streams',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q22',
        question: 'A pipe can fill a tank in 6 hours. Another pipe can empty it in 8 hours. If both are opened, how long to fill?',
        options: ['24 hours', '20 hours', '18 hours', '22 hours'],
        correctAnswer: 0,
        explanation: 'Net rate = 1/6 - 1/8 = 1/24. So 24 hours to fill.',
        category: 'quantitative',
        subcategory: 'pipes-cisterns',
        difficulty: 'medium',
        timeToSolve: 60
    },
    {
        id: 'q23',
        question: 'In how many ways can 5 people be seated in a row?',
        options: ['120', '60', '24', '100'],
        correctAnswer: 0,
        explanation: 'Permutation: 5! = 5×4×3×2×1 = 120',
        category: 'quantitative',
        subcategory: 'permutation-combination',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'q24',
        question: 'In how many ways can 3 people be selected from 5 for a committee?',
        options: ['10', '15', '20', '60'],
        correctAnswer: 0,
        explanation: 'Combination: 5C3 = 5!/(3!×2!) = 10',
        category: 'quantitative',
        subcategory: 'permutation-combination',
        difficulty: 'easy',
        timeToSolve: 30
    },
    {
        id: 'q25',
        question: 'A bag contains 4 red and 3 blue balls. What is the probability of drawing a red ball?',
        options: ['4/7', '3/7', '1/2', '4/3'],
        correctAnswer: 0,
        explanation: 'P(Red) = Favorable/Total = 4/7',
        category: 'quantitative',
        subcategory: 'probability',
        difficulty: 'easy',
        timeToSolve: 30
    }
];

// Helper functions
export function getQuestionsByCategory(category: 'quantitative' | 'logical' | 'verbal'): AptitudeQuestion[] {
    return aptitudeQuestions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): AptitudeQuestion[] {
    return aptitudeQuestions.filter(q => q.difficulty === difficulty);
}

export function getQuestionsBySubcategory(subcategory: string): AptitudeQuestion[] {
    return aptitudeQuestions.filter(q => q.subcategory === subcategory);
}

export function getRandomQuestions(count: number, category?: string): AptitudeQuestion[] {
    let pool = category
        ? aptitudeQuestions.filter(q => q.category === category)
        : [...aptitudeQuestions];

    const shuffled = pool.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Statistics
export const aptitudeStats = {
    total: aptitudeQuestions.length,
    byCategory: {
        quantitative: aptitudeQuestions.filter(q => q.category === 'quantitative').length,
        logical: aptitudeQuestions.filter(q => q.category === 'logical').length,
        verbal: aptitudeQuestions.filter(q => q.category === 'verbal').length
    },
    byDifficulty: {
        easy: aptitudeQuestions.filter(q => q.difficulty === 'easy').length,
        medium: aptitudeQuestions.filter(q => q.difficulty === 'medium').length,
        hard: aptitudeQuestions.filter(q => q.difficulty === 'hard').length
    }
};
