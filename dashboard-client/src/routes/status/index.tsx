import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Status: FunctionalComponent = () => {
    return (
        <div class={style.status}>
            <h1>Status</h1>
            <p>There will be status and logs here? maybe can arpscan? idk yet.</p>
        </div>
    );
};

export default Status;
