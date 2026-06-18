export const Button = ({
    children,
    className,
    onClick,
}: {
    children: any;
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button type="button" onClick={onClick} className={`${className}`}>
            {children}
        </button>
    );
};
