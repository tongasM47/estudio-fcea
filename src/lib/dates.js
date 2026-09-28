// Fechas en hora de Montevideo (UTC-3), como texto "AAAA-MM-DD".
const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export function todayStr() {
    return new Date(Date.now() - 3 * 3600e3).toISOString().slice(0, 10);
}

export function addDays(day, n) {
    const t = new Date(day + "T12:00:00Z");
    t.setUTCDate(t.getUTCDate() + n);
    return t.toISOString().slice(0, 10);
}

export function diffDays(from, to) {
    return Math.round((new Date(to + "T12:00:00Z") - new Date(from + "T12:00:00Z")) / 864e5);
}

export function formatDay(day) {
    const t = new Date(day + "T12:00:00Z");
    return `${DAYS[t.getUTCDay()]} ${day.slice(8, 10)}/${day.slice(5, 7)}`;
}
