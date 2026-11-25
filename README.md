# ⚛️ 5 React Fundamentals Projects

Projects made to practice React fundamentals like components, props, JSX, and more. 4 were made across *The Ultimate React Course* and 1 without a tutorial.

---

## 📋 Projects Directory

| # | Project | Source | Description |
| :- | :--- | :--- | :--- |
| **1** | [**Shopping Cart**](./personal-project-shopping-cart) | Independent (No Tutorial) | A multi-view e-commerce storefront featuring product search, sorting by price/rating, and cart management saved in Local Storage. |
| **2** | [**Eat-N-Split**](./section8-eat-n-split) | Course (Section 8) | A bill-splitting app to track shared expenses and balances with friends. |
| **3** | [**Far Away (Travel List)**](./section7%20thinking%20in%20react%20state%20management/travel-list) | Course (Section 7) | An interactive travel packing checklist with sorting filters and live packing progress stats. |
| **4** | [**Steps Component**](./section7%20thinking%20in%20react%20state%20management/steps) | Course (Section 7) | An interactive multi-step progress tracker with state-driven navigation and toggle visibility. |
| **5** | [**Fast React Pizza Co.**](./section5%20component%20props%20and%20jsx/pizza-menu) | Course (Section 5) | A responsive restaurant menu displaying dishes, sold-out states, and live business hours. |

---

## 🚀 Projects Overview

### 1. Shopping Cart *(Personal Project — Built Without a Tutorial)*
> **Folder:** [`personal-project-shopping-cart`](./personal-project-shopping-cart)

https://github.com/user-attachments/assets/755c1a49-2e7d-40c8-8451-45de4844d0e8

A standalone e-commerce application built independently from scratch to solidify core React concepts without following a tutorial.
* **Key Features:**
  * Multi-page navigation across **Home** (hero landing banner), **Shop** (product catalog), and **Cart** views.
  * Real-time product search bar and dynamic sorting (`None`, `Rate`, `Price`).
  * Interactive product cards displaying category, price, rating, and **Add To Cart** actions with persistent cart data stored in **Local Storage**.
* **Concepts Practiced:** State management, Local Storage persistence, array filtering & sorting, conditional view rendering, props passing, and component architecture.

---

### 2. Eat-N-Split
> **Folder:** [`section8-eat-n-split`](./section8-eat-n-split)

https://github.com/user-attachments/assets/6a32709e-4637-4f24-a37c-18be96f9dd88

An expense-sharing application that lets users manage a list of friends, add new friends, and split restaurant or outing bills fairly.
* **Key Features:**
  * Friends sidebar displaying real-time debt/credit balances (color-coded for who owes whom).
  * Collapsible form to add new friends with custom names and avatar URLs.
  * Dynamic split-bill calculator that automatically computes each person's share and updates balances.
* **Concepts Practiced:** Lifting state up, derived state, controlled form inputs, conditional rendering, and resetting component state using the `key` prop.

---

### 3. Far Away — Travel Packing List
> **Folder:** [`section7 thinking in react state management/travel-list`](./section7%20thinking%20in%20react%20state%20management/travel-list)

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d6e489ff-2e19-4024-8655-0dd3c7372b73" />

A trip-packing organizer designed to help travelers keep track of items they need to pack before a trip.
* **Key Features:**
  * Add items with custom quantities, mark items as packed/unpacked, and remove items individually or clear the entire list.
  * Sort items dynamically by **Input Order**, **Description**, or **Packed Status**.
  * Live footer statistics calculating total items, packed count, completion percentage, and a *"You got everything! Ready to go"* status at 100%.
* **Concepts Practiced:** Thinking in React, inverse data flow (child-to-parent communication), immutable array updates, and derived statistics.

---

### 4. Steps Progress
> **Folder:** [`section7 thinking in react state management/steps`](./section7%20thinking%20in%20react%20state%20management/steps)

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e0cecc5d-2d30-43b8-9ad8-765e04f9f594" />

A clean step-by-step UI widget demonstrating interactive state transitions and component visibility toggling.
* **Key Features:**
  * Navigate forward and backward through 3 sequential milestones with active step highlighting.
  * Toggle button (`×`) to hide or reopen the entire widget while preserving its current step state.
* **Concepts Practiced:** `useState` hook, updating state safely using callback functions (`(s) => s + 1`), event handling, and conditional CSS classes.

---

### 5. Fast React Pizza Co. (Pizza Menu)
> **Folder:** [`section5 component props and jsx/pizza-menu`](./section5%20component%20props%20and%20jsx/pizza-menu)

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d1d73aa1-9893-4ecf-99a8-45e88f6c16da" />

A clean digital menu for an Italian pizzeria showcasing dynamic rendering and time-based store availability.
* **Key Features:**
  * Renders a list of pizzas with images, ingredients, and prices.
  * Automatically highlights unavailable dishes with a **Sold Out** badge and muted styling.
  * Checks the current system hour (`12:00` – `22:00`) to display whether the restaurant is open or closed alongside an **Order** button.
* **Concepts Practiced:** Components, JSX rules, passing and destructuring props, list rendering with `.map()`, React Fragments (`<>...</>`), and conditional rendering (`&&` and ternary operators).

---

## 🛠️ Tech Stack & Setup

* **Technologies:** React, JavaScript (ES6+), HTML5, CSS3
* **Run any project locally:**
  ```bash
  cd "<project-folder-path>"
  npm install
  npm start
