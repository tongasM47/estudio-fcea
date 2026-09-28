import { useEffect, useRef } from "react";
import { typeset } from "../../lib/math.js";

// Muestra contenido HTML de los archivos de datos y renderiza sus fórmulas.
function Html({ html, className = "", as: Tag = "div", id }) {
    const ref = useRef(null);

    useEffect(() => {
        typeset(ref.current);
    }, [html]);

    return <Tag id={id} ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html || "" }} />;
}

export default Html;
