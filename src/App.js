import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
const AppLayout = () => {
  return (
    /*
            1)Header
                - Title
                - Navbar
                - Cart
            2)Body
                - Searchbar
                - HotelList
                    - Card
                        - img
                        - name
                        - price
                        - rating 
            3)Footer
                - Links
                - CopyRight
        */
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
