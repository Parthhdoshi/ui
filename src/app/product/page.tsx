import React from "react";
import Dashboard from "../dashboard/page";
import { Grid } from "@mui/material";
import ProductTable from "../components/product/ProductTable";

const page = () => {
  return (
    <main style={{ paddingTop: "50px" }}>
      <Dashboard />
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        sx={{ justifyContent: "space-evenly" }}
      >
        <p> welcome to product </p>
      </Grid>
      <Grid sx={{ m:10  }}>
        <ProductTable />
      </Grid>
    </main>
  );
};

export default page;
