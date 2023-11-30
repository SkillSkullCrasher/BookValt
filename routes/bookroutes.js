
import express from 'express';
// import { BookModel } from './Models/bookModel.js';
import { BookModel } from '../Models/bookModel.js';
import mongoose, { mongo } from 'mongoose';
// mongo
const router=express.Router()

//add new book
router.post('/',async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            console.log("insufficient data");
            return res.status(400).send({message:'send all req fields: ti,au,py'});
           
        }
        else{
            const newBook={
                title:req.body.title,
                author:req.body.author,
                publishYear:req.body.publishYear
            };
            const book=await BookModel.create(newBook);
            console.log("good data");
            return res.status(201).send(book);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

//display all
router.get('/',async(req,res)=>{
    try {
        const books=await BookModel.find({});
        return res.status(200).json({
            count:books.length,
            data:books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

//display by id
router.get('/:id', async (req, res) => {
    try {
        // const { id } = req.params; // Get the ID from request params directly
        // console.log(id);
      
        // // Assuming you have a BookModel defined with Mongoose
      
        // // const objectIdString = new mongoose.Types.ObjectId(id); // Convert the string ID to an ObjectId
        // const book = await BookModel.findById(id);// Use the ID for querying
        const { id } = req.params;
        // console.log(id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid book ID' });
        }
        // console.log(id);
        const book = await BookModel.findById(id);
        // console.log();
        if (!book) {
            return res.status(404).json({ message: 'No such book found' });
        } else {
            return res.status(200).json(book);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});







//update a book details by id
router.put('/:id',async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
          return  res.status(400).send({
                message:'Send all the required details',
            })
        }
        else{
            const {id}=req.params;
            const book=await BookModel.findByIdAndUpdate(id,req.body);
            if(!book){
               return res.status(404).send({message:'No such Book found'});
            }
            else{
              return  res.status(200).send({message:"Updated Successfully"});
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})


//del a book by id
router.delete('/:id',async(req,res)=>{
    
    try {
        const {id}=req.params;
        const book=await BookModel.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message:'No such book found'});
        }
        else{
            return res.status(200).send({message:'Book deleted successfully'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }

})

export default router;