
export interface CreateProductParams {
    category: string;
    title: string;
    price: number;
    short_details: string;
    long_details: string;
    image: string;
  }
  
  export interface UpdateProductParams {
    productId: string;
    updateData: Partial<CreateProductParams>;
    path: string;
  }
  
  export interface DeleteProductParams {
    productId: string;
  }
  
  export interface GetAllProductsParams {
    // You can add pagination and filtering params if needed
  }
  