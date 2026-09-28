import Html from "../Html/Html.jsx";
import "./Analysis.css";

const PRIORITY_ORDER = { imprescindible: 0, alta: 1, media: 2, baja: 3 };

// Radiografía de los parciales anteriores: cómo se arma la prueba y dónde están los puntos.
function Analysis({ data, onOpenTopic, onOpenExam }) {
    const a = data.analysis;
    const topicTitle = (t) => (data.topics.find((x) => x.id === t) || {}).title;
    const models = data.exams.filter((e) => e.kind === "modelo");
    const ranking = a.topics.slice().sort((x, y) => (PRIORITY_ORDER[x.priority] ?? 9) - (PRIORITY_ORDER[y.priority] ?? 9) || y.share - x.share);
    const maxShare = Math.max(...ranking.map((t) => t.share || 0), 1);

    return (
        <div className="analysis">
            <p className="lede">
                Análisis de {a.sources.length} pruebas anteriores. De acá salen el molde del parcial, el peso de cada tema y los parciales modelo.
            </p>
            <div className="sources">
                {a.sources.map((s, i) => (
                    <span key={i} className={`source ${s.kind}`} title={s.note || ""}>
                        {s.label}
                    </span>
                ))}
            </div>

            <section className="an-sec">
                <h3>Cómo es la prueba</h3>
                <Html className="read" html={a.format.summary} />
                <dl className="facts an-facts">
                    {a.format.rows.map(([k, v]) => (
                        <div key={k}>
                            <dt>{k}</dt>
                            <dd>{v}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="an-sec">
                <h3>Dónde están los puntos</h3>
                <p className="muted">Porcentaje aproximado del puntaje que se juega en cada tema, según lo que se preguntó.</p>
                <div className="ranking">
                    {ranking.map((t, i) => (
                        <div key={i} className="rank-row">
                            <div className="rank-head">
                                <span className={`prio ${t.priority}`}>{t.priority}</span>
                                <span className="rank-name">{t.name}</span>
                                <span className="rank-count mono">
                                    {t.count}/{t.of}
                                </span>
                            </div>
                            <div className="rank-bar">
                                <div className="rank-track">
                                    <div className="rank-fill" style={{ width: `${((t.share || 0) / maxShare) * 100}%` }} />
                                </div>
                                <span className="mono rank-pct">{t.share}%</span>
                                {t.t && topicTitle(t.t) && (
                                    <button className="go" onClick={() => onOpenTopic(t.t)}>
                                        Estudiar
                                    </button>
                                )}
                            </div>
                            {t.note && <Html className="rank-note" html={t.note} />}
                        </div>
                    ))}
                </div>
            </section>

            <section className="an-sec">
                <h3>El molde del parcial</h3>
                <p className="muted">Cada fila es una posición de la prueba, en el orden en que suele venir.</p>
                <div className="tscroll">
                    <table className="blueprint">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Qué te van a pedir</th>
                                <th>Frecuencia</th>
                                <th>Dificultad</th>
                                <th>Cómo resolverlo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {a.blueprint.map((b, i) => (
                                <tr key={i}>
                                    <td className="mono">{b.slot}</td>
                                    <td>
                                        <strong>{b.title}</strong>
                                        <Html className="bp-what" html={b.what} />
                                        {b.t && topicTitle(b.t) && (
                                            <button className="linkbtn" onClick={() => onOpenTopic(b.t)}>
                                                Tema: {topicTitle(b.t)}
                                            </button>
                                        )}
                                    </td>
                                    <td className="mono">{b.freq}</td>
                                    <td>
                                        <span className={`diff ${b.difficulty}`}>{b.difficulty}</span>
                                    </td>
                                    <td>
                                        <Html html={b.tip} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {models.length > 0 && (
                <section className="an-sec">
                    <h3>Parciales modelo</h3>
                    <p className="muted">Armados con este molde, con datos nuevos y la regla de puntaje real. Hacelos con reloj.</p>
                    <div className="row">
                        {models.map((e) => (
                            <button key={e.id} className="btn primary" onClick={() => onOpenExam(e.id)}>
                                {e.title}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            <section className="an-sec">
                <h3>Qué cambió en los últimos años</h3>
                <Html className="read" html={a.trends} />
            </section>
            <section className="an-sec">
                <h3>El resto del programa</h3>
                <Html className="read" html={a.beyond} />
            </section>
            <section className="an-sec">
                <h3>Estrategia el día de la prueba</h3>
                <Html className="read" html={a.strategy} />
            </section>
            <section className="an-sec">
                <h3>Cómo estudiar desde hoy</h3>
                <Html className="read" html={a.studyPlan} />
            </section>
        </div>
    );
}

export default Analysis;
