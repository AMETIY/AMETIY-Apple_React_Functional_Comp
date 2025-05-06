import React, { useEffect, useState } from "react";
import style from'./Iphone.module.css'
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      console.log("useEffect triggered");
      try {
        const res = await fetch("http://localhost:3003/iphones");
        // const res = await fetch("/iphone.json");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setProducts(data.products);
        setLoading(false)
      } catch (err) {
        console.error("Error fetching products data:", err.message);
      }finally{
        setLoading(false)
      }
    };
    getProducts();
  }, []);


  
  // let flip = true;
  return (
    <>
      
        <section className="internal-page-wrapper my-5 top-100">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <div className="title-wraper bold my-5">Iphones</div>
                <div className="brief-description">
                  The best for the brightest.
                </div>
              </div>
            </div>
            {loading ? (
              <div className="col-12">
              <div className="loading-text">🎥 Loading videos... Please wait!</div>
            </div>
            ):
            products?.map((product, index) => {
              console.log("Products:", product);
              // let order1 = 1;
              // let order2 = 2;

              // if (flip) {
              //   order1 = 2;
              //   order2 = 1;
              // }
              // flip = !flip;

              let id = product.Product_url;
              let title = product.Name;
              let img = product.img;
              let Brief = product.Description;
              let StartPrice = product.Price;
              let MonthlyPlanPrice = product.Monthly_plan;
              let productPage = "/iphone/" + id;

              return (
                <div
                  key={id}
                  className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
                >
                  <div className={`col-sm-12 col-md-6 my-auto order-${index % 2 === 0 ? '2' : '1'}`}>
                    <div className="product-title">{title}</div>
                    <div className="product-brief">{Brief}</div>
                    <div className="starting-price">{`Starting at ${StartPrice}`}</div>
                    <div className="monthly-price">{MonthlyPlanPrice}</div>
                    <div className={style['links-wrapper']}>
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? '1' : '2'}`}>
                    <div className="product-image">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      
    </>
  );
};

export default Iphone;