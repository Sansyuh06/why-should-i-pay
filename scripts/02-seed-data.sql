-- Seed data for the comprehensive tech learning platform

-- Insert domains
INSERT INTO domains (name, description, icon_url, order_index) VALUES
  ('Data Structures & Algorithms', 'Master fundamental DSA concepts', '/domains/dsa.png', 1),
  ('Object-Oriented Programming', 'Learn OOP principles and design patterns', '/domains/oop.png', 2),
  ('Operating Systems', 'Understand OS fundamentals', '/domains/os.png', 3),
  ('System Design', 'Design large-scale systems', '/domains/system-design.png', 4),
  ('Web Development', 'Build full-stack web applications', '/domains/web-dev.png', 5),
  ('Databases', 'SQL, NoSQL, and database optimization', '/domains/databases.png', 6),
  ('Machine Learning', 'AI/ML fundamentals and applications', '/domains/ml.png', 7);

-- Insert DSA topics
INSERT INTO topics (domain_id, name, description, prerequisites, estimated_hours, difficulty, order_index) VALUES
  (1, 'Arrays and Strings', 'Learn array operations, manipulation, and string problems', '[]', 15, 'beginner', 1),
  (1, 'Linked Lists', 'Master linked list operations and problems', '["1"]', 12, 'beginner', 2),
  (1, 'Stacks and Queues', 'Understand stack and queue data structures', '["1"]', 10, 'beginner', 3),
  (1, 'Trees', 'Binary trees, BST, tree traversals', '["1","2"]', 20, 'intermediate', 4),
  (1, 'Graphs', 'Graph representations, DFS, BFS, shortest paths', '["4"]', 18, 'intermediate', 5),
  (1, 'Dynamic Programming', 'Memoization, tabulation, classic DP problems', '["1","3"]', 25, 'advanced', 6),
  (1, 'Sorting and Searching', 'Bubble, merge, quick sort, binary search', '["1"]', 12, 'beginner', 7),
  (1, 'Heaps and Priority Queues', 'Heap operations and applications', '["3","4"]', 10, 'intermediate', 8);

-- Insert OOP topics
INSERT INTO topics (domain_id, name, description, prerequisites, estimated_hours, difficulty, order_index) VALUES
  (2, 'OOP Fundamentals', 'Classes, objects, inheritance, polymorphism', '[]', 12, 'beginner', 1),
  (2, 'Design Patterns', 'Creational, structural, and behavioral patterns', '["9"]', 20, 'intermediate', 2),
  (2, 'SOLID Principles', 'Write maintainable and scalable code', '["9"]', 10, 'intermediate', 3);

-- Insert OS topics
INSERT INTO topics (domain_id, name, description, prerequisites, estimated_hours, difficulty, order_index) VALUES
  (3, 'Process Management', 'Processes, threads, scheduling', '[]', 14, 'intermediate', 1),
  (3, 'Memory Management', 'Virtual memory, paging, segmentation', '[]', 16, 'intermediate', 2),
  (3, 'File Systems', 'File organization and management', '["14"]', 12, 'intermediate', 3);

-- Insert System Design topics
INSERT INTO topics (domain_id, name, description, prerequisites, estimated_hours, difficulty, order_index) VALUES
  (4, 'Scalability Basics', 'Load balancing, caching, databases', '["1"]', 15, 'advanced', 1),
  (4, 'Distributed Systems', 'Consensus, consistency, availability', '["16"]', 20, 'advanced', 2),
  (4, 'Design Real Systems', 'Design URL shortener, cache, search engine', '["16","17"]', 25, 'advanced', 3);

-- Insert subtopics for Arrays and Strings
INSERT INTO subtopics (topic_id, name, content, order_index) VALUES
  (1, 'Array Basics', 'Arrays are collections of elements stored in contiguous memory locations. They provide O(1) random access but O(n) insertion/deletion.', 1),
  (1, 'Two-Pointer Technique', 'Two pointers moving from opposite ends or same direction to solve problems in O(n) time with O(1) space.', 2),
  (1, 'Sliding Window', 'Maintain a window of elements and slide it to solve substring/subarray problems efficiently.', 3),
  (1, 'String Manipulation', 'String operations including reversal, palindromes, anagrams, and pattern matching.', 4);

-- Insert achievements
INSERT INTO achievements (name, description, icon_url, criteria) VALUES
  ('First Step', 'Complete your first topic', '/achievements/first-step.png', 'complete_topic:1'),
  ('Problem Solver', 'Solve 10 problems', '/achievements/problem-solver.png', 'problems_solved:10'),
  ('Quiz Master', 'Score 100% on 5 quizzes', '/achievements/quiz-master.png', 'perfect_quizzes:5'),
  ('Consistent Learner', 'Maintain 7-day streak', '/achievements/consistent.png', 'days_streak:7'),
  ('DSA Expert', 'Complete all DSA topics', '/achievements/dsa-expert.png', 'complete_domain:1'),
  ('Coding Ninja', 'Solve 100 problems', '/achievements/ninja.png', 'problems_solved:100'),
  ('Interview Ready', 'Complete SDE roadmap', '/achievements/interview-ready.png', 'complete_roadmap:1');

-- Insert roadmaps
INSERT INTO roadmaps (name, description, estimated_duration_months, difficulty_level, target_role, topics) VALUES
  ('3-Month DSA Crash Course', 'Intensive DSA preparation for interviews', 3, 'intermediate', 'Software Engineer', '[1,2,3,4,5,6,7,8]'),
  ('6-Month SDE Preparation', 'Comprehensive preparation for SDE roles', 6, 'advanced', 'Software Engineer', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]'),
  ('10-Month Complete Development', 'From fundamentals to system design', 10, 'advanced', 'Senior Software Engineer', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]'),
  ('Full Stack Developer Path', 'Web development and databases', 6, 'intermediate', 'Full Stack Developer', '[1,2,6,19,20]');
