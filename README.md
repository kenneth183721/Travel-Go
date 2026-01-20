## Travel Go — Interactive Travel Journal & Map Tracker
A sophisticated Single Page Application (SPA) designed for travelers to document their journeys on an interactive map. This project showcases advanced React patterns for state management and seamless navigation.

[LiveDemo](https://kenneth183721.github.io/Travel-Go)

## 🚀 Project Overview
Travel Go is more than just a list of places; it’s a spatial experience. It allows users to track their global footprints via an interactive map interface. The project focuses on bridging the gap between geographical data and a fluid user interface, ensuring that state remains consistent across complex navigation flows.

## 🛠 Tech Stack
- Frontend: React, CSS Modules (Scoped styling).
- Routing: React Router (Nested routes & Protected routes).
- Mapping: Leaflet & React Leaflet.
- State Management: Context API + useReducer (Centralized complex state).

## 💡 Key Engineering Highlights
- Advanced State Management (Context + useReducer): Implemented a "Single Source of Truth" architecture using the Context API. By utilizing the useReducer hook, I managed complex state transitions (e.g., loading states, fetching data, creating/deleting cities) in a predictable way, significantly reducing "prop drilling" and improving code maintainability.
- Dynamic Mapping with Leaflet: Integrated the Leaflet Map package to create a responsive, interactive map. I implemented custom logic to synchronize the map's position with the user's selected city and handled geographical coordinate extraction to allow users to "click-to-add" new travel entries.
- Fluid Navigation & Routing: Leveraged React Router to handle nested routes and URL-based state (using URL parameters). This ensures that specific travel entries are bookmarkable and that the UI transitions smoothly between "City View," "Country View," and "Form View" without page reloads.
- Design-to-Code Focus (UX/UI): As a Designer-turned-Developer, I focused on the Micro-interactions of the sidebar and map popups. Used CSS Modules to ensure encapsulated, maintainable styles while maintaining a high-fidelity design consistent with modern travel platforms.
