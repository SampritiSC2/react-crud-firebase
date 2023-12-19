import { Fragment } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RootLayout;
