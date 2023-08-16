<img src="https://imgur.com/rEFOZwS.png"/>

# Gadget Gizmo - eCommerce Platform

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/bkpecho/gadgetgizmo/blob/main/LICENSE)
[![Website Status](https://img.shields.io/badge/Website_Status-UP-green.svg)](https://gadgetgizmo.shop/)
[![Follow Me](https://img.shields.io/twitter/follow/bkpecho?style=social)](https://twitter.com/bkpecho)

[Gadget Gizmo](https://gadgetgizmo.shop/) is a feature-rich eCommerce platform designed to provide a seamless online shopping experience. This platform offers a variety of functionalities and technologies to enhance both user and admin experiences. The project is licensed under the [MIT License](https://github.com/bkpecho/gadgetgizmo/blob/main/LICENSE).



> **Explore it live at http://gadgetgizmo.shop/**

## Table of Contents

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies](#install-dependencies)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
- [License](#license)
- [Author](#author)

## Key Features
Gadget Gizmo boasts a wide range of features including:

- **Comprehensive Shopping Cart Functionality:** Seamlessly add, remove, and manage items in the shopping cart.
- **Streamlined Checkout Process:** Effortlessly navigate the checkout process for a smooth transaction.
- **Efficient Admin Product Management:** Admins enjoy efficient product management capabilities.
- **User Profiles with Order History:** Users can access their order history conveniently.
- **Detailed Admin Order View:** Administrators gain insights with a detailed view of orders.
- **Simplified PayPal and Credit Card Integration:** Effortless payment options for users.
- **User Reviews and Product Ratings:** Users can contribute reviews and ratings for products.
- **Top Products Showcase Carousel:** Highlight top products in an engaging carousel.
- **Product Search Capability:** Easily find desired products through the search feature.
- **Cloudinary-Powered Image Storage:** Cloud-based image storage ensures optimal performance.
- **Order Delivery Status Updates:** Users can stay informed about their order delivery status.
- **Product Pagination for Easy Browsing:** Browse products seamlessly with pagination.

## Technology Stack
The platform is built using the following technologies:

- **Frontend:** Utilizes React and Redux for dynamic user interfaces.
- **Backend:** Employs Node.js and Express to handle server-side operations.
- **Database:** Relies on MongoDB for efficient data storage and retrieval.
- **Image Storage:** Utilizes Cloudinary for efficient image storage and management.
- **Payment Integration:** Seamlessly integrates with PayPal JS SDK for smooth payments.
- **Styling:** Utilizes Bootstrap for a visually appealing and responsive design.
- **Build Tool:** Leverages Vite for fast and efficient project building.
- **Deployment:** Uses Cyclic and Fly.io for reliable and scalable deployment.

## Usage
To set up and run Gadget Gizmo:

1. Create a [MongoDB](https://www.mongodb.com/cloud/atlas/register) database and obtain the MongoDB URI.
2. Create a [PayPal Developer]((https://developer.paypal.com/)) account and obtain the Client ID.
3. Sign up for a [Cloudinary](https://cloudinary.com/users/register_free) account and obtain the Cloud Name, API Key, and API Secret.
4. Rename `.env.example` to `.env` and fill in the necessary environment variables.
5. Install server and frontend dependencies using `npm install`.
6. Launch the frontend and backend using `npm run dev`.

### Env Variables
Rename the `.env.example` file to `.env` and add the following

```
# Set the environment mode: development or production
NODE_ENV=development

# Choose a port for your server
PORT=5000

# Replace with your MongoDB connection URI
MONGO_URI=ADD_YOUR_MONGO_URI

# Replace with your preferred JWT secret key
JWT_SECRET=ADD_YOUR_SECRET

# Replace with your PayPal client ID for payments
PAYPAL_CLIENT_ID=ADD_YOUR_PAYPAL_CLIENT_ID

# Set the number of items per page for pagination
PAGINATION_LIMIT=PAGE_SIZE_NUMBER

# Replace with your Cloudinary cloud name
CLOUDINARY_CLOUD_NAME=ADD_YOUR_CLOUD_NAME

# Replace with your Cloudinary API key
CLOUDINARY_API_KEY=ADD_YOUR_API_KEY

# Replace with your Cloudinary API secret
CLOUDINARY_API_SECRET=ADD_YOUR_API_SECRET

# Cloudinary URL with API key and secret
CLOUDINARY_URL=cloudinary://ADD_YOUR_API_KEY:ADD_YOUR_API_SECRET@ADD_YOUR_CLOUD_NAME
```

### Install Dependencies

```
# Install server and frontend dependencies
npm install
cd frontend
npm install
```

### Run

```
# Launch the frontend (:3000) and backend (:5000)
npm run dev

# Start only the backend server
npm run server
```

## Build & Deploy
For production deployment:

1. Generate a production build for the frontend using `npm run build`.
2. You can seed the database with sample data using `npm run data:import` and delete all data with `npm run data:destroy`.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Hey there! I'm **Bryan King Pecho**, a passionate software developer behind Gadget Gizmo. Let's connect! 👋

- Email: pechobk@gmail.com
- Portfolio: [bkpecho.tech](https://bkpecho.tech/)
- GitHub: [bkpecho](https://github.com/bkpecho)
- LinkedIn: [in/bkpecho](https://www.linkedin.com/in/bkpecho/)
- Twitter: [@bkpecho](https://twitter.com/bkpecho)
