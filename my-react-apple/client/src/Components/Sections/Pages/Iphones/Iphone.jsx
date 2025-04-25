import React, { useEffect, useState } from "react";
import style from'./Iphone.module.css'
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      console.log("useEffect triggered");
      try {
        const res = await fetch("http://localhost:3003/iphones");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
      }
    };
    getProducts();
  }, []);

  console.log(products);
  let flip = true;
  return (
    <>
      <div>
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
            {products.map((product) => {
              console.log("Products:", product);
              let order1 = 1;
              let order2 = 2;

              if (flip) {
                order1 = 2;
                order2 = 1;
              }
              flip = !flip;

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
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
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

                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className="product-image">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Iphone;

//     <div>
//         <section className="internal-page-wrapper">
//           <div className="container">
//             <div className="row h-100 align-items-center justify-content-center text-center">
//               <div className="col-12 mt-5 pt-5">
//                 <h1 className="font-weight-bold">Iphone's</h1>
//                 <div className="brief-description mb-5">
// The Best for the brightest.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="row justify-content-center text-center product-holder h-100">
//         <div className="">
//           <div className="product-title">{products.name}</div>
//           <div className="product-brief">{products.Description}</div>
//           <div className="starting-price">{`Starting at ${products.Price}`}</div>
//           <div className="monthly-price">{products.Monthly_plan}</div>
//           <div className="links-wrapper">
//             <ul>
//               <li>
//                 <Link to={`/iphone/${products}`}>Learn More</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className={`col-sm-12 col-md-6 order-${order2}`}>
//           <div className="product-image">
//             <img src={products.img} alt="product" />
//           </div>
//         </div>
//         {/* <section className="internal-page-wrapper">
//           <div className="container">
//             <div className="row h-100 align-items-center justify-content-center text-center">
//               <div className="col-12 mt-5 pt-5">
//                 <h1 className="font-weight-bold">Iphone Page</h1>
//               </div>
//             </div>
//           </div>
//         </section> */}
//       </div>
