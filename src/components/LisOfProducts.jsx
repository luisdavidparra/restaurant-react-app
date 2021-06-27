import CardComponent from "./CardComponent";

const LisOfProducts = ({ values: { isSearching, menuData, menuDataSearch, error } }) => {
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
