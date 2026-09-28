// Renderiza las fórmulas LaTeX (\( ... \) y \[ ... \]) dentro de un elemento con MathJax.
export function typeset(element) {
    const run = () => {
        const mj = window.MathJax;
        if (!mj || !mj.typesetPromise || !element) return false;
        mj.typesetClear && mj.typesetClear([element]);
        mj.typesetPromise([element]).catch(() => {});
        return true;
    };
    if (run()) return;
    // MathJax todavía cargando: reintenta cuando esté listo
    let tries = 0;
    const timer = setInterval(() => {
        tries++;
        if (run() || tries > 40) clearInterval(timer);
    }, 250);
}
