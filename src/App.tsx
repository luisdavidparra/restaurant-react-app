import "./App.css";
import { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import NoMatch from "./components/NoMatch";
import ListOfProducts from "./components/LisOfProducts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import { fetchMenu } from "./services/menuData";
import { Product } from "./models/Product";

function App() {
  const [menuData, setMenuData] = useState<Product[]>([]);
  const [menuDataSearch, setMenuDataSearch] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const values = { menuData, menuDataSearch, isSearching, error };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMenu();
        setMenuData(data);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);

  const searchProduct = (e: string) => {
    const stringLower = e.toLowerCase();
    if (e === "" || e === "home") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
      const productsFilter = menuData.reduce((current: Product[], product) => {
        if (product.category === e || product.name.startsWith(stringLower)) {
          return [...current, product];
        } else {
          return current;
        }
      }, []);
      setMenuDataSearch(productsFilter);
    }
  };

  return (
      <Router>
        <div className="container App">
          <NavbarComponent searchProduct={searchProduct} />
          <Switch>
            <Route path="/" exact render={(props) => <ListOfProducts values={values} />} />
            <Route path="/pay">
              <ShoppingCart />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <div className="footer fixed-bottom text-center bg-dark text-white">Coopyright© McDonald's Company</div>
      </Router>
  );
}

export default App;
