"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.post('/', category_controller_1.CategoryController.addCategory);
router.get('/', category_controller_1.CategoryController.getAllCategory);
router.get('/:id', category_controller_1.CategoryController.getSingleCategory);
exports.CategoryRoutes = router;
