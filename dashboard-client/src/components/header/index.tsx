import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Dashboard</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Status
                </Link>
                <Link activeClassName={style.active} href="/config">
                    Config
                </Link>
            </nav>
        </header>
    );
};

export default Header;
