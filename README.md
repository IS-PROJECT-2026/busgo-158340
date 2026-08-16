# 🚌 BusGo — Bus Ticket Booking System

BusGo is a static web-based bus ticket booking system designed to provide
users with a simple and convenient way to search for bus journeys, select
available seats, make bookings, and view their saved tickets.

---

## 🌐 Live Deployment

https://is-project-2026.github.io/busgo-158340/

## 📌 Project Overview

BusGo allows users to:

- Search for available bus services.
- Select a departure and destination.
- Choose a travel date.
- View matching bus services.
- Select a bus.
- Select an available seat.
- View booking information and pricing.
- Confirm a booking.
- Store booking information locally.
- View previously saved bookings through the My Tickets section.
- Handle empty ticket states when no bookings exist.

The system is implemented as a client-side static web application and does
not require a backend server or database.

---

## ✨ Main Features

### 🔎 Bus Search

Users can select:

- Departure location
- Destination
- Travel date

The system validates the search and displays matching bus services.

### 🚌 Bus Selection

Users can select a bus from the available search results and view the
corresponding:

- Bus name
- Route
- Price

### 💺 Seat Selection

Users can select an available seat.

The selected seat is visually highlighted and reflected in the booking
summary.

### 🎫 Booking

After selecting a bus and seat, users can proceed with the booking process
and receive booking confirmation.

### 📋 My Tickets

The My Tickets section displays saved bookings, including relevant journey
and ticket information.

### 💾 Local Storage

Booking information is stored using the browser's local storage, allowing
saved tickets to remain available when the user returns to the application.

### 📱 Responsive Interface

The interface includes responsive styling for different screen sizes.

---

## 🛠️ Technologies Used

- **HTML5** — Structure and content of the web pages
- **CSS3** — Styling, layout, and responsive design
- **JavaScript** — Application logic and user interaction
- **Browser Local Storage** — Client-side booking persistence
- **Git** — Version control
- **GitHub** — Repository hosting and project management
- **GitHub Pages** — Deployment

---

## 📁 Project Structure

```text
busgo-158340/
│
├── assets/
│   └── Project images and other assets
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── booking-summary.css
│
├── js/
│   ├── app.js
│   ├── booking.js
│   └── confirmation.js
│
├── index.html
├── tickets.html
├── testing.md
└── README.md
