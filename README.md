Hi,

I have created a photo gallery website, and I'd like to provide instructions on how to run the code.

To run the code, follow these steps:

1. If you have both frontend and backend folders, open two terminals in VS Code.
   - In the first terminal, navigate to the backend folder:
     ```
     cd backend
     npm run dev
     ```
   - In the second terminal, navigate to the frontend folder:
     ```
     cd frontend
     npm start
     ```

2. Alternatively, if you open the backend or frontend separately:
   - If you open the backend first, run:
     ```
     cd backend
     npm run dev
     ```
   - If you open the frontend first, run:
     ```
     cd frontend
     npm start
     ```

Here's what I've accomplished in this assignment:

In the backend:
- I've created a Node.js server using Express.js to serve the frontend and handle API requests.
- I've set up routes for fetching data from a public API, using the Unsplash API.
- I've implemented error handling for API requests and responses.
- I've parsed and formatted the API data before sending it to the frontend.

In the frontend:
- I've built a React.js application that communicates with the Node.js backend.
- I've designed a user interface to display the data retrieved from the API.
- I've used React components and state management to update the UI when new data is fetched.
- I've provided a clean and user-friendly design, using plain CSS without any CSS frameworks.

Optional features:
- I've added search functionality, allowing users to search for photos.
- I've implemented pagination features to navigate through the photo gallery.

I chose not to include unit tests because my primary focus was on core functionality and user experience. However, I recognize the importance of unit tests and am open to using them in more complex scenarios.

Please feel free to review my assignment and provide feedback. 

Thank you!
