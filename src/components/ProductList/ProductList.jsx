import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import css from "./ProductList.module.css";
import { selectProducts } from "../../redux/selectors";

function ProductList() {
  const products = useSelector(selectProducts);
  // const [isLoading, setIsLoading] = useState(false);
  // const [products, setProducts] = useState([]);
  // const products = [];

  // const dispatch = useDispatch();

  // const productsList = dispatch(useSelector(selectProducts));

  return (
    <div className={css.container}>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
