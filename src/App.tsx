import { Suspense, useState } from "react";
import { Header } from "./components/Header";
import { useProducts } from "./Hooks/useFetchData";
import { StarRating } from "./components/StarRating";
export type Category =
    | "men's clothing"
    | "jewelery"
    | "electronics"
    | "women's clothing"
    | "all";
function App() {
    const { data, error, isLoading, categories } = useProducts("welcome");
    const [activeCategory, setActiveCategory] = useState<Category>();

    let filteredProducts = data;

    function handleFilteringWithCategory(category: Category) {
        setActiveCategory(category);
        if (category === "all") {
            filteredProducts = data;
        } else {
            filteredProducts = data.filter((p) => p.category === category);
        }

        console.log(filteredProducts);
    }

    return (
        <div className="min-h-screen bg-bg">
            <Header productCount={data?.length ?? 0} />

            <main className="mx-auto max-w-6xl px-4 py-6">
                {/* Categories */}
                <div className="mb-6">
                    <div className="scroll-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                        {categories.map((category) => {
                            const isActive = category === activeCategory;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        handleFilteringWithCategory(category)
                                    }
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
                </div>

                {isLoading && (
                    <div className="min-h-screen text-center content-center">
                        Loading Page ...
                    </div>
                )}

                {!isLoading && error && <div>Something went wrong</div>}

                {/* Products */}
                {!isLoading && !error && filteredProducts.length > 0 && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => {
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
                                        <p className="text-ink">
                                            {product.title}
                                        </p>
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
                )}
            </main>
        </div>
    );
}

export default App;
