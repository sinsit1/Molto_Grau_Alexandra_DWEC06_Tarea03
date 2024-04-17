import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CocktailCard from "./CocktailCard";
import Loading from "./Loading";

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function CocktailList() {
	const [cocktails, setCocktails] = useState([]);
	const [{ data, isLoading, isError }] = useFetch(API_URL);

	useEffect(() => {
		if (data) setCocktails(data.drinks);
	}, [data]);

	return <main>
		<section className="section">
			<h2 className="section-title">cocktails</h2>
			{
				!isLoading && !isError && cocktails &&
				<div className="cocktails-center">
					{cocktails.map(cocktail => <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />)}
				</div>
			}
			{isLoading && <Loading />}
		</section>
	</main>
}

export default CocktailList;

