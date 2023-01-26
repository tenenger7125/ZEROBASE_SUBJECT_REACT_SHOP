import Products from "../../common/products/Products";

const ProductPreview = ({ data, title }: ProductItem) => {
  const limit = 4;

  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold text-black dark:text-gray-100">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        <Products data={data} limit={limit}></Products>
      </div>
    </section>
  );
};
export default ProductPreview;
