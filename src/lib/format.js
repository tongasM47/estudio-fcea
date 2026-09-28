export const LETTERS = "ABCDEFGH";

// 3.5 -> "3,5"
export function formatNumber(x) {
    return (Math.round(x * 100) / 100).toString().replace(".", ",");
}

// 26200 -> "26.200"
export function formatAmount(x) {
    return formatNumber(x).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// acepta "26.200", "26200", "1.234,5", "0,25", "$ 3.600"
export function parseAmount(value) {
    if (value == null) return NaN;
    let v = String(value).trim().replace(/\$|\s/g, "");
    if (!v) return NaN;
    if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(v)) v = v.replace(/\./g, "").replace(",", ".");
    else v = v.replace(",", ".");
    return parseFloat(v);
}

export function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
