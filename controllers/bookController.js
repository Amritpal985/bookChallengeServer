const express=require("express");
const Book=require("../model/bookSchema");

const addBook=async(req,res)=>{
    try {
        const {title,author,summary}=req.body;
        // console.log(title,author,summary);
        
        const find=await Book.find({title,author});
        // console.log(find);
         
        if(find.length!==0)
        {
            return res.json({"Message":"Book with same name already in the store"});
        }

        const book=new Book(req.body);
        // console.log(req.body);
        book.save();

        return res.status(200).json({"Success":"Book added successfully"});

    } catch (error) {
        return res.json({"Error":"Internal Server Error"});
    }
}

const getAllBooks=async(req,res)=>{
    try {
        const all_books=await Book.find();
        return res.json({"books":all_books});
    } catch (error) {
        return res.json({"Error":"Internal Server Error"});
    }
}

const getBook=async(req,res)=>{
    try {

        const book=await Book.findById(req.params.id);
        // console.log(req.params.id);
        if (!book) {
            return res.status(404).send();
          }
          return res.status(200).send(book);
        
    } catch (error) {
        return res.json({"Error":"Internal Server Error"});
    }
}

const updateBook=async(req,res)=>{
    try {

        const {title,author}=req.body;
        
        const find=await Book.find({title,author});
         
        if(find.length!==0)
        {
            return res.json({"Message":"Book with same name already in the store"});
        }

        let book = await Book.findByIdAndUpdate(req.params.id, req.body);

        if (!book) {
            return res.status(404).send();
        }
        book=await Book.find({title,author});
        
        return res.send(book);
    } catch (error) {
        return res.json({"Error":"Internal Server Error"});
    }
}

const deleteBook=async(req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send();
        }
        return res.status(204).send();
    } catch (error) {
        return res.json({"Error":"Internal Server Error"});
    }
}

module.exports={addBook,getAllBooks,getBook,updateBook,deleteBook};