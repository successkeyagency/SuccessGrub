# 🍽️ SuccessGrub - Full Stack Food Ordering Web App

![Stack: React, Node.js, Express, MongoDB](https://img.shields.io/badge/Stack-MERN-blueviolet)  
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![Responsive](https://img.shields.io/badge/100%25-Responsive-success)

**SuccessGrub** is a comprehensive full-stack food ordering web application built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. It delivers a seamless experience for customers to browse menus, add items to their cart, and place orders with integrated payment processing. The app also features a robust admin panel for managing menu items, orders, and users.

---

## 🌟 About This Project

This app is part of the **SuccessKeyAgency** demo series that demonstrates real-world, production-ready web applications tailored for restaurants and food businesses. The project highlights scalable, clean code practices and modern web technologies crafted by **SuccessKeyAgency**.

---

## 🚀 Live Demo

👉 **Live Website:** *https://success-grub-frontend.vercel.app*

---

## ✨ What SuccessGrub Offers

### 🍔 For Customers
- Browse a visually appealing, categorized food menu.
- Add food items to the cart with quantity control.
- Proceed through a smooth checkout process entering name, address, and payment details.
- Secure user authentication with login and registration.
- View order status updates in real-time.
- Responsive design optimized for mobile and desktop.
- Multiple payment options with Stripe integration.

### 🧑‍💼 For Admins
- Add, update, and delete menu items with images and descriptions.
- View and manage customer orders.
- Update order statuses dynamically.
- Monitor user data and maintain security.
- Intuitive admin dashboard with real-time updates.
- A Reservation Feature (more info below)

---

## 🛠️ Tech Stack

| Technology     | Role                     |
|----------------|--------------------------|
| React.js       | Frontend UI              |
| Tailwind CSS   | Styling and Responsive Design |
| Node.js        | Backend Runtime          |
| Express.js     | REST API Server          |
| MongoDB        | Database                 |
| Stripe         | Payment Gateway          |
| Vercel / Heroku| Deployment               |

---

## 🔍 Features Breakdown (Key Milestones)

- Structured React project with modular components for header, menu, cart, footer, and user authentication.
- State management using Context API for cart and user data.
- Dynamic routing with React Router for smooth navigation.
- Backend API built with Express.js, handling products, users, orders, and authentication.
- User authentication with JWT tokens and password hashing via bcrypt.
- Real-time order tracking and admin controls to update order statuses.
- Image upload and storage for food items.
- Stripe payment integration with order verification and status confirmation.
- Fully responsive UI enhanced with Tailwind CSS.
- Custom spinner animations and toast notifications for UX feedback.

---

## 🔥 How I Created the Reservation Feature

The reservation feature allows users to book a table directly through the app by entering essential information such as name, contact details, date, and time. It integrates seamlessly with the backend API to save reservation data in MongoDB, providing admins a simple interface to view and manage bookings. This feature involved:

- Creating a React reservation form component with validation.
- Setting up API endpoints for reservation creation and retrieval.
- Adding state management to handle form inputs and submission status.
- Building admin UI components for listing, approving, or canceling reservations.
- Styling with Tailwind CSS to maintain UI consistency.
- Ensuring responsive design for easy use on mobile devices.

---

## 💼 Made by SuccessKeyAgency

**SuccessKeyAgency** is a freelance web development agency run by [William Ngumo](https://github.com/WilliamNgumo), specializing in building innovative, scalable web applications tailored to elevate businesses in the digital space.

🔗 Website: [successkeyagency.com](https://successkeyagency.com)  
📧 Email: [main@successkeyagency.com](mailto:main@successkeyagency.com)  
📍 Based in St. Louis, MO
