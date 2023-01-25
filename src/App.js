import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestroDetails from "./RestroDetails";
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
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestroDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
