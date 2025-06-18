1. **Clone Repository:**

```bash
git clone https://github.com/Tusharpatil0912/EventBookingApi.git
cd event-booking
Install Dependencies:

bash
Copy
Edit
npm install
Create .env File:

env
Copy
Edit
JWT_SECRET=your_jwt_secret
Start the Server:

bash
Copy
Edit
node app.js
🔐 Authentication & Authorization
POST /api/auth/login

json
Copy
Edit
{
  "username": "admin",
  "password": "admin123"
}
Response:

json
Copy
Edit
{
  "status": true,
  "token": "Bearer <jwt-token>"
}
Roles (Hardcoded Users):
json
Copy
Edit
[
  { "id": 1, "username": "admin", "role": "admin", "password": "admin123" },
  { "id": 2, "username": "user", "role": "user", "password": "user123" }
]
📅 Events API
➕ Create Event (Admin Only)
POST /api/events

Headers: Authorization: Bearer <admin-token>

Body:

json
Copy
Edit
{
  "name": "Music Fest",
  "category": "Concert",
  "location": "Mumbai",
  "date": "2025-07-01",
  "maxSeats": 100
}
📋 Get All Events
GET /api/events

Query Params:

page (default: 1)

limit (default: 10)

category, startDate, endDate

Example:

bash
Copy
Edit
GET /api/events?page=1&limit=5&category=Concert&startDate=2025-07-01&endDate=2025-08-01
🔍 Get Single Event
GET /api/events/:id

✏️ Update Event (Admin Only)
PUT /api/events/:id

Headers: Authorization: Bearer <admin-token>

Body (any fields optional):

json
Copy
Edit
{
  "name": "Updated Event",
  "maxSeats": 200
}
❌ Delete Event (Admin Only)
DELETE /api/events/:id

Headers: Authorization: Bearer <admin-token>

🎟️ Bookings API
🧾 Book Event
POST /api/bookings

Headers: Authorization: Bearer <user-token>

Body:

json
Copy
Edit
{
  "eventId": 1,
  "numberOfSeats": 2
}
📦 Get User Bookings
GET /api/bookings

Headers: Authorization: Bearer <user-token>

📊 Admin Dashboard
📈 Dashboard Data
GET /api/admin/dashboard

Headers: Authorization: Bearer <admin-token>

Response:

json
Copy
Edit
{
  "status": true,
  "message": "Dashboard data",
  "data": {
    "totalEvents": 3,
    "totalBookings": 8,
    "topEvents": [
      { "id": 1, "name": "Music Fest", "bookedSeats": 50 }
    ]
  }
}
🔁 Event Loop Demo
File: utils/eventLoopExample.js

js
Copy
Edit
console.log('Start');

setTimeout(() => console.log('setTimeout'), 0);
Promise.resolve().then(() => console.log('Promise.resolve'));
console.log('End');

Expected Output:

javascript
Copy
Edit
Start
End
Promise.resolve
setTimeout
Explanation:

console.log() is synchronous

Promise.then() is a microtask

setTimeout() is a macrotask

📬 Email Confirmation (Simulated)
Triggered on successful booking

Implemented using Promise.all()

Function: sendConfirmationEmail(userId) inside utils/emailUtil.js

🧪 Postman Collection


Tokens to Use:
Admin Login: admin / admin123

User Login: user / user123

Use Authorization: Bearer <token> header to access protected routes.

📌 Notes
In-memory storage (no database).

Data resets on server restart.

Use .env to configure JWT secret.

Recommended: Import Postman collection and test all APIs.



