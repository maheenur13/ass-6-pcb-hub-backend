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
exports.CategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const category_model_1 = require("./category.model");
const addCategory = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield category_model_1.CategoryModel.findOne({
        categoryName: categoryData.categoryName,
    });
    if (isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Category already exists with this name');
    }
    return yield category_model_1.CategoryModel.create(Object.assign({}, categoryData));
});
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.CategoryModel.find().lean();
});
const getSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield category_model_1.CategoryModel.findById(id);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'No user exists!');
    }
    return yield category_model_1.CategoryModel.findById(id);
});
exports.CategoryService = {
    addCategory,
    getSingleCategory,
    getAllCategory,
};
