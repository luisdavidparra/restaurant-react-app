import CardComponent from "./CardComponent";

const LisOfProducts = ({ isSearching, menuData, menuDataSearch }) => {
  return (
    <div className="row">
      {!isSearching ? (
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
