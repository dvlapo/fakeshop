import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(res.data));
      console.log(res.data);
    } catch (err) {
      console.log('Err', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('Products: ', products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
