import { useState } from "react";

export const Header = ({ productCount }: { productCount: number }) => {
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState("");

    return (
        <header className="sticky top-0 z-10 border-b border-border bg-surface/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-3">
                    <h1 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                        Stockpile
                    </h1>
                    <span className="hidden text-sm text-muted sm:inline">
                        {productCount} {productCount === 1 ? "item" : "items"}
                    </span>
                </div>
                <label className="relative block w-full sm:w-72">
                    <span className="sr-only">Search products</span>
                    <svg
                        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search products…"
                        className="w-full rounded-full border border-border bg-surface py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                </label>
            </div>
        </header>
    );
};
