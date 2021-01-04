import { FunctionalComponent, h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import * as style from "./style.css";

interface Props { }

const Config: FunctionalComponent<Props> = (props: Props) => {
    const [configString, setConfigString] = useState<string>('');

    useEffect(function componentDidMount() {
        fetch('http://localhost:3000/config', { method: 'GET' })
            .then(res => res.json())
            .then(json => setConfigString(JSON.stringify(json, null, 2)));
    }, []);

    const handleConfigChange: h.JSX.GenericEventHandler<HTMLTextAreaElement> = useCallback(event => {
        setConfigString((event.target as any).value);
    }, []);

    const updateSettings: h.JSX.MouseEventHandler<HTMLButtonElement> = useCallback(_ => {
        try {
            const parsedSettings = JSON.parse(configString);
            console.log(parsedSettings);
            fetch('http://localhost:3000/config',
                {
                    method: 'POST',
                    body: JSON.stringify(parsedSettings),
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(console.log);
        } catch (error) {
            console.error('Invalid JSON')
        }
    }, [configString]);

    return (
        <div class={style.config}>
            {/* {renderParsedConfig()} */}
            <textarea className={style.settingEditor} value={configString} onChange={handleConfigChange}></textarea>
            <button onClick={updateSettings}>{'Update Settings'}</button>
        </div>
    );
};

export default Config;
