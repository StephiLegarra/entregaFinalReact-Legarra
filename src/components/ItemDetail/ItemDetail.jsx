const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2> {product.title}</h2>
      <h2> {product.description}</h2>
      <h2> {product.price}</h2>
    </div>
  );
};

export default ItemDetail;
