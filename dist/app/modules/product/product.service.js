"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const product_model_1 = require("./product.model");
const addProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield product_model_1.ProductModel.findOne({
        productName: productData.productName,
    });
    if (isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Product already exists with this title');
    }
    return (yield product_model_1.ProductModel.create(Object.assign({}, productData))).populate('category');
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.ProductModel.aggregate([
        { $sample: { size: 6 } },
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: 'category',
                as: 'category', // The name of the new field that will contain the populated data
            },
        },
    ]);
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield product_model_1.ProductModel.findById(id);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Product do not exist!');
    }
    return yield product_model_1.ProductModel.findById(id).populate('category');
});
const getProductsByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.ProductModel.find({ category: id }).populate('category');
});
exports.ProductService = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    getProductsByCategory,
};
