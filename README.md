# Travel Agency Booking System

## Project Description

A simple travel agency application that allows customers to browse and book tour packages, while providing an admin panel for managing packages and viewing bookings. The application includes the following key features:
- Display available tour packages with details.
- Allow customers to book a package and generate an invoice.
- Admin panel to manage tour packages and view customer bookings.

## Features

### Core Features:
1. **Tour Packages Page**:
   - Display a list of tour packages with details like:
     - Title
     - Description
     - Price
     - Available dates
     - Image
   - Data is fetched from a MongoDB collection.

2. **Package Booking**:
   - Each package has a 'Book Now' button that opens a form for customers to fill in their details:
     - Name
     - Email
     - Phone Number
     - Number of travelers
     - Special requests (optional)
   - The booking data is saved in MongoDB.
   - After booking, a basic invoice is generated, showing:
     - Customer details
     - Package details
     - Total price (price per person * number of travelers)

3. **Admin Panel**:
   - A dashboard to manage tour packages:
     - Add, update, or delete packages.
   - View submitted bookings.

### Bonus Features (Optional):
- **Search and Filter**:
  - Search tour packages by price, destination, or availability.
- **Pagination**:
  - Pagination for the list of tour packages for easier navigation.
- **PDF Invoices**:
  - Generate and download invoices as PDFs using `pdf-lib` or `jspdf`.
- **Advanced Admin Features**:
  - Analytics for the number of bookings per package.

## Tech Stack

- **Frontend**: React.js + TailwindCSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Other Libraries/Tools**:
  - `jspdf` (for PDF generation)
  - `dotenv` for environment variable management

## Setup Instructions

Follow the steps below to get the application running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Ch1nmayH/Travel-Agency-Booking-System.git
cd Travel-Agency-Booking-System

### 2. Set Up Backend (API)
Navigate to the backend directory and install dependencies:

cd backend
npm install

Create a .env file in the backend folder and add the following:

MONGO_URI=your_mongodb_connection_string
PORT=8000
JWT_SECRET = APPLE

Start the backend server:
npm start

### 3. Set Up Frontend (React)

Navigate to the frontend directory and install dependencies:

cd frontend
npm install

Create a .env file in the frontend folder and add the following:

REACT_APP_API_BASE_URL=http://localhost:5000

Start the frontend development server:

npm start

### 4. Access the Application
Frontend: Visit http://localhost:3000 to view the available tour packages, book a package, and generate invoices.
Admin Panel: Access the admin panel at /admin for managing tour packages and viewing bookings.

### 5. Deployed Version
You can access the deployed version of the app at https://ch1nmayh.github.io/Travel-Agency-FrontEnd/ (replace with your actual link once deployed).

```

**API Endpoints**
1. Tour Packages Endpoints:
GET /packages: Retrieve all tour packages.
GET /packages/:id: Retrieve details of a specific package.

2. Booking Endpoint:
POST /bookings: Submit a package booking.

3. Admin Panel Endpoints:
POST /admin/packages: Add a new package.
PUT /admin/packages/:id: Update an existing package.
DELETE /admin/packages/:id: Delete a package.
GET /bookings: View Booking
GET /bookings:id: View specific booking

**Code Quality**
- Modular and readable code structure.
- Proper use of Git for version control with meaningful commit messages.

**Acknowledgments**
- Thanks to the open-source community for the libraries used.
- MongoDB for database management and storing tour packages and bookings.



