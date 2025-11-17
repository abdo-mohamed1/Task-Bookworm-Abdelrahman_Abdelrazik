// controllers/book.controller.js

const Book = require('../models/book.model');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        
        res.render('allBooks', { books: books });
    } catch (error) {
        res.send(error.message);
    }
};

exports.showCreateForm = (req, res) => {
    res.render('createBook'); 
};

exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        
        await newBook.save();
        
        res.redirect('/books');
    } catch (error) {
        res.send(error.message);
    }
};

exports.showEditForm = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        
        res.render('editBook', { book: book });
    } catch (error) {
        res.send(error.message);
    }
};

exports.updateBook = async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        
        res.redirect('/books');
    } catch (error) {
        res.send(error.message);
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        
        res.redirect('/books');
    } catch (error) {
        res.send(error.message);
    }
};

exports.searchBooks = async (req, res) => {
    try {
        const searchQuery = req.query.query;
        
        const books = await Book.find({
            $or: [
                { title: { $regex: searchQuery, $options: 'i' } },
                { author: { $regex: searchQuery, $options: 'i' } }
            ]
        });
        
        res.render('allBooks', { books: books });
    } catch (error) {
        res.send(error.message);
    }
};