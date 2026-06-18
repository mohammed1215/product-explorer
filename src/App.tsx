import { Header } from "./components/Header";
import { useProducts } from "./Hooks/useFetchData";
import { Categories } from "./components/Categories";
import { ProductsGrid } from "./components/ProductGrid";
export type Category =
    | "men's clothing"
    | "jewelery"
    | "electronics"
    | "women's clothing"
    | "all";
function App() {
    const { data, error, isLoading, categories } = useProducts("welcome");

    let filteredProducts = data;

    return (
        <div className="min-h-screen bg-bg">
            <Header productCount={data?.length ?? 0} />

            <main className="mx-auto max-w-6xl px-4 py-6">
                {/* Categories */}
                <div className="mb-6">
                    <Categories
                        products={data}
                        filteredProducts={filteredProducts}
                        categories={categories}
                    />
                </div>

                {isLoading && (
                    <div className="min-h-screen text-center content-center">
                        Loading Page ...
                    </div>
                )}

                {!isLoading && error && <div>Something went wrong</div>}

                {/* Products */}
                {!isLoading && !error && filteredProducts.length > 0 && (
                    <ProductsGrid products={filteredProducts} />
                )}
            </main>
        </div>
    );
}

export default App;
