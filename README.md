# 📘 Random Quote Generator – TypeScript Project

## 📌 Overview

This is a beginner-friendly toolkit that introduces **TypeScript** by building a **Random Quote Generator** web application.  
The app displays a styled quote when the user clicks a button. It is fully written in **TypeScript**, compiled to JavaScript, and styled using CSS.

---

## 🎯 Objective

- Learn TypeScript using AI prompts via [ai.moringaschool.com](https://ai.moringaschool.com)  
- Create a simple, functional, and styled web application  
- Document every step so others can easily replicate the project  
- Reflect on the use of AI to improve learning and productivity

---

## 🧠 Why TypeScript?

TypeScript is a modern enhancement of JavaScript that introduces **static typing** to the language. It helps developers catch bugs at compile time, improving reliability and scalability in larger projects.

It’s commonly used with modern frameworks like **React**, **Angular**, and **Vue**, making it a valuable skill for new developers.

---

## 🛠️ System Requirements

- **Operating System:** Linux / macOS / Windows  
- **Text Editor:** [Visual Studio Code](https://code.visualstudio.com/) (Recommended)  
- **Runtime & Package Manager:** [Node.js](https://nodejs.org/) v12+ (includes npm)

---

## ⚙️ Installation & Setup

Follow these steps in your terminal:

```bash
# Step 1: Install TypeScript globally
npm install -g typescript

# Step 2: Create your project folder
mkdir random-quote-generator
cd random-quote-generator

# Step 3: Initialize TypeScript project
tsc --init
````

Create the following files inside the folder:

* `index.html`
* `styles.css`
* `script.ts`

Then compile the TypeScript file:

```bash
tsc script.ts
```

This will generate the `script.js` file required to run the project.

---

## 📁 Project Structure

```
random-quote-generator/
├── index.html        # Main HTML file
├── script.ts         # TypeScript logic
├── script.js         # JavaScript output (compiled)
├── styles.css        # CSS styles
└── tsconfig.json     # TypeScript config
```

---

## 💻 How to Run

1. Open the `index.html` file in your browser.
2. You’ll see a styled quote box with a button.
3. Click the button to display a random quote from the list.

---

## 🤖 AI Prompt Journal

### Prompt Used:

> “Give me a step-by-step guide to set up a TypeScript project.”

### Source:

Used on [ai.moringaschool.com](https://ai.moringaschool.com)

### Summary of Response:

* Guided the Node.js and TypeScript installation
* Helped initialize the project structure
* Suggested a simple example (which was adapted for this project)

### Evaluation:

The AI was highly effective in guiding the setup and helped avoid common pitfalls like misconfigured `tsconfig.json`.

---

## 🧩 Common Issues & Fixes

### ⚠️ Issue 1:

**Error:** "Cannot find element with ID ‘quote’."
**Fix:** Ensure the ID `quote` exists in the HTML and matches what you use in the TypeScript DOM reference.

### ⚠️ Issue 2:

**Error:** "Type 'string' is not assignable to type 'number'"
**Fix:** Review function signatures and variable declarations to ensure proper type assignment.

---

## 🤝 Peer Feedback / Testing

This guide was tested by a peer who successfully followed the instructions and ran the application without issues.
Feedback:

* Instructions were clear and easy to follow
* TypeScript compilation was smooth
* The application worked exactly as expected

---

## ⚖️ Bonus: TypeScript vs React.js

| Feature            | TypeScript                      | React.js                            |
| ------------------ | ------------------------------- | ----------------------------------- |
| **Type**           | Language (typed superset of JS) | Library (UI rendering)              |
| **Main Purpose**   | Improves code safety & tooling  | Builds component-based UIs          |
| **Usage**          | Works with any JS project       | Focused on front-end UI             |
| **Integration**    | Used *with* React often         | Often used *with* TypeScript        |
| **Learning Curve** | Moderate (for JS devs)          | Moderate to steep                   |
| **Hello World**    | Simple (HTML + TS)              | Requires build tools (Vite/Webpack) |

**Conclusion:**
React is a JavaScript library used for building UIs, while TypeScript is a language enhancement that improves developer productivity. The two are commonly used together.

---

## 📚 References

* [TypeScript Docs](https://www.typescriptlang.org/docs/)
* [TypeScript GitHub](https://github.com/microsoft/TypeScript)
* [MDN Web Docs: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [W3Schools TypeScript Tutorial](https://www.w3schools.com/typescript/)

---

## 🧠 Created For

**Moringa School AI Capstone Project**
🗓️ Week of August 4th – 8th, 2025
By leveraging generative AI to learn, implement, and document a new technology.

---
