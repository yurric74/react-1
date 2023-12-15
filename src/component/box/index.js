import "./index.css";
/*это пропсы: children, className, shadow */
export default function Box({children, className, shadow}) {
    return (
        <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
            {children}
        </div>
    );
}