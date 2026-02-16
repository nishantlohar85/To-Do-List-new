type ButtonProps = {
    children: string;
    buttonType?: string;
}

function Button ({buttonType, children }: ButtonProps) {
    return(
        <button className={`h-[2.8rem] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${buttonType === "secondary" ? "opacity-85" : ""}`} type="submit">{children}</button>
    );
}
export default Button