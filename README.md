# Book Management RESTful API

This API allows users to manage books using CRUD operations. It uses Node.js and MongoDB for data storage.

## API Endpoints

- POST /addbook: Create a new book.
- GET /getbooks: Retrieve a list of all books.
- GET /getbook/:id: Retrieve details of a specific book by its ID.
- PATCH /updatebook/:id: Update a book's details.
- DELETE /deletebook/:id: Delete a book.

## Set Up and Run Locally

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and update the connection string in `index.js`.
4. Start the server using `npm start`.
5. The API will be available at http://localhost:5000

