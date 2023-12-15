import "./index.css";
/*это пропсы: children, className, shadow */
export default function ListItem({children, imageSrc, title}) {
    return (
        <li className="list-item">
            {imageSrc && <strong className="list-item__title">{title}</strong>}
            <div className="list-item__content">{children}</div>
        </li>
    );
}