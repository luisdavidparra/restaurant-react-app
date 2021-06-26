import "./App.css";
import { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import NoMatch from "./components/NoMatch";
import ListOfProducts from "./components/LisOfProducts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import DataContextProvider from "./context/DataContext";
import { fetchMenu } from "./services/menuData";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [menuDataSearch, setMenuDataSearch] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMenu();
      setMenuData(data);
    };
    getData();
  }, []);

  const searchByCategory = (e) => {
    if (e === "home") {
      setIsSearching(false);
      return;
    }
    const productsFilter = menuData.reduce((current, product) => {
      if (product.category === e) {
        return [...current, product];
      } else {
        return current;
      }
    }, "");
    setIsSearching(true);
    setMenuDataSearch(productsFilter);
    console.log(menuDataSearch);
  };

  const searchByName = (e) => {
    if (e === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    const stringLower = e.toLowerCase();
    const productsFilter = menuData.reduce((current, product) => {
      if (product.name.startsWith(stringLower)) {
        return [...current, product];
      } else {
        return current;
      }
    }, "");
    setMenuDataSearch(productsFilter);
  };

  return (
    <DataContextProvider>
      <Router>
        <div className="container App">
          <NavbarComponent searchByName={searchByName} searchByCategory={searchByCategory} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ListOfProducts menuData={menuData} menuDataSearch={menuDataSearch} isSearching={isSearching} />
              )}
            />
            <Route path="/pay">
              <ShoppingCart />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <div class="footer fixed-bottom text-center bg-dark text-white">Coopyright© McDonald's Company</div>
      </Router>
    </DataContextProvider>
  );
}

export default App;
