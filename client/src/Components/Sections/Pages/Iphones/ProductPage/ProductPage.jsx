import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../../Four04/Four04";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const { productParam } = useParams();
  //   console.log(productParam);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        // const res = await fetch("http://localhost:3003/iphones");
        const res = await fetch("/iphone.json");
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.Product_url === productParam
        );
        setProducts(singleProduct);
      } catch (err) {
        console.error("Error fetching products data:", err.message);
        
      }
    };
    getSingleProduct();
  }, [productParam]);

  console.log(products);

  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <br />
          <br />
          <br />

        
          {/* fallback rendering */}
          {products.length === 0 ? (
            <Four04 />
          ) : (
            products.map((product) => {
              let id = product.Product_url;
              let title = product.Name;
              let img = product.img;
              let Brief = product.Description;
              let StartPrice = product.Price;
              let MonthlyPlanPrice = product.Monthly_plan;

              return (
                <div key={id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <div className="title-wrapper">{title}</div>
                      <div className="product-brief font-weight-bold fs-2">
                        {Brief}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className="col-sm-12 col-md-6 my-auto">
                      <div className="starting-price fs-3 font-weight-semibold">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price fs-4">
                        {MonthlyPlanPrice}
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="product-image">
                        <img src={img} alt="product" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
