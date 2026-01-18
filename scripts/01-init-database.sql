-- Comprehensive Tech Learning Platform Database Schema
-- This script sets up all tables for the learning platform

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  profile_image_url VARCHAR(500),
  bio TEXT,
  learning_goal VARCHAR(100),
  skill_level VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Learning domains (DSA, OOP, OS, System Design, Web Dev, etc)
CREATE TABLE domains (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon_url VARCHAR(500),
  order_index INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Topics within domains (Arrays, Linked Lists, Trees, etc)
CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  domain_id INT NOT NULL REFERENCES domains(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  prerequisites TEXT, -- JSON array of prerequisite topic IDs
  estimated_hours INT,
  difficulty VARCHAR(50), -- beginner, intermediate, advanced
  order_index INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subtopics (Two-pointer technique, Sliding window, etc)
CREATE TABLE subtopics (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL REFERENCES topics(id),
  name VARCHAR(100) NOT NULL,
  content TEXT,
  code_examples TEXT, -- JSON
  visualizations TEXT, -- JSON with links to visualizations
  order_index INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Resources (tutorials, videos, articles, problems)
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL REFERENCES topics(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  resource_type VARCHAR(50), -- tutorial, video, article, practice, project
  resource_url VARCHAR(500),
  embed_content TEXT, -- For embedded videos/content
  source_platform VARCHAR(100), -- geeksforgeeks, youtube, leetcode, w3schools, etc
  difficulty VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Practice problems
CREATE TABLE problems (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL REFERENCES topics(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty VARCHAR(50),
  test_cases TEXT, -- JSON array of test cases
  solution_code TEXT, -- JSON with solutions in multiple languages
  explanation TEXT,
  likes INT DEFAULT 0,
  attempts INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Quiz questions
CREATE TABLE quiz_questions (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL REFERENCES topics(id),
  question TEXT NOT NULL,
  question_type VARCHAR(50), -- multiple_choice, short_answer, coding
  options TEXT, -- JSON array for MCQ
  correct_answer TEXT,
  explanation TEXT,
  order_index INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User progress tracking
CREATE TABLE user_progress (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  topic_id INT NOT NULL REFERENCES topics(id),
  status VARCHAR(50), -- not_started, in_progress, completed
  progress_percentage INT DEFAULT 0,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  time_spent_minutes INT DEFAULT 0,
  last_accessed TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, topic_id)
);

-- User problem attempts
CREATE TABLE problem_attempts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  problem_id INT NOT NULL REFERENCES problems(id),
  code_submitted TEXT,
  language VARCHAR(50),
  status VARCHAR(50), -- attempted, passed, failed
  test_results TEXT, -- JSON
  execution_time_ms INT,
  memory_used_mb INT,
  attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Quiz attempts
CREATE TABLE quiz_attempts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  topic_id INT NOT NULL REFERENCES topics(id),
  score INT,
  total_questions INT,
  time_taken_seconds INT,
  answers TEXT, -- JSON
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Learning roadmaps
CREATE TABLE roadmaps (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  estimated_duration_months INT,
  difficulty_level VARCHAR(50),
  target_role VARCHAR(100),
  topics TEXT, -- JSON array of topic IDs in order
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User roadmap enrollment
CREATE TABLE user_roadmaps (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  roadmap_id INT NOT NULL REFERENCES roadmaps(id),
  progress_percentage INT DEFAULT 0,
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  UNIQUE(user_id, roadmap_id)
);

-- User achievements/badges
CREATE TABLE achievements (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon_url VARCHAR(500),
  criteria VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User earned badges
CREATE TABLE user_achievements (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  achievement_id INT NOT NULL REFERENCES achievements(id),
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, achievement_id)
);

-- Saved resources (bookmarks)
CREATE TABLE saved_resources (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  resource_id INT REFERENCES resources(id),
  problem_id INT REFERENCES problems(id),
  saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, resource_id, problem_id)
);

-- Study groups
CREATE TABLE study_groups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  creator_id INT NOT NULL REFERENCES users(id),
  max_members INT DEFAULT 50,
  topic_focus INT REFERENCES topics(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Study group members
CREATE TABLE study_group_members (
  id SERIAL PRIMARY KEY,
  group_id INT NOT NULL REFERENCES study_groups(id),
  user_id INT NOT NULL REFERENCES users(id),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(group_id, user_id)
);

-- Discussion posts
CREATE TABLE discussion_posts (
  id SERIAL PRIMARY KEY,
  topic_id INT REFERENCES topics(id),
  problem_id INT REFERENCES problems(id),
  author_id INT NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Discussion replies
CREATE TABLE discussion_replies (
  id SERIAL PRIMARY KEY,
  post_id INT NOT NULL REFERENCES discussion_posts(id),
  author_id INT NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for frequently queried columns
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_topic_id ON user_progress(topic_id);
CREATE INDEX idx_problem_attempts_user_id ON problem_attempts(user_id);
CREATE INDEX idx_topics_domain_id ON topics(domain_id);
CREATE INDEX idx_resources_topic_id ON resources(topic_id);
CREATE INDEX idx_problems_topic_id ON problems(topic_id);
CREATE INDEX idx_quiz_questions_topic_id ON quiz_questions(topic_id);
CREATE INDEX idx_saved_resources_user_id ON saved_resources(user_id);
CREATE INDEX idx_study_group_members_group_id ON study_group_members(group_id);
CREATE INDEX idx_study_group_members_user_id ON study_group_members(user_id);
CREATE INDEX idx_discussion_posts_topic_id ON discussion_posts(topic_id);
CREATE INDEX idx_user_achievements_user_id ON user_achievements(user_id);
