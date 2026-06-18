import { useEffect, useState } from "react";
import type { Category } from "../App";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export const useProducts = (url: string) => {
    const [data, setData] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    //function to get the categories of the products
    function getCategories(data: Product[]): Category[] {
        const categoriesSet = new Set<Category>();
        data.map((product) => {
            categoriesSet.add(product.category);
        });
        console.log(categoriesSet);
        categoriesSet.add("all");
        return Array.from(categoriesSet);
    }

    useEffect(() => {
        async function FetchProducts() {
            console.log({ url });
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data: Product[] = await res.json();

                setData(data);
                setCategories(getCategories(data));
            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        }

        FetchProducts();
    }, []);

    return { data, isLoading, error, categories, setData };
};
