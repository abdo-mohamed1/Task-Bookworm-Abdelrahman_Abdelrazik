// models/book.model.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"], 
        index: true 
    },
    author: {
        type: String,
        required: [true, "Author name is required"] 
    },
    genre: {
        type: String, 
    },
    pages: {
        type: Number
    }
}, {
    timestamps: true 
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;