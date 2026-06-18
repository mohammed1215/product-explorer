import { useEffect, useState } from "react";
import type { Category } from "../App";
import { getCategories } from "../utils/getUniqueCategories";

export interface Product {
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
    const [retryTrigger, setRetryTrigger] = useState(0);
    useEffect(() => {
        async function FetchProducts() {
            console.log({ url });
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data: Product[] = await res.json();

                setData(data);
                setError(null);
                setCategories(getCategories(data));
            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        }

        FetchProducts();
    }, [retryTrigger]);

    function RetryFetching() {
        setRetryTrigger((prev) => prev + 1);
    }

    return { data, isLoading, error, categories, setData, RetryFetching };
};
