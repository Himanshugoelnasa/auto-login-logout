# HRMS Auto Punch

Automated Punch In / Punch Out for a PHP-based HRMS portal using Node.js and Playwright.

This project uses real browser automation to safely handle CSRF-protected login, session expiry, and toggle-based punch buttons.

---

## ⚠️ Disclaimer

This project is for **educational and personal automation purposes only**.

Most HRMS systems restrict or prohibit automated usage.  
Use this at your own risk and ensure compliance with your organization’s policies.

---

## Features

- Auto Punch In / Punch Out
- Works with PHP + CSRF protected login
- Handles session expiration automatically
- Uses real Chromium browser (not API hacking)
- Detects punch state via DOM attributes
- Can be scheduled to run multiple times a day
- Logging for debugging and tracking

---

## Tech Stack

- Node.js (v18+)
- Playwright (Chromium)
- node-cron (optional)

---

## Project Structure

