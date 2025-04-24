import React from "react";
import { Link } from "react-router-dom";
import style from './Four04.module.css'
const Four04 = () => {
  return (
    <>
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-12 mt-5 pt-5">
                <h1 className="font-weight-bold">
                  <h2 className={style.h2}>404</h2>
                  <p className={style.p}>Oops! Page not found.</p>
                  <p>
                    <Link to="/">Go back home</Link>
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Four04;
