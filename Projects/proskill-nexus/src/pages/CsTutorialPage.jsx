import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

// ============================================
// OS, DBMS, CN TUTORIALS - CLEAN LAYOUT
// ============================================

const tutorials = {
    os: {
        title: 'Operating Systems',
        chapters: [
            {
                id: 'process',
                title: 'Process Management',
                content: `A process is a program in execution. When you run a program, the OS creates a process to manage it.

Process States: New → Ready → Running → Waiting → Terminated

Process Control Block (PCB) contains: Process ID, State, Program Counter, CPU Registers, Memory Info, I/O Status.

Context Switching: When CPU switches between processes, it saves the current state and loads the next process's state.`,
                code: `// Process creation in C (Unix)
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();  // Create child process
    
    if (pid == 0) {
        // Child process
        printf("Child PID: %d\\n", getpid());
    } else {
        // Parent process
        wait(NULL);  // Wait for child
        printf("Parent PID: %d\\n", getpid());
    }
    return 0;
}`,
                problems: ['Explain process states', 'What is context switching?']
            },
            {
                id: 'scheduling',
                title: 'CPU Scheduling',
                content: `CPU Scheduling decides which process runs when multiple are ready.

FCFS (First Come First Serve): Simple, non-preemptive. Problem: Convoy effect.

SJF (Shortest Job First): Optimal average waiting time. Problem: Starvation.

Round Robin: Each process gets a time quantum. Fair, good for time-sharing.

Priority Scheduling: Higher priority runs first. Solution to starvation: Aging.`,
                code: `// Round Robin Simulation
void roundRobin(int processes[], int n, int quantum) {
    int remaining[n];
    for (int i = 0; i < n; i++) 
        remaining[i] = processes[i];
    
    int time = 0;
    while (true) {
        bool done = true;
        for (int i = 0; i < n; i++) {
            if (remaining[i] > 0) {
                done = false;
                if (remaining[i] > quantum) {
                    time += quantum;
                    remaining[i] -= quantum;
                } else {
                    time += remaining[i];
                    remaining[i] = 0;
                }
            }
        }
        if (done) break;
    }
}`,
                problems: ['Calculate average waiting time for FCFS', 'Implement Round Robin']
            },
            {
                id: 'deadlock',
                title: 'Deadlocks',
                content: `Deadlock occurs when processes are waiting for resources held by each other.

Four Necessary Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.

Prevention: Break one of the four conditions.

Avoidance: Banker's Algorithm - ensure system stays in safe state.

Detection & Recovery: Allow deadlocks, then detect and recover.`,
                code: `// Banker's Algorithm - Safety Check
bool isSafe(int available[], int max[][], int alloc[][]) {
    int work[m], finish[n] = {false};
    for (int i = 0; i < m; i++) work[i] = available[i];
    
    while (true) {
        bool found = false;
        for (int i = 0; i < n; i++) {
            if (!finish[i] && need[i] <= work) {
                // Process can complete
                work += alloc[i];
                finish[i] = true;
                found = true;
            }
        }
        if (!found) break;
    }
    
    // Check if all finished
    for (int i = 0; i < n; i++)
        if (!finish[i]) return false;
    return true;
}`,
                problems: ['Identify deadlock conditions', 'Apply Banker\'s Algorithm']
            },
            {
                id: 'memory',
                title: 'Memory Management',
                content: `Paging: Physical memory in fixed-size frames, logical memory in pages. Page table maps pages to frames.

Segmentation: Memory divided by logical segments (code, data, stack).

Virtual Memory: Programs use more memory than available. Demand paging loads pages on demand.

Page Replacement: FIFO (oldest), LRU (least recently used), Optimal (theoretical).

Thrashing: Too much time spent paging, not enough executing.`,
                code: `// LRU Page Replacement
int lruPageFaults(int pages[], int n, int frames) {
    set<int> s;
    map<int, int> indexes;
    int pageFaults = 0;
    
    for (int i = 0; i < n; i++) {
        if (s.size() < frames) {
            if (s.find(pages[i]) == s.end()) {
                s.insert(pages[i]);
                pageFaults++;
            }
        } else {
            if (s.find(pages[i]) == s.end()) {
                // Find LRU page
                int lru = INT_MAX, val;
                for (auto it = s.begin(); it != s.end(); it++) {
                    if (indexes[*it] < lru) {
                        lru = indexes[*it];
                        val = *it;
                    }
                }
                s.erase(val);
                s.insert(pages[i]);
                pageFaults++;
            }
        }
        indexes[pages[i]] = i;
    }
    return pageFaults;
}`,
                problems: ['Calculate page faults using FIFO', 'Implement LRU algorithm']
            }
        ]
    },

    dbms: {
        title: 'Database Management',
        chapters: [
            {
                id: 'sql-basics',
                title: 'SQL Fundamentals',
                content: `SQL (Structured Query Language) manages relational databases.

DDL (Data Definition): CREATE, ALTER, DROP, TRUNCATE
DML (Data Manipulation): SELECT, INSERT, UPDATE, DELETE
DCL (Data Control): GRANT, REVOKE
TCL (Transaction Control): COMMIT, ROLLBACK`,
                code: `-- Create table
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    dept_id INT
);

-- Insert data
INSERT INTO employees VALUES (1, 'Alice', 75000, 1);

-- Select with conditions
SELECT name, salary 
FROM employees 
WHERE salary > 50000 
ORDER BY salary DESC;

-- Update
UPDATE employees SET salary = salary * 1.1 WHERE dept_id = 1;

-- Aggregate functions
SELECT dept_id, AVG(salary), COUNT(*) 
FROM employees 
GROUP BY dept_id 
HAVING COUNT(*) > 5;`,
                problems: ['Write SELECT with JOIN', 'Create table with constraints']
            },
            {
                id: 'joins',
                title: 'SQL Joins',
                content: `INNER JOIN: Returns matching rows from both tables.

LEFT JOIN: All rows from left + matching from right. NULL for non-matches.

RIGHT JOIN: All rows from right + matching from left.

FULL OUTER JOIN: All rows from both tables.

SELF JOIN: Table joined with itself.`,
                code: `-- INNER JOIN
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (all employees, even without dept)
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;

-- Self Join (employees and their managers)
SELECT e.name AS Employee, m.name AS Manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Multiple Joins
SELECT e.name, d.dept_name, p.project_name
FROM employees e
JOIN departments d ON e.dept_id = d.id
JOIN projects p ON e.id = p.lead_id;`,
                problems: ['Write a LEFT JOIN query', 'Implement self join for hierarchy']
            },
            {
                id: 'normalization',
                title: 'Normalization',
                content: `Normalization reduces redundancy and improves data integrity.

1NF: Atomic values, no repeating groups.

2NF: 1NF + No partial dependencies (on part of composite key).

3NF: 2NF + No transitive dependencies (non-key depends on non-key).

BCNF: Every determinant is a candidate key.

Denormalization: Sometimes add redundancy for read performance.`,
                code: `-- Example: Unnormalized
-- Orders(OrderId, Customer, Items, Prices)

-- 1NF: Atomic values
-- Orders(OrderId, Customer, Item, Price)

-- 2NF: Remove partial dependencies
-- Orders(OrderId, Customer)
-- OrderItems(OrderId, Item, Price)

-- 3NF: Remove transitive dependencies
-- Orders(OrderId, CustomerId)
-- Customers(CustomerId, CustomerName)
-- OrderItems(OrderId, ItemId, Quantity)
-- Items(ItemId, ItemName, Price)`,
                problems: ['Normalize a table to 3NF', 'Identify functional dependencies']
            },
            {
                id: 'acid',
                title: 'ACID Properties',
                content: `ACID ensures reliable database transactions.

Atomicity: All or nothing. Transaction completes fully or rolls back.

Consistency: Database remains in valid state before and after transaction.

Isolation: Concurrent transactions don't interfere. Levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.

Durability: Committed changes persist even after system failure.`,
                code: `-- Transaction example
START TRANSACTION;

-- Transfer money
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Check constraint
IF (SELECT balance FROM accounts WHERE id = 1) < 0 THEN
    ROLLBACK;
ELSE
    COMMIT;
END IF;

-- Savepoint
START TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE id = 1;
SAVEPOINT sp1;
UPDATE accounts SET balance = balance - 50 WHERE id = 1;
ROLLBACK TO sp1;  -- Undo second update
COMMIT;`,
                problems: ['Write a transaction with rollback', 'Explain isolation levels']
            }
        ]
    },

    cn: {
        title: 'Computer Networks',
        chapters: [
            {
                id: 'osi',
                title: 'OSI Model',
                content: `7 Layers (top to bottom):

Application (L7): HTTP, FTP, SMTP, DNS - User interface
Presentation (L6): Encryption, compression, formatting
Session (L5): Session management, authentication
Transport (L4): TCP/UDP, ports, segmentation
Network (L3): IP addressing, routing - Routers
Data Link (L2): MAC addresses, framing - Switches
Physical (L1): Bits, cables, signals - Hubs

Mnemonic: All People Seem To Need Data Processing`,
                code: `// Data encapsulation example
// Application: Data
// Transport: [TCP Header | Data] = Segment
// Network: [IP Header | Segment] = Packet  
// Data Link: [Frame Header | Packet | FCS] = Frame
// Physical: 101010... (bits)

// TCP Header (20 bytes minimum)
struct TCPHeader {
    uint16_t srcPort;
    uint16_t destPort;
    uint32_t seqNum;
    uint32_t ackNum;
    uint16_t flags;  // SYN, ACK, FIN, etc.
    uint16_t window;
    uint16_t checksum;
};`,
                problems: ['Name protocols at each layer', 'Explain encapsulation process']
            },
            {
                id: 'tcp-udp',
                title: 'TCP vs UDP',
                content: `TCP (Transmission Control Protocol):
- Connection-oriented (3-way handshake)
- Reliable delivery (ACK, retransmission)
- Ordered packets (sequence numbers)
- Flow control, congestion control
- Use: HTTP, email, file transfer

UDP (User Datagram Protocol):
- Connectionless
- Best-effort delivery (no guarantees)
- No ordering
- Faster, less overhead
- Use: Streaming, gaming, DNS`,
                code: `// TCP 3-Way Handshake
// Client -> Server: SYN (seq=x)
// Server -> Client: SYN-ACK (seq=y, ack=x+1)
// Client -> Server: ACK (seq=x+1, ack=y+1)

// Connection established!

// TCP 4-Way Termination
// Client -> Server: FIN
// Server -> Client: ACK
// Server -> Client: FIN
// Client -> Server: ACK

// Python UDP Socket
import socket

udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp_socket.sendto(b"Hello", ("127.0.0.1", 5000))

// Python TCP Socket
tcp_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp_socket.connect(("127.0.0.1", 5000))
tcp_socket.send(b"Hello")`,
                problems: ['Explain TCP handshake', 'When to use UDP over TCP?']
            },
            {
                id: 'http',
                title: 'HTTP & HTTPS',
                content: `HTTP Methods: GET (read), POST (create), PUT (update), DELETE (remove), PATCH (partial update)

Status Codes:
2xx Success: 200 OK, 201 Created
3xx Redirect: 301 Moved, 304 Not Modified
4xx Client Error: 400 Bad Request, 401 Unauthorized, 404 Not Found
5xx Server Error: 500 Internal Error, 503 Service Unavailable

HTTPS: HTTP + TLS encryption for security.`,
                code: `// HTTP Request
GET /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer token123

// HTTP Response
HTTP/1.1 200 OK
Content-Type: application/json

{"users": [...]}

// REST API Example (Node.js)
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});`,
                problems: ['Design a REST API', 'Explain HTTPS handshake']
            },
            {
                id: 'dns',
                title: 'DNS System',
                content: `DNS translates domain names to IP addresses.

Resolution Process:
1. Browser cache
2. OS cache
3. Recursive resolver (ISP)
4. Root server (.)
5. TLD server (.com)
6. Authoritative server (example.com)

Record Types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (nameserver), TXT (text)`,
                code: `// DNS Query flow
// User types: www.example.com

// 1. Check browser/OS cache
// 2. Query ISP DNS (recursive resolver)
// 3. Resolver queries root server
//    Root: "I don't know, ask .com TLD"
// 4. Resolver queries .com TLD
//    TLD: "Ask ns1.example.com"
// 5. Resolver queries authoritative
//    Auth: "example.com = 93.184.216.34"
// 6. Response cached at each level

// nslookup command
$ nslookup example.com
Server:  8.8.8.8
Address: 93.184.216.34

// dig command
$ dig example.com A +short
93.184.216.34`,
                problems: ['Trace DNS resolution', 'Explain DNS record types']
            }
        ]
    }
};

