import { Header } from "./components/Header";
import { useProducts } from "./Hooks/useFetchData";
import { Categories } from "./components/Categories";
import { ProductsGrid } from "./components/ProductGrid";
import { useState } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { filterProducts } from "./utils/filterProducts";
import { ErrorState } from "./components/ErrorState";
import { EmptyState } from "./components/EmptyState";
export type Category =
    | "men's clothing"
    | "jewelery"
    | "electronics"
    | "women's clothing"
    | "all";
function App() {
    const { data, error, isLoading, categories, RetryFetching } =
        useProducts("welcome");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<Category | "">("all");

    let finalProducts = filterProducts(activeCategory, searchQuery, data);

    return (
        <div className="min-h-screen bg-bg">
            <Header
                productCount={data?.length ?? 0}
                setSearchQuery={setSearchQuery}
            />

            <main className="mx-auto max-w-6xl px-4 py-6 min-h-[calc(100vh_-_74px)]">
                {/* Categories */}
                <div className="mb-6">
                    <Categories
                        products={data}
                        filteredProducts={finalProducts}
                        categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />
                </div>

                {isLoading && (
                    <div className=" flex h-full justify-center items-center">
                        Loading Products...
                        <LoadingSpinner className="w-10 h-10" />
                    </div>
                )}

                {!isLoading && error && (
                    <ErrorState message={error} Retry={RetryFetching} />
                )}

                {!isLoading && !error && finalProducts.length === 0 && (
                    <EmptyState searchQuery={searchQuery} />
                )}
                {/* Products */}
                {!isLoading && !error && finalProducts.length > 0 && (
                    <ProductsGrid products={finalProducts} />
                )}
            </main>
        </div>
    );
}

export default App;
