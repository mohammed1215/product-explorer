import type { Category } from "../App";
import type { Product } from "../Hooks/useFetchData";

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
    function handleFilteringWithCategory(category: Category) {
        setActiveCategory(category);
        if (category === "all") {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter((p) => p.category === category);
        }

        console.log(filteredProducts);
    }

    return (
        <div className="scroll-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => handleFilteringWithCategory(category)}
                        className={`shrink-0 cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                            isActive
                                ? "border-ink bg-ink text-white"
                                : "border-border bg-surface text-muted hover:border-ink/30 hover:text-ink"
                        }`}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};
