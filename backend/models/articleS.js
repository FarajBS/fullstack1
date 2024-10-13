//  Imports //
import mongoose from 'mongoose';
//==  Imports ==//

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);
export default Article;