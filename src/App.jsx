import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { NAV } from "./data/subjects.js";
import PlanPage from "./pages/PlanPage/PlanPage.jsx";
import SubjectPage from "./pages/SubjectPage/SubjectPage.jsx";
import TodayPage from "./pages/TodayPage/TodayPage.jsx";

const TASK_TAB = { analysis: "analisis", topic: "temas", cards: "cards", quiz: "quiz", exam: "exams", errors: "errors", gen: "gen" };

function routeFromHash() {
    const h = (window.location.hash || "").slice(1);
    const view = h === "plan" || NAV.includes(h) ? h : "hoy";
    return { view, tab: "temas", exam: null, topic: null, cardTopic: "", quizTopic: "" };
}

function App() {
    const [route, setRoute] = useState(routeFromHash);

    useEffect(() => {
        const hash = route.view === "hoy" ? "" : `#${route.view}`;
        if (window.location.hash !== hash) window.history.replaceState(null, "", window.location.pathname + window.location.search + hash);
    }, [route.view]);

    const navigate = (view) => {
        setRoute({ view, tab: "temas", exam: null, topic: null, cardTopic: "", quizTopic: "" });
        window.scrollTo(0, 0);
    };

    // abre el recurso de una tarea del plan
    const openTask = (task) => {
        setRoute({
            view: task.s,
            tab: TASK_TAB[task.k] || "temas",
            exam: task.k === "exam" ? task.r : null,
            topic: task.k === "topic" ? task.r : null,
            cardTopic: "",
            quizTopic: "",
        });
        window.scrollTo(0, 0);
    };

    let page;
    if (route.view === "hoy") page = <TodayPage onNavigate={navigate} onOpenTask={openTask} />;
    else if (route.view === "plan") page = <PlanPage onOpenTask={openTask} />;
    else page = <SubjectPage route={route} onRoute={setRoute} />;

    return (
        <>
            <Header view={route.view} onNavigate={navigate} />
            <main className="wrap">
                {page}
                <Footer />
            </main>
        </>
    );
}

export default App;
