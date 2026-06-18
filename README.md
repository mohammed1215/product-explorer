# 📦 Stockpile - Modern Product Explorer

Stockpile is a fast, highly optimized Single-Page Application (SPA) built with **React 19**, **TypeScript**, and **Tailwind CSS v4**. It fetches and manages real-time product data directly from the public **Fake Store API**.

## 🔗 Project Links

- **Live Demo:** [https://product-explorer-murex-three.vercel.app/]
- **GitHub Repository:** [https://github.com/mohammed1215/product-explorer]

---

## 🛠️ Built With (Tech Stack)

1. **React 19 & TypeScript 6:** For writing strict type-safe code and scalable UI logic.
2. **Vite 8:** Powered with highly efficient HMR (Hot Module Replacement) for instant feedback.
3. **Tailwind CSS v4:** Leveraging native CSS tokens and modular theme configurations for modern responsive styles.
4. **Native Fetch API:** Clean asynchronous implementation for handling server operations without external libraries.

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/mohammed1215/product-explorer.git
cd product-explorer

```

### 2. Install dependencies

```bash
npm install

```

### 3. Run the application (Development Mode)

```bash
npm run dev

```

_Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) in your browser to view the application._

### 4. Build for Production

```bash
npm run build

```

---

## 🧠 Core Challenges & Pro Optimization Solutions

### 1. Unnecessary Re-renders Optimization (The Pro Challenge) ⚡

- **Challenge:** updating a search query triggers a full component re-render, recalculating and altering arrays inside memory, impacting interface rendering performance.
- **Solution:** Used React's `useMemo` hook to cache and filter products locally. Computations now trigger uniquely when `searchQuery`, `activeCategory`, or the primary product `data` array transitions.

### 2. Double-Fetch / Infinite Loop State on Retry 🔄

- **Challenge:** Implementing standard boolean states (`true/false`) inside an API retry function often triggers multiple requests if state lifecycle flips immediately inside the `finally` block.
- **Solution:** Abstracted custom retry mechanics into a robust numeric counter state called `retryTrigger` inside our `useProducts` hook. Incrementing this trigger forces a clean, atomic refetch without messy state reversals.

### 3. Strict Production Build Guidelines 🛠️

- **Challenge:** Leveraging strict linting settings (`noUnusedParameters`, preventing `any` type types) can interrupt deployment pipelines.
- **Solution:** Cleaned out redundant variables in components like `Categories.tsx`, and properly structured component nodes using safe global identifiers such as `React.ReactNode` inside `Button.tsx` to maintain 100% compilation safety.
