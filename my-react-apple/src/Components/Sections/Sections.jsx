import React from 'react'
import Alert from "./Alert/Alert"
import First from './First_Section/First'
import Second from './Second_Section/Second'
// import "./Common_Resource/css/bootstrap.css";
// import "./Common_Resource/css/styles.css";

const Sections = () => {
  return (
    <div>
        <Alert />
        <First />
        <Second />
    </div>
  )
}

export default Sections