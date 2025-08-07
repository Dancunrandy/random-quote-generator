# 📘 Random Quote Generator – TypeScript Project

A beginner-friendly web app that displays random quotes at the click of a button. Built with **TypeScript**, compiled to JavaScript, and styled with **CSS**.

---

## 🧰 Tech Stack

* **TypeScript** – Static typing for JavaScript
* **HTML/CSS** – Structure and styling
* **Vanilla JavaScript (compiled)** – Runtime code

---

## 🚀 Quick Start

### ✅ Prerequisites

* Node.js v12+ ([Install](https://nodejs.org/))
* Git (optional for cloning)
* A browser (e.g., Chrome, Firefox)
* A code editor (Recommended: [VS Code](https://code.visualstudio.com/))

---

## ⚙️ Setup Instructions

1. **Clone this repository:**

```bash
git clone https://github.com/Dancunrandy/random-quote-generator.git
cd random-quote-generator
```

2. **Install TypeScript globally** (if not installed):

```bash
npm install -g typescript
```

3. **Compile TypeScript to JavaScript:**

```bash
tsc script.ts
```

> This will generate `script.js` in the root folder.

4. **Run the App:**

* Open `index.html` in your browser
* Click the button to get random quotes

---

## 📁 File Structure

```
random-quote-generator/
├── index.html        # Main HTML page
├── script.ts         # Main TypeScript logic
├── script.js         # Compiled JavaScript
├── styles.css        # Styling
└── tsconfig.json     # TypeScript config
```

---

## 🧪 Minimal Working Example

After compiling, opening `index.html` will show:

* A styled quote container
* A button that fetches a new quote from a local array when clicked

---

## 🐞 Common Errors & Fixes

| Error                                              | Cause                                   | Fix                                                  |
| -------------------------------------------------- | --------------------------------------- | ---------------------------------------------------- |
| `Cannot find element with ID 'quote'`              | The `id="quote"` tag is missing in HTML | Add the correct `id` in HTML                         |
| `Type 'string' is not assignable to type 'number'` | Type mismatch                           | Ensure your variable types match function signatures |
| `tsc: command not found`                           | TypeScript not installed                | Run `npm install -g typescript`                      |

---

## 🔗 References & Resources

* [TypeScript Docs](https://www.typescriptlang.org/docs/)
* [MDN Web Docs: `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [W3Schools TypeScript Tutorial](https://www.w3schools.com/typescript/)
* [Visual Studio Code](https://code.visualstudio.com/)

---

## 📦 Deployment Notes

* No server or backend is required
* Entire app is static: works offline once opened in a browser
* You can host this using GitHub Pages or any static file host

---

## 🧠 Toolkit Documentation (Capstone Reference)

### 🎓 Learning Objectives

* Learn and apply TypeScript in a real project
* Use AI-generated prompts to guide development
* Understand debugging, compilation, and runtime processes

---

### 🤖 AI Prompts Used

> “Give me a step-by-step guide to set up a TypeScript project.”

**Used on:** [ai.moringaschool.com](https://ai.moringaschool.com)
**Response Summary:**

* Guided setup: installing Node.js, TypeScript
* Helped with `tsconfig.json`
* Provided example structure

---

### ✍️ Reflection

Using AI significantly sped up the setup and learning process. It clarified difficult concepts like strict typing and improved the overall project quality. This project deepened understanding of how TypeScript integrates into frontend workflows.

---

### ✅ Peer Review

The project was tested by peers at **Moringa School** who were able to:

* Run the project with minimal setup
* Understand the file structure and logic
* Modify and extend the code easily

---

## 📚 Bonus: TypeScript vs. React Comparison

| Feature        | TypeScript                | React.js                              |
| -------------- | ------------------------- | ------------------------------------- |
| Type           | Superset of JavaScript    | UI library for building components    |
| Purpose        | Static typing and tooling | Component-based front-end development |
| Works With     | Any JavaScript project    | Often used with TypeScript            |
| Learning Curve | Moderate                  | Moderate to steep                     |

---

## 👨‍💻 Created By

Daniel Randy
For: **Moringa School AI Capstone Project**
🗓️ August 4–8, 2025

---

