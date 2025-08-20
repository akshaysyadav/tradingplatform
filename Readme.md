# 📈 Trading Platform

A full-stack trading platform that allows users to **sign up, log in, view their personalized dashboard with portfolio, holdings, and positions, and simulate trades in real-time**.  
Built using the **MERN stack**, structured into **3 modules**: `backend`, `frontend`, and `dashboard`.

🔗 **Live Links**

- 🎨 **Frontend (Signup/Login):** [https://tradingplatform-tau.vercel.app/](https://tradingplatform-tau.vercel.app/)
- ⚙️ **Backend API:** [https://tradingplatform-lv6u.onrender.com](https://tradingplatform-lv6u.onrender.com)
- 🖥️ **Dashboard:** [https://tradingplatform-1.onrender.com](https://tradingplatform-1.onrender.com)

---

## 🚀 Features

-  **Frontend as Full Trading Website**
-  **User Authentication** (Signup & Login with JWT)
-  **Personalized Dashboard** (User-specific positions & holdings)
-  **Portfolio Summary** (Avg Price, Market Price, etc.)
-  **Chart.js Integration** → Interactive graphs for holdings & performance
-  **REST API** (Express.js + MongoDB backend)
-  **Modern UI** with React, Bootstrap, and CSS
-  **Secure Passwords** with bcrypt
-  **Deployed on Render & Vercel**

---

## 📂 Project Structure

trading-platform/
│
-  ├── backend/ # Node.js + Express + MongoDB
-    
-│ ├── models/ # Mongoose schemas

-│ ├── routes/ # API routes (auth, holdings, positions, trades)

-│ ├── server.js # Main backend entry point

-│ └── .env # Environment variables
│

## ├── frontend/ # React app (Signup/Login)

-│ ├── src/

-│ │ ├── components/ # Signup/Login components

-│ │ ├── pages/ # Landing page, forms

-│ │ └── App.js # Routes setup

-│ └── package.json
│

## ├── dashboard/ # React app (User dashboard after login)

-│ ├── src/

-│ │ ├── components/ # Summary, Holdings, Positions, Buy/Sell, Charts

-│ │ ├── pages/ # Dashboard UI

-│ │ └── App.js # Dashboard routes

-│ └── package.json
-│
-└── README.md # Project documentation

---

## ⚙️ Tech Stack

**Frontend & Dashboard:**

- React.js
- React Router
- Axios
- Bootstrap / CSS
- **Chart.js** (via `react-chartjs-2`) for visualizing portfolio/holdings

**Backend:**

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt

**Deployment:**

- Backend → Render
- Frontend/Dashboard → Vercel

---

## 🔑 Environment Variables

Create a `.env` file in the **backend** folder with:

MONGO_URL=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=3001

---

## 🖥️ Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/trading-platform.git
cd trading-platform
cd backend
npm install
npm start

Frontend Setup (Signup/Login)

cd frontend
npm install
npm start

Dashboard Setup (User Portfolio)
cd dashboard
npm install
npm start
```

## 📊 API Endpoints  

| Method | Endpoint      | Description                  |
|--------|--------------|------------------------------|
| POST   | `/signup`    | Register new user            |
| POST   | `/login`     | Login user, return JWT token |
| GET    | `/allholdings` | Fetch all holdings          |
| GET    | `/allposition` | Fetch all positions         |



##📈 Charts with Chart.js

The dashboard includes interactive charts using Chart.js (through react-chartjs-2):

📊 Bar Chart: Shows stock holdings by quantity & average price.

🍩 Doughnut Chart: Visualizes asset distribution in the portfolio.


##👤 Personalization
User signs up with username, email, password.
After login, the username is fetched from backend and displayed on the dashboard header.
Portfolio, holdings, and positions are fetched using JWT-authenticated API calls.


##🚀 Future Enhancements

Live stock price integration

Advanced charting (Candlestick charts, real-time updates)

Trade history & performance tracking

Notifications & Alerts

Dark mode UI


##👨‍💻 Author

Akshay Yadav
-
💼 LinkedIn: https://www.linkedin.com/in/akshayyadav2005/

🐙 GitHub: https://github.com/akshaysyadav

