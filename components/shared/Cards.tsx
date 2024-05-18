import Image from "next/image";

interface ProductProps {
  product: {
    category: string;
    title: string;
    price: number;
    short_details: string;
    long_details: string;
    image: string;
    _id: string;
  };
}

const Cards = ({ product }: ProductProps) => {
  return (
    <section className="my-12">
      <div className="mx-auto max-w-sm overflow-hidden rounded-md shadow-md hover:shadow-lg">
        <div className="relative">
          <Image
            src={product.image}
            alt="Product Image"
            width={500}
            height={500}
          />
          <div className="absolute right-0 top-0 m-2 rounded-md bg-red-500 px-2 py-1 text-sm font-medium text-white">
            SALE
          </div>
        </div>
        <div className="bg-gray-200 p-4">
          <h3 className="mb-2 text-lg font-medium">{product.title}</h3>
          <p className="mb-4 text-sm text-gray-600">
           {product.short_details}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">$19.99</span>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
