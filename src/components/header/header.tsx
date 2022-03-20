import { useState } from "react";
import "./header.css";

const Header = () => {
    const [click, setClick] = useState(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                   Painel de Controle Arm MK2 Plus
                </div>
            </div>
        </div>
    );
};

export default Header;