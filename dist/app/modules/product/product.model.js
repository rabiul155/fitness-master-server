"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required.'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required.'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required.'],
        min: [0, 'Product price must be a positive number.'],
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Product rating must be a positive number.'],
        max: [5, 'Product rating must be less than 5.'],
    },
    image: {
        type: String,
        required: [true, 'Product mush have an image'],
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
productSchema.pre(/^find/, function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this instanceof mongoose_1.Query) {
            this.find({ isDeleted: { $ne: true } });
        }
        next();
    });
});
exports.ProductModel = mongoose_1.default.model('Product', productSchema);
