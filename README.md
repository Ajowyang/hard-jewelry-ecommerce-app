# Hard Jewelry Ecommerce

Hard Jewelry Ecommerce is a full stack e-comm web application for a jewelry Brand. Users can browse products, add to cart, and checkout. While shopping, users can select an item's size and material which will affect the price of the item due to the variation of the item they have selected.

## Technologies
<ul>
<li>React</li>
<li>Express</li>
<li>PostgreSQL</li>
<li>TypeScript</li>
<li>Tailwind CSS</li>
</ul>

## Using The App
User can shop for products by clicking on 'Shop All' on the Navbar or the 'Shop Restock' button on the Home Screen

<img width="1231" alt="Screenshot 2024-10-21 at 10 22 28 AM" src="https://github.com/user-attachments/assets/bb343230-7883-48ce-9e99-9097ff5daec1">

## Browse Products
This will take the users to the Products page which contains a catalog of all products currently in the shop. Users can click on the product they want to purchase or view more details about.

<img width="1229" alt="Screenshot 2024-10-21 at 10 25 01 AM" src="https://github.com/user-attachments/assets/81ef365f-91f9-4723-8ba9-27db34af5e17">

## View Product Details and Add to Cart
On the product details page, users can view product images and details about including possible materials and sizes and a description of the product. Users can click on which image they want to display on the carousel by clicking on the smaller imagesa at the bottom and select their desired material and size of product by clicking on it. They can also add this product to the cart by clicking on the 'Add To Cart' button. If item is out of stock, it will not be added to the user's cart. If this variation of the item is already in the user's cart, the quantity in the cart will increase by 1.

<img width="1228" alt="Screenshot 2024-10-21 at 10 25 34 AM" src="https://github.com/user-attachments/assets/6f7471ea-ebb0-4d08-8981-22885e67caad">

## View Cart Change Quantity and Checkout 
Users can navigate to the cart page by clicking on the Cart icon in the Navbar which will also have an icon with the number of a unique variations of a product considering the type of prouduct, the material, and the size currently in our cart. The cart page will show all unique variations of an item as well as their quantity and per unit price as well as the total price of all items in the cart at the bottom of the cart. Users can increase of decrease the quantity of an item by clicking on the plus and minus signs on an item in the cart and the total price of the cart will update accoringly. If item is out of stock because there is not enough of them in the inventory, the quantity of the product will not increase. Finally, users can complete their purchase by clicking the 'Check Out' buttton which will clear the cart of all items contained in it and subtract the quantity of those items from the inventory in the database.

<img width="1230" alt="Screenshot 2024-10-21 at 10 26 31 AM" src="https://github.com/user-attachments/assets/84b1be8c-e036-4faa-b5d3-5197fed84503">



