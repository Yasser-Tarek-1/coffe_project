import { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import {
  getProduct,
  getSupplimetaries,
  clearModalData,
} from "../../store/slices/modalSlice";
import {
  useGetProductsQuery,
  useGetSupplimetariesQuery,
} from "../../store/services/products";
// Data Filtering
import {
  getProductSupplimetariesHandler,
  getProductHandler,
} from "../../dataFiltering";
// Components
import ProductsViewOne from "./ProductsView/ProductsViewOne";
import ProductsViewTwo from "./ProductsView/ProductsViewTwo";
import ProductModal from "./ProductModal";

const Products = ({ toggle }) => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const { data: supplimetariesData } = useGetSupplimetariesQuery();
  const [isOpen, setIsOpen] = useState(false);
  let dispatch = useDispatch();

  // open Modal and send to store product and product Supplimetaries
  const openModalHandler = (id) => {
    let supplimetaries = getProductSupplimetariesHandler(
      id,
      supplimetariesData
    );
    let product = getProductHandler(id, data);
    dispatch(getProduct(product));
    dispatch(getSupplimetaries(supplimetaries));
    setIsOpen(true);
  };

  // close modal
  const closeModalHandler = () => {
    dispatch(clearModalData());
    setIsOpen(false);
  };

  return (
    <>
      <ProductModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
      {!isLoading && isSuccess && (
        <div className="mt-8">
          {toggle ? (
            <div className="w-full h-full flex flex-wrap gap-2 xs:gap-4">
              {data?.map(({ id, ...items }) => {
                return (
                  <ProductsViewOne
                    key={id}
                    id={id}
                    {...items}
                    onClick={() => openModalHandler(id)}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-[18px]">
              {data?.map(({ id, ...items }) => {
                return (
                  <ProductsViewTwo
                    key={id}
                    id={id}
                    {...items}
                    onClick={() => openModalHandler(id)}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
