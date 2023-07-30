"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        ref: 'Category',
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['out of stock', 'in stock'],
        required: true,
    },
    avgRating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    keyFeatures: {
        type: [String],
        required: true,
    },
    reviews: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
