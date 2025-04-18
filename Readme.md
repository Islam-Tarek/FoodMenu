# 🍔 Burger Restaurant Management System

A React-based food ordering system with admin dashboard capabilities, featuring cart management and product CRUD operations.

## ✨ Features

### User Interface

- **Menu Browsing**: View food items categorized by type (Burgers, Fries, Water)
- **Cart Management**:
  - Add/remove items from cart
  - Quantity adjustment
  - Real-time cart updates
- **Responsive Design**: Mobile-friendly interface
- **Real-time Feedback**: Notifications for successful actions

### Admin Dashboard

- **Product Management**:
  - Add new products
  - Edit existing items (name, price, category)
  - Delete products
- **Inventory Tracking**: View all products in organized table format

## 🛠️ Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Backend**: JSON Server (REST API)
- **Routing**: React Router
- **State Management**: React Context API

## 📸 Screenshots

1. **Menu Interface**

   ![Menu](https://drive.google.com/uc?export=view&id=1sbzxVf6oMBs0_W8ovwdPCmOfP0PYyi2i)

2. **Cart Management**

   ![Cart](https://drive.google.com/uc?export=view&id=17xJ7o9H8vWXcW3PjjbG6FVhd-pvmS6r0)

3. **Admin Products Table**

   ![Admin View](https://drive.google.com/uc?export=view&id=1p_aBtJ2LnleohchnBtKQHrFf16ORFRQu)

4. **Product Editing**

   ![Edit Product](https://drive.google.com/uc?export=view&id=1j5Y0fymtXwptXtFKnk-k7In694AIRrJn)

5. **Add New Product**

   ![Add New Product](https://drive.google.com/uc?export=view&id=1a-KHc5asn7C5C8RPlqT3PLBreR_JGsNd)

6. **Search for a product**

   ![Search for a product](https://drive.google.com/uc?export=view&id=11AWX5cHFxfrFwpJpEMPLe8aZOTa4ccsB)

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Islam-Tarek/FoodMenu.git
   ```

2. Install dependencies:

   ```bash
   cd Frontend
   npm install
   ```

3. Start React server (port 5173):

   ```bash
   cd Frontend
   npm run dev
   ```

4. JSON Server (for data):

   - Data sample:

   ```bash
   {
   "menu": [
    {
      "id": "1", "name": "Burger -  XXL", "price": "100",
      "count": 0, "isInCart": false, "category": "1"
    },{
      "id": "2",  "name": "Fries -  L",  "price": "60",
      "count": 0,  "isInCart": false, "category": "2"
    }],

    "categories": [
    {"id": "1",  "name": "Burger"},
    {"id": "2",  "name": "Fries" },
    { "id": "3", "name": "Water"}
   ]}
   ```

## 🎬 Demo

DEMO [Demo](https://drive.google.com/file/d/1RxfHWFffF2oLk9-JSjIxNGMRi_Iyvwcv/view?usp=drive_link)
