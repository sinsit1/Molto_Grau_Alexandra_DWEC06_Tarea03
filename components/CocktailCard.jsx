import { useNavigate } from "react-router-dom";

function CocktailCard({ cocktail }) {
    const navigate = useNavigate();
    const goToCocktailDetail = (idCocktail) => navigate(`/cocktail/${idCocktail}`);

    return <article className="cocktail">
        <div className="img-container"><img
            src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className="cocktail-footer">
            <h3>{cocktail.strDrink}</h3>
            <h4>{cocktail.strGlass}</h4>
            <p>{cocktail.strAlcoholic}</p>
            <a onClick={() => goToCocktailDetail(cocktail.idDrink)} className="btn btn-primary btn-details">details</a>
        </div>
    </article >
}

export default CocktailCard;

