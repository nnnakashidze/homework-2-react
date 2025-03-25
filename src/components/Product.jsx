const Product = ({ name, price, category }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      {category && <p>Category: {category}</p>}
    </div>
  );
};
export default Product;
