const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Book = require('../models/Book')


router.get("/whatever", (req, res, next) => {
  console.log('in whatever',req.user)
  res.json({user:req.user})
})

router.post('/saveBook', (req,res,next)=>{
  let book = new Book(req.body)
  book.save((err,doc)=>{
    res.json(doc)
  })
})

router.get('/getBooks', (req,res,next)=>{
  Book.find().then(books=>{
    res.json({books:books})
  })
})


module.exports = router;