// Generic Tutorial Component
const CsTutorialPage = ({ subject }) => {
    const [active, setActive] = useState(0);
    const tutorial = tutorials[subject];
    const ch = tutorial.chapters[active];

    return (
        <div className="tutorial-page">
            <nav className="tutorial-nav">
                <h2>{tutorial.title}</h2>
                {tutorial.chapters.map((c, i) => (
                    <button
                        key={c.id}
                        onClick={() => setActive(i)}
                        className={active === i ? 'active' : ''}
                    >
                        {c.title}
                    </button>
                ))}
            </nav>

            <div className="tutorial-content">
                <article className="article">
                    <h1>{ch.title}</h1>
                    <div className="article-meta">
                        <span>📚 {tutorial.title}</span>
                        <span>⏱️ 5 min read</span>
                    </div>

                    {ch.content.split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <h2>Example</h2>
                    <div className="code-block">
                        <div className="code-header">
                            <span>{subject === 'dbms' ? 'SQL' : 'Code'}</span>
                            <div></div>
                        </div>
                        <Editor
                            height="300px"
                            language={subject === 'dbms' ? 'sql' : 'cpp'}
                            value={ch.code}
                            theme="vs-dark"
                            options={{
                                fontSize: 14,
                                minimap: { enabled: false },
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                            }}
                        />
                    </div>

                    <div className="problems-list">
                        <h3>Practice Questions</h3>
                        {ch.problems.map((p, i) => (
                            <div key={i} className="problem-item">
                                <span>{p}</span>
                                <span className="badge badge-medium">Interview</span>
                            </div>
                        ))}
                    </div>

                    <div className="article-nav">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setActive(Math.max(0, active - 1))}
                            disabled={active === 0}
                        >← Previous</button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setActive(Math.min(tutorial.chapters.length - 1, active + 1))}
                            disabled={active === tutorial.chapters.length - 1}
                        >Next →</button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export const OsTutorialPage = () => <CsTutorialPage subject="os" />;
export const DbmsTutorialPage = () => <CsTutorialPage subject="dbms" />;
export const CnTutorialPage = () => <CsTutorialPage subject="cn" />;

export default CsTutorialPage;
