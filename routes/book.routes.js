// routes/book.routes.js (Version 2 - Secured)

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

const isAuth = require('../middleware/auth.middleware');

router.use(isAuth);

router.get('/', bookController.getAllBooks);

router.get('/new', bookController.showCreateForm);

router.get('/search', bookController.searchBooks);

router.get('/edit/:id', bookController.showEditForm);

router.post('/create', bookController.createBook);

router.post('/update/:id', bookController.updateBook);

router.post('/delete/:id', bookController.deleteBook);

module.exports = router;