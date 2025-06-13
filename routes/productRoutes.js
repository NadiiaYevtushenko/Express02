import express from 'express';
import auth from '../middlewares/authMiddleware.js';
import adminOnly from '../middlewares/adminOnlyMiddleware.js';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';
import validateProduct from '../middlewares/validateProduct.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', auth, adminOnly, validateProduct, createProduct);
router.put('/:id', auth, adminOnly, validateProduct, updateProduct);

export default router;