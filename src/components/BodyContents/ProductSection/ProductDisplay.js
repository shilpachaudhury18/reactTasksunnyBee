import React, { useState } from "react";
import ProductList from "../../ProductList";
import Select from "../Select/Select";

const ProductDisplay = () => {
  const [selectFilter, setSelectFilter] = useState();
  const onHandleSelect = () => {
    setSelectFilter(selectFilter);
  };
  return (
    <div className="col-md-9">
      <div className="card card_background">
        <div className="row">
          <div className="col-md-3">
            <div className="card-title">Category Name</div>
          </div>
          <div className="col-md-3">
            <div className="card-title">
              {" "}
              <Select
                data={[
                  {
                    value: "asc to des",
                    label: "Asc to Des",
                  },
                  {
                    value: "des to asc",
                    label: "Des to Asc",
                  },
                  {
                    value: "low to high",
                    label: "Low to High",
                  },
                  {
                    value: "high to low",
                    label: "High to Low",
                  },
                ]}
                value={selectFilter}
                placeholder="Filter"
                onChange={onHandleSelect}
              ></Select>
            </div>
          </div>
        </div>
        <div className="card categories-description-label">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;