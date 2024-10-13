// Imports //
import mongoose from 'mongoose';
//== Imports ==//

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;