export const ErrorState = ({
    message,
    Retry,
}: {
    message: string;
    Retry: () => void;
}) => {
    return (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-16 text-center">
            <span className="font-display text-lg font-semibold text-ink">
                Something went wrong
            </span>
            <span className="font-display text-lg font-semibold text-ink">
                The shelves didn't load
            </span>
            <p className="max-w-sm text-sm text-muted">{message}</p>
            <button
                type="button"
                onClick={Retry}
                className="mt-2 cursor-pointer rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
                Try again
            </button>
        </div>
    );
};
