import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import ProductDisplay from "../ProductSection/ProductDisplay";

const Category = () => {
  const [chose, setChose] = useState(false);

  const handleCheckBox = (chose) => {
    setChose({ chose });
  };

  return (
    <div>
      <div className="col-md-12 categories_name_background">
        <div className="row">
          <div className="col-md-3">
            <div className="card card_background">
              <div class="card-title">Categories</div>
              <CheckBox
                label={[
                  {
                    id: 1,
                    name: "Fruits",
                  },
                  {
                    id: 2,
                    name: "Vegetables",
                  },
                  {
                    id: 3,
                    name: "Groceries",
                  },
                  {
                    id: 4,
                    name: "Spices",
                  },
                  {
                    id: 5,
                    name: "Eggs and Meat",
                  },
                ]}
                selected={chose}
                onChange={handleCheckBox}
              />
               
            </div>
          </div>

          <ProductDisplay  />
        </div>
      </div>
    </div>
  );
};

export default Category;
