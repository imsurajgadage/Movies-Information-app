import React from "react";
import "./style.scss";
import noResults from "../../assets/no-results.png";
import Image from "../../components/lazyLoadImage/Image";

const PageNotFound = () => {
  return (
    <div className="container">
      <Image src={noResults}  className="noResultImage"/>
    </div>
  );
};

export default PageNotFound;
