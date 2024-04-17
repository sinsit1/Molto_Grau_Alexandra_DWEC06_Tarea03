import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css'

import About from '../components/About';
import Error from '../components/Error';
import NavBar from '../components/NavBar';
import CocktailDetail from '../components/CocktailDetail';
import CocktailList from '../components/CocktailList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<CocktailList />} />
      <Route path="about" element={<About />} />
      <Route path="cocktail/:idCocktail" element={<CocktailDetail />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App({ routes }) {
  return <RouterProvider router={router} />;
}

export default App;
