"use server";

import Product from "@/database/models/product.model";
import { connectToDatabase } from "../mongoose";
import { CreateProductParams, GetAllProductsParams } from "./shared.types";

// CREATE PRODUCT
export async function createProduct(productData: CreateProductParams) {
  try {
    connectToDatabase();
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Get all Products
export async function getAllProducts(params: GetAllProductsParams) {
  try {
    connectToDatabase();

    const products = await Product.find({}).sort({ createdAt: -1 });

    return { products };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
