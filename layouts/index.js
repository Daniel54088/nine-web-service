import React from "react";

import ResponsiveAppBar from "../components/public/ResponsiveAppBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />

      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
