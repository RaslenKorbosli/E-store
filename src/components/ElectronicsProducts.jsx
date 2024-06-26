import storeData from '../dataApi';
import ProductsUI from './ui/ProductsUI';
const productData = storeData.filter(
  (item) => item.itemCategory === 'ELECTRONICS'
);

function electronicsProducts() {
  return <ProductsUI productData={productData} />;
}

export default electronicsProducts;
