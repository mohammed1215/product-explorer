import type { Category } from "../App";
import type { Product } from "../Hooks/useProducts";
import { Button } from "./Button";

export const Categories = ({
    products,
    categories,
    filteredProducts,
    setActiveCategory,
    activeCategory,
}: {
    products: Product[];
    filteredProducts: Product[];
    categories: Category[];
    setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
    activeCategory: Category | "";
}) => {
    return (
        <div className="scroll-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                    <Button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`shrink-0 cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                            isActive
                                ? "border-ink bg-ink text-white"
                                : "border-border bg-surface text-muted hover:border-ink/30 hover:text-ink"
                        }`}
                    >
                        {category}
                    </Button>
                );
            })}
        </div>
    );
};
