import { Schema, models, model, Document } from 'mongoose';

export interface IProduct extends Document {
  category: string;
  title: string;
  price: number;
  short_details: string;
  long_details: string;
  image: string;
}

const ProductSchema = new Schema<IProduct>({
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  short_details: { type: String, required: true },
  long_details: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = models.Product || model<IProduct>('Product', ProductSchema);

export default Product;
