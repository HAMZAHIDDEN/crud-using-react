# React Products Management System

A simple web application developed using the React library to manage products (CRUD Operations), relying on `json-server` as a mock database (Mock Backend).

## 🚀 Features
* Display a list of products in an interactive table.
* Add a new product.
* Edit the details of an existing product.
* Delete a product with a confirmation message (using SweetAlert2).

## 🛠️ Technologies Used
* **Frontend:** React.js, React Router DOM
* **Backend:** JSON Server
* **Styling:** Bootstrap
* **Alerts:** SweetAlert2

## ⚙️ How to Run

To run this project on your local machine, you will need to open two terminals:

### 1. Run the Mock Server (Backend)
Ensure the `db.json` file is present in the project directory, then run the following command to start the server on port 9000:
```bash
npx json-server --watch db.json --port 9000

### 1. Run the User Interface (Frontend)
In a new Terminal window, install the packages first  ( if you haven't done so already), then run the application:

npm install
npm start

The application will open automatically in the browser at the link: http://localhost:3000