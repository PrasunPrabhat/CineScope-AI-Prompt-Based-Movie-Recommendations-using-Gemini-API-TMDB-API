# 🎬 NetflixGPT – AI-Powered Movie Recommendation Web App

NetflixGPT is a feature-rich, responsive movie streaming web application inspired by Netflix. It integrates **Gemini AI** (via OpenRouter) to deliver **prompt-based movie recommendations**, allowing users to input natural language queries like _"Recommend comedy movies from the 90s"_ and receive tailored results. Real-time movie data is fetched from the **TMDB API**, and state is centrally managed using **Redux Toolkit**.

> 🔥 Built with performance, scalability, and clean architecture in mind.

---

## 📸 Demo

[![Netlify/Vercel Deploy Preview](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://netflix-frontend-d318e.web.app/) <!-- Replace with actual link -->

---

## 🚀 Features

- ✅ Google Sign-In using **Firebase Authentication**
- 🎞️ Now Playing, Top Rated, Popular & Upcoming Movies via **TMDB API**
- 🧠 **Prompt-based AI Movie Recommendations** using **Gemini (OpenRouter)**
- 🌐 Multilingual Support with Language Dropdown
- ⚡ Optimized State Management using **Redux Toolkit**
- 💡 Shimmer Loading UI during data fetching
- 📱 Fully Responsive – Optimized for mobile (Galaxy S5: 360×640)
- 🎨 Beautiful Netflix-like UI with hover effects and modern design

---

## 🛠️ Tech Stack

| Frontend | Backend Integration   | Authentication | API      | State Management |
| -------- | --------------------- | -------------- | -------- | ---------------- |
| React.js | Gemini via OpenRouter | Firebase Auth  | TMDB API | Redux Toolkit    |

---

## 🧠 AI Prompt Example

> “Act as a Movie Recommendation System and suggest 5 movies for the query: ‘thrilling space sci-fi’. Only give names of 5 movies, comma separated.”

---

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/NetflixGPT.git
cd NetflixGPT
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file and add your API keys:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_GEMINI_API_KEY=your_openrouter_or_google_key
```

### 4. Run the App

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

| Script          | Description                             |
| --------------- | --------------------------------------- |
| `npm start`     | Runs the app in development mode        |
| `npm test`      | Launches the test runner                |
| `npm run build` | Builds the app for production           |
| `npm run eject` | Exposes configuration for customization |

---

## 🧠 Learn More

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [TMDB API Docs](https://developer.themoviedb.org/docs)
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)

---

## 👨‍💻 Author

**Prasun Prabhat**
Frontend Developer | Passionate about AI + Web
[LinkedIn](https://www.linkedin.com/in/prasun-prabhat-859838230/) • [Portfolio]()

---

## 📜 License

MIT License. Feel free to fork, modify, and contribute!

---
