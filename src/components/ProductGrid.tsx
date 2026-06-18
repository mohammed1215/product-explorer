import type { Product } from "../Hooks/useFetchData";
import { ProductCard } from "./ProductCard";

export const ProductsGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};
