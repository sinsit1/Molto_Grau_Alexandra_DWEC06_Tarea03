import { useNavigate } from "react-router-dom";

function Error() {

    const navigate = useNavigate();
    const goTo = (url) => navigate(url);

    return <section className="section cocktail-section">
        <h1 className="section-title">Ops! Lo sentimos pero la página que busca no está disponible</h1>
        <a className="btn btn-primary" onClick={() => goTo('/')}>back home</a>
    </section>
}

export default Error;