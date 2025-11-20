# LMS — Course Management Module

**Project:** LMS (Learning Management System) — Course Management Module  
**Created / Updated:** 17-Nov-2025

---

## 📅 Project Overview
This is a simple **Course Management** module implemented using **React**.  
It demonstrates basic CRUD (Create, Read, Update, Delete) operations with data stored in an in-memory array.  
Forms use `react-hook-form` (`useForm`) for input handling and validation. The UI includes a small CSS file for clean styling.

### Key features
- Register a course (Course ID, name, description, duration, min/max enrollment, date)
- Update an existing course (search by Course ID, then update fields)
- Delete a course by Course ID
- List all courses
- View course details by Course ID
- Simple navigation between sub-modules using `react-router-dom`
- Uses `react-hook-form` for form handling and validation

---

## 📂 Folder Structure
src/
│── components/
│     ├── CourseRegistration.jsx
│     ├── CourseUpdate.jsx
│     ├── CourseDelete.jsx
│     ├── CourseList.jsx
│     ├── CourseDetails.jsx
│     ├── CourseNavigationBar.jsx
│── App.jsx
│── index.css

---

## Prerequisites
- Node.js (>= 16 recommended)
- npm or pnpm or yarn
- Recommended packages:
  ```bash
  npm install react-hook-form react-router-dom
## How to run (development)
1. Install dependencies:
   ```bash
   npm install
   npm install react-hook-form react-router-dom
2. Start dev server:
  Vite:
   ```bash
   npm run dev
   npm start
## 👤 Prepared By

VivekPandey
Date: 17-Nov-2025

