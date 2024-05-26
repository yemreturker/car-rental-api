# Car Rental API

## Project Description

Car Rental API is a RESTful API designed to manage car rental services. It includes user authentication, car management, and reservation management functionalities.

## Features

-   User authentication (login, register)
-   Car management (add, update, delete, view cars)
-   Reservation management (create, update, delete, view reservations)

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT (JSON Web Tokens)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/yemreturker/car-rental-api.git
    ```

2. Navigate to the project directory:

    ```sh
    cd car-rental-api
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the application:
    ```sh
    npm start
    ```

## API Endpoints

### Auth Routes

-   **POST /auth/register**: Register a new user.
-   **POST /auth/login**: Login a user.

### Car Routes

-   **GET /cars**: Get all cars.
-   **POST /cars**: Add a new car.
-   **PUT /cars/:id**: Update a car by ID.
-   **DELETE /cars/:id**: Delete a car by ID.

### Reservation Routes

-   **GET /reservations**: Get all reservations.
-   **POST /reservations**: Create a new reservation.
-   **PUT /reservations/:id**: Update a reservation by ID.
-   **DELETE /reservations/:id**: Delete a reservation by ID.

## Project Structure

```plaintext
car-rental-api/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── carController.js
│   │   └── reservationController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Car.js
│   │   ├── Reservation.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── cars.js
│   │   ├── reservations.js
│   │   └── index.js
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
