"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    categoryName: {
        unique: true,
        required: true,
        type: String,
    },
    categoryImage: {
        required: true,
        type: String,
    },
    // products: [
    //   {
    //     type: Types.ObjectId,
    //     ref: 'Product',
    //     required: true,
    //   },
    // ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.CategoryModel = (0, mongoose_1.model)('Category', categorySchema);
