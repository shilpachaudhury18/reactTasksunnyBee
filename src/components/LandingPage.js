import React from "react";
import NavBar from "./Header/NavBar";
import Carousal from "./BodyContents/Carousal/Carousal";
import Footer from "./Footer/Footer";
import Category from "./BodyContents/CategorySection/Category";
import CategoryDescription from "./BodyContents/CategorySection/CategoryDescription/CategoryDescription";

const LandingPage = () => {

  return (
    <div>
      <NavBar
        menuBar={{
          location: "Location",
          login: "Login/SignUp",
          cart: "Cart",
          storeLocation: "Store Location",
          home: "Home",
          aboutUs: "About Us",
          contactUs: "Contact Us",
          myAccount: "My Account",
        }}
      />
      <Carousal />
      <Category />
      <CategoryDescription
        title={{
          veggies: "Vegetables",
          fruits: "Fruits",
          groceries: "Groceries",
        }}
        description={{
          veggies: "Fresh and Frozen, better discounts",
          fruits: "Fresh, frozen and imported",
          groceries: "Newly mfg Days, Branded,discounts",
        }}
      />
      <Footer
        contactInfo={{
          contact: "080-23248484",
          email: "sunnybee@market.com",
          address: "Bangalore-560011",
        }}
        companyInfo={{
          about: "",
          info: "",
          career: "",
          store: "",
          policies: "",
        }}
      />
    </div>
  );
};

export default LandingPage;