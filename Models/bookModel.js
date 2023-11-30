import mongoose from 'mongoose';
const { Schema, ObjectId } = mongoose;

const BookSchema = Schema({
  id: {
    type: ObjectId
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishYear: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export const BookModel = mongoose.model('Book', BookSchema);
