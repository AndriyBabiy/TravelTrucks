import Filters from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";
import css from "./Catalog.module.css";
import { fetchProducts } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Catalog = () => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // const productsList = dispatch(useSelector(selectProducts));

  // useState(() => {
  //   const fetchProducts = async () => {
  //     setIsLoading(true);
  //   };
  // });

  return (
    <div className={css.container}>
      <Filters />
      <ProductList />
    </div>
  );
};

export default Catalog;
