import CardComponent from "./CardComponent";
import { Product } from "../models/Product";

interface Values {
  menuData: Product[];
  menuDataSearch: Product[];
  isSearching: boolean;
  error: any;
}

const LisOfProducts = ({ values: { menuData, menuDataSearch, isSearching, error } }: { values: Values }) => {
  return (
    <div className="row">
      {error ? (
        <h4>There was an error</h4>
      ) : !isSearching ? (
        menuData.map((product) => <CardComponent product={product} key={product.id} />)
      ) : menuDataSearch.length > 0 ? (
        menuDataSearch.map((product) => <CardComponent product={product} key={product.id} />)
      ) : (
        <h4 className="mt-4">Sorry, couldn't find products</h4>
      )}
    </div>
  );
};

export default LisOfProducts;
