import type { Category } from "../App";
import type { Product } from "../Hooks/useProducts";

//function to get the categories of the products
export function getCategories(data: Product[]): Category[] {
    const categoriesSet = new Set<Category>();
    data.map((product) => {
        categoriesSet.add(product.category);
    });
    console.log(categoriesSet);
    categoriesSet.add("all");
    return Array.from(categoriesSet).sort();
}
