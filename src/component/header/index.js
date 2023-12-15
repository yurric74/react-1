//подключение стилей и картинки
import "./index.css";

import logo from "./logo.svg";
//создаём  функию, которая является компонентом
export default function Header() {
//возвращаем наш header с картинкой
    return (
        <header className="header">
            <img src={logo} alt="Logo" height={32} />
        </header>
    );
}