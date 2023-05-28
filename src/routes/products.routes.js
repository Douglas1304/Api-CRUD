//contiene mis urls
import { Router } from "express";
import { UpdateProductsById, createProducts, deleteProductsById, getProducts, getProductsById, getTotalProducts } from "../controllers/products.controllers";

const router = Router()

router.get('/products', getProducts)

router.post('/products', createProducts)

router.get('/products/count',getTotalProducts)

router.get('/products/:id', getProductsById)

router.delete('/products/:id',deleteProductsById)

router.put('/products/:id',UpdateProductsById)


export default router