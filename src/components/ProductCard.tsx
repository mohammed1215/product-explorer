import type { Product } from "../Hooks/useProducts";
import { Badge } from "./Badge";
import { StarRating } from "./StarRating";

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="border border-border p-3 rounded-lg relative ">
            <Badge price={product.price} />
            <div className="mb-3 flex h-36 items-center justify-center rounded-xl bg-bg p-3">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                />
            </div>
            <div>
                <span className="text-muted">{product.category}</span>
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
};
