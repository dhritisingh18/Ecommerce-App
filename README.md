# eCommerce Application

This full-stack eCommerce application is built using **Angular** for the frontend and **C# .NET** for the backend, offering a feature-rich platform that is both scalable and secure. The project demonstrates the integration of modern web development frameworks and best practices to deliver a seamless experience for both users and sellers.

# Demo Link
https://drive.google.com/file/d/1Q4GxfLbxPCRxQ7oknPpXpQFqfTL64XQx/view?usp=drive_link

## Features

### Frontend (Angular)
The frontend of the application is developed using **Angular**, a powerful framework known for its **component-based architecture** and **responsiveness**. The user interface is designed to provide a smooth and interactive experience, with features such as:

- **Responsive Dashboard**: A fully functional, responsive dashboard that adapts to different device types.
  
- **Product Search & Display**:
  - Fast, efficient product search functionality using **Angular’s reactive forms** and **HTTPClient** for API requests.
  - Users can dynamically filter products and view detailed information in real-time.

- **User & Seller Authentication**:
  - Login and registration are handled with **Angular's form validation** and **JWT (JSON Web Tokens)** for secure, token-based authentication.
  - Only authorized users and sellers can access their respective functionalities, with **Angular’s routing** ensuring smooth navigation between protected routes.

- **Cart Management**:
  - Users can add, remove, and edit items in their cart, with **data-binding** features and **state management** in Angular ensuring real-time updates.

- **Order Management**:
  - A personalized **"My Orders"** page allows users to view past orders, track delivery status, and cancel orders. 
  - This is facilitated by **RESTful API** calls and **Angular’s HttpClientModule** for smooth communication with the backend.

### Backend (C# .NET)
The backend is powered by **C# .NET**, which handles the business logic, API endpoints, and data persistence. The application’s backend ensures a secure, robust system, featuring:

- **Token-Based Authentication**:
  - Implemented using **JWT** in **C# .NET**, the backend provides secure endpoints for login, registration, and session management. 
  - Each request is validated, ensuring that only authenticated users and sellers can perform actions like adding products or placing orders.

- **Product Management for Sellers**:
  - Sellers can manage their product catalog via a dedicated dashboard where they can add, edit, and remove products.
  - The backend is powered by **REST APIs** in **C# .NET**, enabling real-time interaction with the database.

- **Cart and Order Processing**:
  - The **Entity Framework** in C# .NET efficiently manages cart and order data, allowing users to add, update, or remove items.
  - Order management is handled via well-defined APIs that enable users to place orders, track their status, and cancel if needed. 
  - The database securely stores user and order information, ensuring data integrity and reliability.

- **Validation & Error Handling**:
  - Comprehensive validation and error handling are implemented using C#'s built-in capabilities. Each user input is validated, and errors are handled gracefully, providing a smooth user experience.

### Key Integrations
- **C# .NET** seamlessly integrates with **SQL databases** to store product, user, and order information.
- The entire application communicates via **RESTful APIs**, ensuring a clean separation of concerns between the frontend and backend, making it highly scalable and maintainable.

## Technology Stack

- **Frontend**: Angular
- **Backend**: C# .NET
- **Database**: SQL
- **Authentication**: JWT (JSON Web Tokens)
- **APIs**: RESTful APIs
- **ORM**: Entity Framework (C# .NET)

## Conclusion
This project showcases the combination of **Angular’s dynamic frontend capabilities** with **C# .NET’s powerful backend services**, creating a robust, scalable, and user-friendly eCommerce platform. It has deepened my understanding of full-stack development, helping me build a platform that ensures a seamless experience for both users and sellers.
