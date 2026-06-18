import type { Product } from "../Hooks/useFetchData";
import { StarRating } from "./StarRating";

export const ProductsGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
                return (
                    <div
                        key={product.id}
                        className="border border-border p-3 rounded-lg"
                    >
                        <div className="mb-3 flex h-36 items-center justify-center rounded-xl bg-bg p-3">
                            <img
                                src={product.image}
                                alt={product.title}
                                loading="lazy"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <span className="text-muted">
                                {product.category}
                            </span>
                            <p className="text-ink">{product.title}</p>
                            <div className="mt-3">
                                <StarRating
                                    rate={product.rating?.rate}
                                    count={product.rating?.count}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
