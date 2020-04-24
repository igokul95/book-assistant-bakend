const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
    },
    read: {
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;