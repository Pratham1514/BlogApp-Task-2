# **Blog App**

## **Overview**

This is a fully functional blog application developed as part of Task 2 for the Bharat Intern program. The app allows users to create, read, update, and delete blog posts. It is built using Node.js, Express.js, MongoDB, EJS, and Bootstrap.

## **Features**

- **Create Posts**: Users can create new blog posts with a title and content.
- **Read Posts**: View all blog posts on the homepage, with the ability to view individual posts in detail.
- **Update Posts**: Edit existing blog posts.
- **Delete Posts**: Remove posts that are no longer needed.
- **Responsive Design**: The app is fully responsive, thanks to Bootstrap, and works seamlessly across all devices.

## **Technologies Used**

- **Node.js**: JavaScript runtime environment used for server-side logic.
- **Express.js**: Web framework for Node.js, used for building the app’s server and routing.
- **MongoDB**: NoSQL database used to store blog posts.
- **EJS (Embedded JavaScript)**: Templating engine used to generate HTML pages dynamically.
- **Bootstrap**: Front-end framework used for responsive design and styling.

## **Installation**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Pratham1514/BlogApp-Task-2
    ```

2. **Navigate to the project directory**:
    ```bash
    cd BlogApp-Task-2
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up MongoDB**:
    - Make sure MongoDB is installed and running on your system.

5. **Start the application**:
    ```bash
    npm run blogapp
    ```

6. **Access the app**:
    - Open your browser and navigate to `http://localhost:3000`.

## **Usage**

- Visit the homepage to view all blog posts.
- Click on a post title to view the full post.
- Create a new blog post using the "Create Post" button.
- Edit or delete posts using the respective buttons on each post's page.

## **Project Structure**

- `server.js`: Main application file where the server is set up.
- `routes/`: Contains route files for handling requests.
- `views/`: EJS templates for rendering HTML pages.
- `models/`: Mongoose models for MongoDB collections.

## **Screenshots**

![Home Page](https://github.com/Pratham1514/BlogApp-Task-2/blob/main/images/Screenshot%202024-08-16%20151242.png)
![Create Post](https://github.com/Pratham1514/BlogApp-Task-2/blob/main/images/Screenshot%202024-08-16%20151304.png)
![View Post](https://github.com/Pratham1514/BlogApp-Task-2/blob/main/images/Screenshot%202024-08-16%20151330.png)

## **Contributing**

If you'd like to contribute to this project, feel free to submit a pull request. Please ensure your changes are well-documented and tested.
