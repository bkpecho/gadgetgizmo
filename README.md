<img src="https://imgur.com/rEFOZwS.png"/>

# Gadget Gizmo - eCommerce Platform

> Explore it live at https://gadgetgizmo.cyclic.app/

Gadget Gizmo is a robust eCommerce platform developed with the MERN stack and Redux, offering a complete shopping cart experience and streamlined payment processing, including PayPal and credit/debit options. 

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)
- [License](#license)
- [Author](#author)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Cloudinary image storage
- Database seeder (products & users)
- Deployed using Cyclic

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)
- Sign up for a Cloudinary account and obtain your `Cloud Name`, `API Key`, and `API Secret` - [Cloudinary](https://cloudinary.com/users/register_free)

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

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

user@email.com (Customer)
123456
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Bryan King Pecho**
  - GitHub: [bkpecho](https://github.com/bkpecho)
  - Twitter: [@bkpecho](https://twitter.com/bkpecho)
  - LinkedIn: [in/bkpecho](https://www.linkedin.com/in/bkpecho/)
  - Email: pechobk@gmail.com
  - Portfolio: [bkpecho.tech](https://bkpecho.tech/)
