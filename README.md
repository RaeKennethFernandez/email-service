# Email Service Microservice

## Overview
This microservice provides a reusable email sending system using multiple Gmail accounts with automatic account switching when daily sending limits are reached.  
It is built with **Node.js**, **Express**, and **Nodemailer**.

The service exposes a REST API endpoint that any project can call to send emails without worrying about SMTP account management or daily limits.

---

## Features
- **Multiple Account Rotation** – Automatically switches between configured Gmail accounts.
- **Daily Sending Limits** – Prevents exceeding provider quotas.
- **REST API** – Simple JSON-based interface.
- **Configurable** – Environment-based configuration for portability.
- **Reusable** – Can be plugged into any project as a microservice.

---

## Project Structure
```
email-service/
├── src/
│   ├── config.js      # Loads env vars / accounts
│   ├── accounts.js    # Account pool & usage tracking
│   ├── mailer.js      # Core email sending logic
│   ├── routes.js      # API routes
│   └── server.js      # Express server
├── .env               # Configuration file
├── package.json
└── README.md
```

---

## Configuration

Create a `.env` file in the project root:

```env
# List of Gmail accounts with credentials (JSON format)
EMAIL_ACCOUNTS=[{"email":"account1@gmail.com","pass":"app_password_1"},{"email":"account2@gmail.com","pass":"app_password_2"}]

# Sending limit per account
EMAIL_LIMIT=150

# Service port
PORT=4000
```

---

## Installation

```bash
npm install
```

---

## Run the Service

```bash
npm start
```

The service will be available at:

```
http://localhost:4000/api/email/send
```

---

## Example Request

```bash
curl -X POST http://localhost:4000/api/email/send   -H "Content-Type: application/json"   -d '{
    "to": "recipient@example.com",
    "subject": "Hello",
    "text": "Hello World!"
  }'
```

### Example Response
```json
{
  "success": true,
  "messageId": "<abcd1234@example.com>",
  "account": "account1@gmail.com",
  "sentCount": 1
}
```

---

## Future Improvements
- Add support for other providers (SES, SendGrid, SMTP).
- Rate limiting and queue system.
- Dockerfile for containerization.
- Monitoring and logging dashboard.

---

## License
[MIT License](LICENSE)
