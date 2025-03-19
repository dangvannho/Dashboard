import StarIcon from "../icon/star-icon";
import ProductItem from "@/components/common/product-item";
const products = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: "$120.00",
    reviews: 131,
    rating: 4,
  },
  {
    id: 2,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
  },
  {
    id: 3,
    name: "Apple Watch Series 4",
    price: "$120.00",
    reviews: 131,
    rating: 4.5,
  },
];

export const renderStars = (rating: number) => {
  return [...Array(5)].map((_, index) => (
    <StarIcon
      key={index}
      className={`w-4 h-4 ${
        index < rating ? "text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
};

const ListProduct = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-[100%]">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            renderStars={renderStars}
          />
        ))}
      </div>
    </>
  );
};

export default ListProduct;
