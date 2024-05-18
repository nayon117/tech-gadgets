import Cards from "@/components/shared/Cards";

import { getAllProducts } from "@/lib/actions/product.action";

const ProductsPage = async () => {
  const result = await getAllProducts({});

  return (
    <section className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {result.products.map((product) => (
          <Cards key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default ProductsPage;
