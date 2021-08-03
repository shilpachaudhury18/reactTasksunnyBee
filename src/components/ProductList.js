import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import AddButton from "./BodyContents/Button/AddButton";

const ProductList = () => {
  const [products, setProducts] = useState({});
  const url = "https://test.sunnybee.in/Cron/productList";
  const [searchItem] = useState("");

  const fetchProductList = () => {
    axios
      .get(url)
      .then((response) => {
        const productList = response.data.product_list;
        setProducts(productList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const onAddToCart = (e) => {
    e.preventDefault();
    console.log("Added to Cart");
  };

  return (
    
      <div className="card categories-description-label">
      {Object.values(products)
        .filter((prod) => {
          if (searchItem === "") {
            return prod;
          } else if (
            prod.app_display_name
              .toLowerCase()
              .includes(searchItem.toLowerCase())
          ) {
            return prod;
          }
        })
        .map((prod) => (
          
            <span className="categories-description-label1">
              <h4>Label</h4>
              <img className="lavel_img" src={prod.image_url} alt="fruit" />
              <br />

              <p key={prod.id}>
                <strong>Name: </strong><br/> {prod.app_display_name}
              </p>
              <p className="ppname">
                <strong>Price: </strong>
                Rs.{prod.product_selling_price}
              </p>
              <AddButton btnName="Add" onClick={onAddToCart} />
            </span>
            ))}
          </div>
        
    
  );
};

export default ProductList;
