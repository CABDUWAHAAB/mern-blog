const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

blogSchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });

module.exports = mongoose.model('Blog', blogSchema);
