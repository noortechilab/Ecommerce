import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
