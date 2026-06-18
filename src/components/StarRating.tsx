export function StarRating({ rate, count }: { rate: number; count: number }) {
    const fullStars = Math.round(rate);

    return (
        <div className="flex items-center gap-1.5">
            <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                        key={index}
                        viewBox="0 0 20 20"
                        className={`h-3.5 w-3.5 ${index < fullStars ? "fill-accent" : "fill-border"}`}
                    >
                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
                    </svg>
                ))}
            </div>
            <span className="text-xs text-muted">({count})</span>
        </div>
    );
}
