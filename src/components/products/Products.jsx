import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  getSupplimetaries,
  clearModalData,
} from "../../store/slices/modalSlice";
import { useGetProductsQuery } from "../../store/apis/products";
import { useGetSupplimetariesQuery } from "../../store/apis/supplimetaries";
// Data Filtering
import {
  getProductSupplimetariesHandler,
  getProductHandler,
} from "../../services";
// Components
import ProductModal from "./Modal/ProductModal";
import { allfilteredProducts } from "../../store/slices/filterDataSlice";
import { useTranslation } from "react-i18next";
import ProductItem from "./product/ProductItem";

const Products = ({ toggle }) => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const { data: supplimetariesData } = useGetSupplimetariesQuery();
  const {
    i18n: { language },
  } = useTranslation();
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

  // Filter Data Through Research
  const { name, category, filteredProducts } = useSelector(
    (state) => state.filterDataSlice
  );

  // setData
  useEffect(() => {
    dispatch(allfilteredProducts(data));
  }, [data, dispatch]);

  // Search by name & category
  useEffect(() => {
    if (category == "All" && name == null) {
      dispatch(allfilteredProducts(data));
    } else if (category != "All" && name == null) {
      let dataSearchedByCategory = data?.filter(({ en_category }) => {
        return en_category == category;
      });
      dispatch(allfilteredProducts(dataSearchedByCategory));
    }
    if (name) {
      let dataSearchedByName = data?.filter(({ ar_name, en_name }) => {
        return (
          ar_name?.includes(name) ||
          en_name?.toLowerCase()?.includes(name?.toLowerCase())
        );
      });
      dispatch(allfilteredProducts(dataSearchedByName));
    }
  }, [name, data, dispatch, category]);

  return (
    <>
      <ProductModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
      {!isLoading &&
        isSuccess &&
        (name && filteredProducts.length == 0 ? (
          <div className="mt-8 w-full">
            {language == "ar" ? (
              <div className="w-full">
                يبدو ان هذا المنتج{" "}
                <span className="text-primary">({name})</span> غير متوفر حاليا
              </div>
            ) : (
              <div className="w-full">
                It appears that this product{" "}
                <span className="text-primary">({name})</span> is currently
                unavailable
              </div>
            )}
          </div>
        ) : data.length == 0 ? (
          <div className="mt-8 w-full">
            {language == "ar" ? (
              <div className="w-full">لا يوجد منتجات حاليا</div>
            ) : (
              <div className="w-full">There are no products currently</div>
            )}
          </div>
        ) : (
          <div className="mt-8">
            {toggle ? (
              <div className="w-full h-full flex flex-wrap gap-2 xs:gap-4">
                {filteredProducts?.map(({ id, ...items }) => {
                  return (
                    <ProductItem
                      toggle={toggle}
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
                {filteredProducts?.map(({ id, ...items }) => {
                  return (
                    <ProductItem
                      toggle={toggle}
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
        ))}
    </>
  );
};

export default Products;
