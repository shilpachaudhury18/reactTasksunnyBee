import React from "react";
import PropTypes from "prop-types";
import veggies from "../../../../images/vegis_des.jpg";
import fruit from "../../../../images/fruitsdes1.jpeg";
import groceries from "../../../../images/groce_des.jpg";

const CategoryDescription = ({ title, description }) => {
  return (
    <div className="description_background">
      <div className="row">
        <div className="col-lg-4 description_img">
          <img
            className="rounded-circle"
            src={veggies}
            alt="veg"
            width="120"
            height="120"
          />
          <span className="description_span_right">
            {" "}
            <h2>{title.veggies}</h2>
            <p>{description.veggies}</p>
          </span>
        </div>
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src={fruit}
            alt="veg"
            width="120"
            height="120"
          />
          <span className="description_span_right">
            {" "}
            <h2>{title.fruits}</h2>
            <p>{description.fruits}</p>
          </span>
        </div>
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src={groceries}
            alt="veg"
            width="120"
            height="120"
          />
          <span className="description_span_right">
            {" "}
            <h2>{title.groceries}</h2>
            <p>{description.groceries}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

CategoryDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryDescription;
