# SoYummy - Your Ultimate Web Cookbook

![Alt text](./assets/image-14.png)

<p align="center">
      <img src="https://i.pinimg.com/originals/86/5d/21/865d21c9cd8cf1805ee4bc83e1bac4fa.png" width="1010">
</p>

SoYummy is a feature-rich web cookbook application. It allows you to easily
discover, create, and share a wide variety of recipes, and make shopping lists
for your cooking adventures. You can also create an account, log in, change your
username, and update your profile picture. Enjoy cooking like never before with
SoYummy!

This project is available at
https://anette1983.github.io/project-team_developer_007_react

## Backend info

This application uses it's own backend created by our team with Node.js and
MongoDB. The server manages collections of recipes and users, providing
authentication/authorization, email verification, and the ability to work with
images.

- Backend is available at https://so-yummy-project-hnb2.onrender.com
- [Repository link](https://github.com/anette1983/project-team_developer_007_node)
- Documentation:
  [Swagger](https://so-yummy-project-hnb2.onrender.com/api-docs/#/)

## Features

### Authorization

- **User registration**: Easily create a new account by providing your email
  address and password. A **verification email** is sent to validate the user's
  account, ensuring account security.

- **User login**: Existing users can log in using their registered email address
  and password.

### Recipe Exploration

- **Сategories**: Explore recipes by category, ensuring a wide range of options
  for every taste.

- **Recipe sharing**: Share your culinary creations by providing recipe details,
  including name, ingredients, preparation steps, and images.

- **Recipe discovery**: Discover a diverse array of recipes shared by fellow
  users. Search recipes by name, category, or ingredients to find the perfect
  dish.

- **My recipes**: Keep track of your personally crafted recipes in one
  convenient location.

- **Favorite recipes**: Curate your list of favorite recipes for quick and easy
  access to your go-to dishes.

### Shopping Made Simple

- **Ingredient ordering**: Add recipe ingredients to your **shopping list** for
  hassle-free grocery shopping.

### Newsletter subscribe

- **Subscribe** for our newsletters

### Personalization

- **Username and avatar management**: Customize your profile by changing your
  username and updating your avatar image to reflect your personality.

### User-Friendly Design

- **Adaptive design**: Enjoy a seamless experience across different devices with
  adaptive design breakpoints at 375px, 768px, and 1440px.

## Available Routes

- `/register` - redirects to RegisterPage
- `/signin` - redirects to SigninPage
- `/main` - renders MainPage component
- `/categories/:categoryName` - redirects to CategoriesPage
- `/add` - redirects to AddRecipesPage
- `/my` - redirects to MyRecipesPage
- `/favorite` - redirects to FavoritePage
- `/shopping-list` - redirects to ShoppingListPage
- `/search` - redirects to SearchPage

## Used Technologies

The SoYummy web application is built using the following technologies:

- Frontend:
  <div align="center">
    <p align="center">
      <img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/190887639-d0ba4ec9-ddbe-45dd-bea1-4db83846503e.png" alt="Chakra UI" title="Chakra UI"/>
      <img height="50" src="https://reactrouter.com/favicon-light.png" alt="React Router" title="React Router"/>
      <img width="50" src="https://user-images.githubusercontent.com/43313420/105883661-64604380-6007-11eb-8cfa-45ff66b37fdb.png" alt="Axios" title="Axios"/>
      <img width="50" src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" alt="Formik" title="Formik"/>
      <img width="50" src="https://notiflix.github.io/webapp/notiflix-og.jpg" alt="Notiflix" title="Notiflix"/>
    </p>
  </div>

    <!-- - HTML5
    - CSS3
    - JavaScript
    - React.js
    - Redux Toolkit
    - React Router -->

- Backend:

<div align="center">
	<img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/>
    <img height="50" src="https://icon.icepanel.io/Technology/svg/Mongoose.js.svg" alt="Mongoose" title="Mongoose"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" alt="Swagger" title="Swagger"/>
   <img height="50" src="http://jwt.io/img/logo-asset.svg" alt="JSON web token" title="JWT"/>
   <img height="50" src="https://nodemailer.com/nm_logo_200x136.png" alt="Nodemailer" title="NOdemailer"/>
   <img height="50" src="https://cloudinary-marketing-res.cloudinary.com/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1638385862/cloudinary_cloud_glyph_blue_png.jpg?_s=public-apps" alt="Cloudinary" title="Cloudinary"/>
   <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Gravatar-default-logo.jpg" alt="Gravatar" title="Gravatar"/>
   <img height="50" src="https://camo.githubusercontent.com/c306d97014be1caa9a2a511a0ff4722d54a77b0b6c81a18c81113d6051408325/68747470733a2f2f61692e6769746875622e696f2f6e616e6f69642f6c6f676f2e737667" alt="Nanoid" title="Nanoid"/>

</div>

- Additional tools and libraries:
  - Animate.css
  - bcrypt
  - Multer
  - Joi
  - clsx

## Usage

To use this project locally, please follow these steps:

1. Clone the repository to your local machine using the following command: git
   clone https://github.com/anette1983/project-team_developer_007_react.git

2. Navigate to the project's directory: cd project-team_developer_007_react

3. Install the project dependencies using npm: npm install

4. Customize the project's configuration according to your requirements. You may
   need to modify configuration files and environment variables.

5. Start the project: npm start

6. Access the application by navigating to `http://localhost:3000` in your web
   browser.

## Our team

![Alt text](./assets/image-2.png) 
![Alt text](./assets/image.png)
![Alt text](./assets/image-1.png)

## Screenshots

![Alt text](./assets/image-12.png) 
![Alt text](./assets/image-13.png)
![Alt text](./assets/image-4.png) 
![Alt text](./assets/image-11.png)
![Alt text](./assets/image-5.png) 
![Alt text](./assets/image-6.png)
![Alt text](./assets/image-7.png) 
![Alt text](./assets/image-8.png)
![Alt text](./assets/image-9.png) 
![Alt text](./assets/image-10.png)
