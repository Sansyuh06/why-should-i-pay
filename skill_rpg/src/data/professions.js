
import { Terminal, Code, Database, Search, Layout, Server, Cpu, Globe, Lock, Palette, Cloud, BarChart } from 'lucide-react';

export const PROFESSIONS = {
  PYTHON_SPECIALIST: {
    id: 'python_specialist',
    label: 'Python Specialist',
    rpgClass: 'Cyber Rogue',
    heroName: 'Viper',
    avatarImage: '/avatars/avatar_viper_rogue_1767587163440.png',
    description: 'A master of automation and stealth optimization. Strikes from the shadows with clean, efficient scripts.',
    themeColor: 'emerald',
    stats: {
      agility: 8,
      stealth: 9,
      intelligence: 7,
    },
    titles: [
      { id: 'script_kiddie', label: 'Script Kiddie', level: 1 },
      { id: 'automator', label: 'Automator', level: 3 },
      { id: 'bot_master', label: 'Bot Master', level: 5 },
      { id: 'serpent_lord', label: 'Serpent Lord', level: 10 },
    ],
    skills: [
      { id: 'py_syntax', label: 'Basic Syntax', xp: 100, icon: Terminal, description: 'Mastering the indentation style.' },
      { id: 'py_lists', label: 'List Comprehensions', xp: 150, icon: Code, description: 'Writing loops in a single line.' },
      { id: 'py_automation', label: 'Automation Scripts', xp: 300, icon: Cpu, description: 'Making the machine work for you.' },
      { id: 'py_flask', label: 'Flask API', xp: 500, icon: Server, description: 'Serving data from the shadows.' },
      { id: 'py_pandas', label: 'Data Manipulation', xp: 600, icon: Database, description: 'Bending data to your will.' },
    ]
  },
  FRONTEND_DEV: {
    id: 'frontend_dev',
    label: 'Frontend Developer',
    rpgClass: 'Pixel Ranger',
    heroName: 'Neon',
    avatarImage: '/avatars/avatar_neon_ranger_1767587181281.png',
    description: 'A keen-eyed sharpshooter who crafts pixel-perfect interfaces. Hunts down layout bugs with precision.',
    themeColor: 'cyan',
    stats: {
      agility: 6,
      precision: 10,
      charisma: 8,
    },
    titles: [
      { id: 'div_aligner', label: 'Div Aligner', level: 1 },
      { id: 'styler', label: 'Style Mancer', level: 3 },
      { id: 'component_architect', label: 'Component Architect', level: 5 },
      { id: 'pixel_god', label: 'Pixel God', level: 10 },
    ],
    skills: [
      { id: 'html_struc', label: 'Semantic HTML', xp: 100, icon: Layout, description: 'Building a solid skeleton.' },
      { id: 'css_flex', label: 'Flexbox Mastery', xp: 200, icon: Layout, description: 'Controlling the flow of elements.' },
      { id: 'js_dom', label: 'DOM Manipulation', xp: 300, icon: Code, description: 'Directly interacting with the render layer.' },
      { id: 'react_hooks', label: 'React Hooks', xp: 500, icon: Cpu, description: 'Managing state with modern magic.' },
    ]
  },
  BACKEND_DEV: {
    id: 'backend_dev',
    label: 'Backend Developer',
    rpgClass: 'System Wizard',
    heroName: 'Merlin',
    avatarImage: '/avatars/avatar_merlin_wizard_1767587197833.png',
    description: 'An architect of the arcane. Weaves complex spells of logic and manages the flow regarding databases.',
    themeColor: 'violet',
    stats: {
      intelligence: 10,
      wisdom: 8,
      mana: 9,
    },
    titles: [
      { id: 'db_novice', label: 'DB Novice', level: 1 },
      { id: 'api_apprentice', label: 'API Apprentice', level: 3 },
      { id: 'logic_weaver', label: 'Logic Weaver', level: 5 },
      { id: 'arch_mage', label: 'Arch Mage', level: 10 },
    ],
    skills: [
      { id: 'sql_basics', label: 'SQL Queries', xp: 150, icon: Database, description: 'Speaking to the ancient archives.' },
      { id: 'api_rest', label: 'RESTful Design', xp: 300, icon: Globe, description: 'Standardizing the communication spells.' },
      { id: 'auth_security', label: 'Auth & Security', xp: 600, icon: Lock, description: 'Warding the gates against intruders.' },
    ]
  },
  CSHARP_MASTER: {
    id: 'csharp_master',
    label: 'C# Master',
    rpgClass: 'Code Templar',
    heroName: 'Cyrus',
    avatarImage: '/avatars/avatar_cyrus_templar_1767587216510.png',
    description: 'A knight of structure and type safety. Builds unshakeable foundations with the power of .NET.',
    themeColor: 'amber', // Need to support this in CSS
    stats: {
      strength: 9,
      defense: 10, // Type safety
      faith: 8, // Documentation
    },
    titles: [
      { id: 'dotnet_squire', label: '.NET Squire', level: 1 },
      { id: 'linq_knight', label: 'LINQ Knight', level: 3 },
      { id: 'async_paladin', label: 'Async Paladin', level: 5 },
      { id: 'runtime_lord', label: 'Runtime Lord', level: 10 },
    ],
    skills: [
      { id: 'cs_types', label: 'Strong Typing', xp: 100, icon: Code, description: 'Defending against runtime errors.' },
      { id: 'cs_linq', label: 'LINQ Mastery', xp: 200, icon: Search, description: 'Querying the battlefield.' },
      { id: 'cs_unity', label: 'Unity Engine', xp: 500, icon: Layout, description: 'Building new worlds.' },
    ]
  },
  SDET_SPECIALIST: {
    id: 'sdet_specialist',
    label: 'Automation (SDET)',
    rpgClass: 'Mecha Hunter',
    heroName: 'Aria',
    avatarImage: '/avatars/avatar_aria_hunter_1767587231844.png',
    description: 'A master of automated traps and mechanical assistants. Hunts bugs with relentless efficiency.',
    themeColor: 'emerald', // Reusing emerald or maybe orange if we add it
    stats: {
      precision: 9,
      engineering: 10,
      patience: 8,
    },
    titles: [
      { id: 'bug_tracker', label: 'Bug Tracker', level: 1 },
      { id: 'script_tinkerer', label: 'Script Tinkerer', level: 3 },
      { id: 'selenium_rider', label: 'Selenium Rider', level: 5 },
      { id: 'quality_prime', label: 'Quality Prime', level: 10 },
    ],
    skills: [
      { id: 'test_plans', label: 'Test Strategy', xp: 100, icon: Layout, description: 'Planning the hunt.' },
      { id: 'selenium', label: 'Selenium / Playwright', xp: 300, icon: Globe, description: 'Controlling the browser beasts.' },
      { id: 'ci_cd', label: 'CI/CD Pipelines', xp: 500, icon: Server, description: 'Automating the relentless pursuit.' },
    ]
  },
  GRAPHIC_DESIGNER: {
    id: 'graphic_designer',
    label: 'Graphic Designer',
    rpgClass: 'Chroma Mage',
    heroName: 'Pix',
    avatarImage: null, // Placeholder or missing
    description: 'Wields the spectrum as a weapon. Creates illusions and realities that captivate the mind.',
    themeColor: 'violet', // Reusing
    stats: {
      creativity: 10,
      perception: 8,
      illusion: 9,
    },
    titles: [
      { id: 'sketcher', label: 'Sketcher', level: 1 },
      { id: 'vector_weaver', label: 'Vector Weaver', level: 3 },
      { id: 'brand_sorcerer', label: 'Brand Sorcerer', level: 5 },
      { id: 'art_director', label: 'Art Director', level: 10 },
    ],
    skills: [
      { id: 'color_theory', label: 'Color Theory', xp: 100, icon: Palette, description: 'Mastering the elements of light.' },
      { id: 'typography', label: 'Typography', xp: 200, icon: Terminal, description: 'The runes of reading.' },
      { id: 'figma', label: 'Figma Prototyping', xp: 400, icon: Layout, description: 'Constructing the blueprint.' },
    ]
  },
  DEVOPS_ENGINEER: {
    id: 'devops_engineer',
    label: 'DevOps Engineer',
    rpgClass: 'Void Walker',
    heroName: 'Atlas',
    avatarImage: null,
    description: 'Walks between the realms of Code and Operation. Sustains the infrastructure of the universe.',
    themeColor: 'cyan',
    stats: {
      endurance: 10,
      speed: 7,
      void_magic: 9, // Cloud stuff
    },
    titles: [
      { id: 'script_runner', label: 'Script Runner', level: 1 },
      { id: 'container_captain', label: 'Container Captain', level: 3 },
      { id: 'cloud_architect', label: 'Cloud Architect', level: 5 },
      { id: 'system_admin', label: 'SysAdmin God', level: 10 },
    ],
    skills: [
      { id: 'linux_shell', label: 'Linux Shell', xp: 100, icon: Terminal, description: 'Speaking the ancient tongue.' },
      { id: 'docker', label: 'Dockerization', xp: 300, icon: Server, description: 'Boxing the reality.' },
      { id: 'kubernetes', label: 'Kubernetes', xp: 600, icon: Cloud, description: 'Orchestrating the swarm.' },
    ]
  },
  DATA_SCIENTIST: {
    id: 'data_scientist',
    label: 'Data Scientist',
    rpgClass: 'Data Oracle',
    heroName: 'Nova',
    avatarImage: null,
    description: 'Sees the future through the matrix of numbers. Predicts outcomes and uncovers hidden truths.',
    themeColor: 'emerald',
    stats: {
      intelligence: 10,
      insight: 9,
      prediction: 8,
    },
    titles: [
      { id: 'analyst', label: 'Analyst', level: 1 },
      { id: 'pattern_seeker', label: 'Pattern Seeker', level: 3 },
      { id: 'model_trainer', label: 'Model Trainer', level: 5 },
      { id: 'ai_prophet', label: 'AI Prophet', level: 10 },
    ],
    skills: [
      { id: 'statistics', label: 'Statistics', xp: 150, icon: BarChart, description: 'Reading the signs.' },
      { id: 'python_ml', label: 'Machine Learning', xp: 400, icon: Cpu, description: 'Teaching the golems.' },
      { id: 'big_data', label: 'Big Data Processing', xp: 600, icon: Server, description: 'Handling the infinite stream.' },
    ]
  }
};
