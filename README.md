#  Apple-Clone

**Apple.com clone** web app built using **React.js** and **Node.js**

---

## 🎯 Motivation

I wanted to recreate the **apple.com** website using **Node.js** for my back end and **React.js** for my front end.

---

## 📝 Description

- **Back end**: I used **Express** for the server and **MySQL** for the database. My **REST API** is serving the iPhone page data directly from the database.
- **Front end**: I tried to integrate a third-party API from **Google Cloud**, specifically **YouTube**, so anyone can have access to Apple's YouTube channel straight from the website.

---

## 📈 Build Status

✅ Live: **[Deployed on ...👉](https://ametiy-apple-react-clone.vercel.app/)**

---

## 🧰 Stack

- 🔧 Node.js
- 🚂 Express
- ⚛️ React
- 🛢️ MySQL
- ☁️ YouTube API from Google Cloud

---

## 📦 Requirements

- Node.js
- YouTube Data API v3 Key from Google Cloud Console
- Apple's YouTube Channel ID

---

# ⚙️ Setup Instructions

## 1. Clone the project

git clone https://github.com/AMETIY/AMETIY-Apple_React_Functional_Comp.git

---

## 2. 📦 Install Dependencies

### 🔙 Backend

- cd backEnd
- npm install

### 🔙 Frontend

- cd ../client
- npm install

## 3. ⚙️ Configure Environment Variables

### ✅ In the client/ directory, create a .env file and add the following:

- REACT_APP_API_KEY=your_youTube_api_key
- REACT_APP_CHANNEL_ID=your_channel_id

### 🚀 Run the Application

- npm run dev

# 🛠 Optional Commands

### 🔹 Run server only:

- npm run server

### 🔹 Run client only:

- npm run client

# 📺 API Integration

- This project uses the YouTube Data API v3 to fetch videos from Apple's official YouTube channel.

### 📌 Notes

This is a practice project built to learn full-stack integration and improve React + Node.js skills.

✍️ Author

- 👤 Amanuel Wubneh
