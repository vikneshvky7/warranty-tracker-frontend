# 🛍️ Warranty & Purchase Tracker

📌 A smart web app to store and track the warranty status of your purchased items — never forget an expiry date again!

---

## 🔗 Live Demo (Frontend)

🌐 Vercel URL → *(Add after deployment)*

Backend URL → *(Add after backend deployment)*

---

## 📘 Project Overview

Managing product invoices and warranty expiry dates manually is frustrating — papers get lost, dates are forgotten.
This app lets users save and view:

✔ Product Name
✔ Purchase Date
✔ Warranty Duration
✔ Store and Invoice Information
✔ Notes & Additional Details

Along with **automatic expiry alerts** using color indicators:

| Status    | Meaning                   |
| --------- | ------------------------- |
| 🟥 Red    | Warranty Expired          |
| 🟧 Orange | Expiring Soon (≤ 60 days) |
| 🟩 Green  | Warranty Active           |

---

## ✨ Features

* 🆕 Add new purchased items
* ✏️ Edit existing entries
* 🗑️ Delete items anytime
* 🎯 Auto-calculated warranty expiry
* 🔔 Visual expiry alerts
* 🎨 Clean & responsive UI
* ⚡ Fast REST API Integration

---

## 🧩 Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Frontend   | React JS, Axios, HTML, CSS                   |
| Backend    | Spring Boot REST API                         |
| Database   | H2 (Dev Mode) / MySQL (Future upgrade)       |
| Deployment | Vercel (Frontend) & Render/Railway (Backend) |

---

## 📂 Project Structure

```
warranty-tracker/
 │
 ├── backend/         # Spring Boot API
 └── frontend/        # React Application (client UI)
```

---

## 📡 API Endpoints

| Method | Endpoint          | Action                   |
| ------ | ----------------- | ------------------------ |
| GET    | `/api/items`      | Fetch all warranty items |
| POST   | `/api/items`      | Create a new item        |
| PUT    | `/api/items/{id}` | Update item details      |
| DELETE | `/api/items/{id}` | Remove an item           |

---

## 🖥️ Setup Instructions

### 1️⃣ Start Backend Server

```sh
cd backend
./mvnw spring-boot:run
```

➡ Backend will run at:
`http://localhost:8080/api/items`

---

### 2️⃣ Start Frontend UI

```sh
cd frontend
npm install
npm start
```

➡ Frontend runs at:
`http://localhost:3000`

---

## 🚀 Deployment Information

| Component        | Service              |
| ---------------- | -------------------- |
| Frontend Hosting | Vercel ✔             |
| Backend Hosting  | Render (Recommended) |

We will set **environment-based API URL**:

```js
const API_URL = "https://your-backend-url/api/items";
```

---

## 🧭 Future Enhancements

* 📁 Attach digital invoice files (PDF/Images)
* 🔑 Login & Authentication
* 📧 Email reminders before expiration
* 📊 Dashboard analytics
* 📱 Mobile app version

---

## 👨‍💻 Author

**Viknesh Vky**
📧 [vikneshvky@gmail.com](mailto:vikneshvky@gmail.com)
🔗 GitHub: [https://github.com/vikneshvky7](https://github.com/vikneshvky7)

---

## 📜 License

This project is open-source under the **MIT License**.

---

### 🏁 Final Notes

Once backend is deployed, **you will have a complete hosted full-stack product** that looks excellent on resumes, LinkedIn, and job portfolios. 🚀

---

When you’re ready, send me:

✔ Your **frontend Vercel URL**
✔ Confirm if I should deploy backend on **Render**

I’ll finish the deployment & update README with final URLs.
