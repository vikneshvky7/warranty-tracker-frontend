# Warranty & Purchase Tracker – Frontend

A simple React-based dashboard to track product purchases and warranty expiry in one place.  
You can add products, see how many days are left before warranty ends, and quickly edit or delete old entries.

## ✨ Features

- Add new products with:
  - Product name  
  - Category  
  - Purchase date  
  - Warranty in months  
  - Store name  
  - Invoice number  
  - Optional notes
- Shows **warranty status**:
  - ✅ Green: more than 60 days left  
  - 🟧 Orange: less than or equal to 60 days left  
  - 🔴 Red: already expired
- Edit and delete items inline
- Responsive, card-based UI

---

## 🧱 Tech Stack

- **React** (Create React App)
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Axios** – for HTTP calls
- **Deployed on:** Vercel / Render (depending on your setup)

---

## 🏗 Project Structure

```text
warranty-tracker-frontend/
├─ public/
│  ├─ index.html
├─ src/
│  ├─ App.js           # Main UI and logic
│  ├─ App.css          # Styling for the app
│  ├─ index.js         # React entry point
│  ├─ services/
│  │  └─ api.js        # API client and base URL
├─ package.json
└─ README.md
