const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Book = require('../models/Book')
const parser = require('../configs/cloudinary')
const User = require('../models/User')


router.get("/profile/:id", (req, res, next) => {
  let id = req.params.id; 
  Book.find({userId:id}).then(books=>{
    User.findById(id).then(u=>res.json({u, books}))
  })
})


router.get("/profile", (req, res, next) => {
  let id = req.user.id; 
  Book.find({userId:id}).then(books=>{
    User.findById(id).then(u=>res.json({u, books}))
  })
})

router.post('/saveBook', isLoggedIn, (req,res,next)=>{
  let book = new Book(req.body)
  book.userId = req.user._id
  book.save((err,doc)=>{
    res.json(doc)
  })
})

router.get('/getBooks', (req,res,next)=>{
  Book.find().then(books=>{
    res.json({books:books})
  })
})

router.delete('/delete/:id', (req,res,next)=>{
  Book.findByIdAndDelete(req.params.id).then(books=>{
    res.json({books:books})
  })
})

// isLoggedIn => make sure the user is connected
// parser.single('picture') => extract from the field 'picture' the file and define req.file (and req.file.url)
router.post('/add-profile-pic', isLoggedIn, parser.single('picture'), (req, res, next) => {
  console.log('whaysuppppppp', req.json, req.file)
  User.findByIdAndUpdate(req.user._id, { pictureUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
    .catch(err => next(err))
});



router.get('/allUsers', (req, res, next) => {
  console.log('all')
  User.find().then(all=>res.json({all}))
})

module.exports = router;
