import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const API_URL = (idC) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idC}`;
const NUM_MAX_INGRE = 15;

function CocktailDetail() {

	const navigate = useNavigate();
	const goTo = (url) => navigate(url);
	const ingredients = Array.from(Array(NUM_MAX_INGRE), (e, i) => i + 1)

	const { idCocktail } = useParams();
	const [cocktailDetail, setCocktailDetail] = useState(undefined);
	const [{ data, isLoading, isError }] = useFetch(idCocktail && API_URL(idCocktail));

	useEffect(() => {
		if (data && data?.drinks) {
			setCocktailDetail(data.drinks[0]);
		} else {
			setCocktailDetail(null); // no existe el cocktail, la API devuelve null y 200 en vez de 404 not found
		}
	}, [data]);

	return <section className="section cocktail-section">
		<a className="btn btn-primary" onClick={() => goTo('/')}>back home</a>

		{!isLoading && !isError && cocktailDetail &&
			<div>
				<h1 className="section-title">{cocktailDetail?.strDrink}</h1>
				{cocktailDetail?.strDrink && <div className="drink">
					<img src={cocktailDetail.strDrinkThumb} alt={cocktailDetail.strDrink} className="drink-detail" />
					<div className="drink-info">
						<p><span className="drink-data">name :</span> {cocktailDetail.strDrink}</p>
						<p><span className="drink-data">category :</span> {cocktailDetail.strCategory}</p>
						<p><span className="drink-data">info :</span> {cocktailDetail.strAlcoholic}</p>
						<p><span className="drink-data">glass :</span> {cocktailDetail.strGlass}</p>
						<p><span className="drink-data">instructons :</span> {cocktailDetail.strInstructions}</p>
						<p><span className="drink-data">ingredients :</span>
							{ingredients.map(index => {
								if (cocktailDetail['strIngredient' + index]) {
									return <span key={cocktailDetail['strIngredient' + index]}> {cocktailDetail['strIngredient' + index]}</span>
								}
							})}
						</p>
					</div>
				</div>
				}
			</div>
		}

		{isLoading && <Loading />}

		{cocktailDetail === null && !isLoading &&
			<h1 className="section-title">No disponemos de ese cocktail en la carta. <br /> Porfavor elige alguno del menu</h1>
		}

	</section>
}

export default CocktailDetail;