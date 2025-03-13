# ✨ Tech Quiz Test Suite

## 📚 Description

The **Tech Quiz Test Suite** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) enhanced with Cypress tests for robustness. This application allows aspiring developers to take quizzes to test and improve their programming knowledge through randomized questions. Users can start a quiz, answer a series of questions, and receive immediate feedback on their performance.

---

## ✨ Features

- ✔️ **Quiz Interaction:** Start quizzes, answer questions, and view scores.
- ✔️ **Randomized Questions:** Users receive different sets of questions each quiz.
- ✔️ **Cypress Testing:** Includes both component and end-to-end testing for reliability.
- ✔️ **Modern Stack:** Built with React (frontend), Node.js & Express backend, and MongoDB.
- ✔️ **Mongoose Database Integration:** Efficient MongoDB data handling.
- ✔️ **Clear UI:** Styled with Bootstrap for clear, responsive design.

---

## 📌 Purpose

This Tech Quiz application is designed to:
- Provide aspiring developers an interactive platform to assess and enhance their coding knowledge.
- Offer randomized quiz questions to ensure varied learning experiences.
- Give instant feedback by displaying scores immediately upon quiz completion.
- Allow users to retake quizzes, facilitating continuous learning and improvement.

---

## 📚 Table of Contents

- ⚙️ [Installation](#installation)
- 🛠️ [Usage](#usage)
- 🚀 [Tests](#tests)
- 💖 [Contributing](#contributing)
- 📜 [License](#license)

---

## ⚙️ Installation

### 📋 Prerequisites

- ✔ Node.js and npm installed.
- ✔ MongoDB Atlas account.

### 🛠️ Installation Steps

1. **Clone this repository**
   ```
   git clone <your_repo_link_here>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create `.env` in your `server` directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. **Seed the Database** (optional but recommended)
   ```bash
   npm run seed
   ```

---

## 🚀 Usage

- **Start the application (server and client)**

  ```bash
  npm run start:dev
  ```

- **Open your browser and visit:**

  ```
  http://localhost:3000
  ```

- **Run Cypress Tests:**

  ```bash
  npm run cypress:open
  ```

---

## 🧪 Tests

This project uses Cypress for testing:

- **Component tests:** Verify UI components individually.
- **End-to-End (E2E) tests:** Ensure full application flows function correctly.

### ▶️ Running Tests

- Launch Cypress test runner:
  ```bash
  npm run cypress:open
  ```

---

## 💖 Contributing

Contributions are always welcome! Follow these clear steps:

1. **Fork** this repository.
2. Create your Feature Branch:
   ```bash
   git checkout -b new-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m \"Added new feature\"
   ```
4. **Push to GitHub:**
   ```bash
   git push origin new-feature
   ```
5. Submit a **Pull Request** for review.

---

## 📜 License

📚 This project is licensed under the MIT License.  
See [LICENSE](./LICENSE) for more details.

---

---

## 🎥 Video:  

### Tech Quiz App Functionality

### Note:
The correct answers can be found in server/src/seeds/pythonQuestions.json


https://github.com/user-attachments/assets/2843076e-501c-42d7-91aa-cdc9d99f6d53



Happy coding, and enjoy your tech quiz experience! ✨🎉
