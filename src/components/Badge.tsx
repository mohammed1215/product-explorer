export const Badge = ({ price }: { price: number }) => {
    return (
        <div className="absolute top-0 font-semibold -translate-y-1/2 -right-0 rotate-6 bg-[#1f9d55] text-sm w-18 h-6 content-center rounded-r-sm text-center text-white z-5">
            <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 border-r-#000 border-5 rounded-full"></span>
            ${price}
        </div>
    );
};
