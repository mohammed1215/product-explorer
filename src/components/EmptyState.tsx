export function EmptyState({ searchQuery }: { searchQuery: string }) {
    return (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-6 py-16 text-center">
            <span className="font-display text-lg font-semibold text-ink">
                Nothing matches in the stockroom
            </span>
            <p className="max-w-sm text-sm text-muted">
                {searchQuery
                    ? `No products match "${searchQuery}". Try a different term or category.`
                    : "Try a different category."}
            </p>
        </div>
    );
}
