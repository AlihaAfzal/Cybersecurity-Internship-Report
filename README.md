# Cybersecurity-Internship-Report

### **Aliha Afzal**
### **DHC-601**
### **Cybersecurity**

---

## **Introduction**

This repository contains all the work completed during my cybersecurity internship, focused on assessing and implementing security measures for a web application. The project was divided into three main weeks: Vulnerability Assessment, Implementing Security Measures, and Final Reporting.

The project was carried out on a local machine using the **OWASP Juice Shop** web application for testing and demonstration.

---

## **Week 1: Vulnerability Assessment**

During this phase, the application was tested using a combination of manual and automated methods to find vulnerabilities.

### **1. Manual Testing**

* **Cross-Site Scripting (XSS):**
    * **Vulnerability:** Found a Cross-Site Scripting (XSS) vulnerability in the search bar. The application failed to properly sanitize user input, allowing malicious code to be executed.
    * **Proof:** A JavaScript payload (`<iframe src="javascript:alert('XSS')">`) was successfully executed, causing a pop-up alert to appear.

* **SQL Injection:**
    * **Vulnerability:** Found a SQL Injection vulnerability in the login form. The application's input validation was flawed.
    * **Proof:** The payload `' OR 1=1 --` was used to bypass the login process and gain unauthorized access to an administrator account.

### **2. Automated Scan (OWASP ZAP)**

* **Vulnerability:** An automated scan with **OWASP ZAP** identified numerous vulnerabilities, including `Content Security Policy (CSP) Header Not Set`, `Cross-Domain Misconfiguration`, and other information disclosure issues.

---

## **Week 2: Implementing Security Measures**

In this phase, I implemented several security measures in a separate project to demonstrate my ability to fix vulnerabilities.

* **Input Validation:** Used the **`validator`** library to ensure user input, such as email addresses, is in the correct format. This is a key defense against injection attacks.
* **Password Hashing:** Used the **`bcrypt`** library to securely hash passwords before storing them in the database. This protects user data from being exposed in the event of a breach.
* **Secure Authentication:** Used the **`jsonwebtoken`** library to create and verify secure tokens for user authentication, which is more secure than sending a password with every request.
* **Secure HTTP Headers:** Used the **`Helmet.js`** middleware to set a variety of security headers, protecting the application from attacks like clickjacking.

---

## **Week 3: Advanced Security & Final Report**

This phase involved more advanced testing and the final submission preparation.

* **Penetration Testing (Nmap):** Performed a port scan using **Nmap** to identify open ports on the local machine. This showed that the Juice Shop application was correctly running on port `3000`, a key finding for the security assessment.
* **Logging:** Used the **`winston`** library to set up basic logging, demonstrating how to record security events to a file.


