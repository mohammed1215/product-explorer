import { Header } from "./components/Header";
import { useProducts } from "./Hooks/useFetchData";
import { Categories } from "./components/Categories";
import { ProductsGrid } from "./components/ProductGrid";
import { useState } from "react";
export type Category =
    | "men's clothing"
    | "jewelery"
    | "electronics"
    | "women's clothing"
    | "all";
function App() {
    const { data, error, isLoading, categories } = useProducts("welcome");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<Category | "">("");

    let filteredProducts =
        activeCategory === "" || activeCategory === "all"
            ? data
            : data.filter((p) => p.category === activeCategory);
    let searchedProducts =
        searchQuery === ""
            ? filteredProducts
            : filteredProducts.filter(
                  (p) =>
                      p.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                      p.description
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()),
              );

    return (
        <div className="min-h-screen bg-bg">
            <Header
                productCount={data?.length ?? 0}
                setSearchQuery={setSearchQuery}
            />

            <main className="mx-auto max-w-6xl px-4 py-6">
                {/* Categories */}
                <div className="mb-6">
                    <Categories
                        products={data}
                        filteredProducts={searchedProducts}
                        categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />
                </div>

                {isLoading && (
                    <div className="min-h-screen text-center content-center">
                        Loading Page ...
                    </div>
                )}

                {!isLoading && error && <div>Something went wrong</div>}

                {/* Products */}
                {!isLoading && !error && searchedProducts.length > 0 && (
                    <ProductsGrid products={searchedProducts} />
                )}
            </main>
        </div>
    );
}

export default App;
