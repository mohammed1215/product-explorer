import type { Category } from "../App";
import type { Product } from "../Hooks/useProducts";

export const filterProducts = (
    activeCategory: Category | "",
    searchQuery: string,
    data: Product[],
) => {
    const newQuery = searchQuery.trim().toLowerCase();

    let filteredProducts = data?.filter((p) => {
        const categoryMatches =
            p.category === activeCategory ||
            activeCategory === "all" ||
            activeCategory === "";

        const searchMatches =
            newQuery === "" ||
            p.title.toLowerCase().includes(newQuery) ||
            p.description.toLowerCase().includes(newQuery);

        return categoryMatches && searchMatches;
    });

    return filteredProducts;
};
