const express=require("express");
const router=express.Router();
const {addBook,getAllBooks,getBook,updateBook,deleteBook}=require("../controllers/bookController");

// add a new book

router.post("/addbook",addBook);

// get all books

router.get("/getbooks",getAllBooks);

// view a book

router.get("/getbook/:id",getBook);

// update a book
router.patch("/updatebook/:id",updateBook);

// delete a book
router.delete("/deletebook/:id",deleteBook);

module.exports={router};