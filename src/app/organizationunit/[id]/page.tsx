'use client'
import UpdateOrganizationUnit from "@/app/components/organizationunit/UpdateOrganizationUnit";
import UpdateProductModal from "@/app/components/product/UpdateProductModal";
import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {
  params: { id: string };
};

const page: FC<Props> = ({ params }) => {
  return (
    <Grid container justifyContent={"center"} padding={2}>
      <Grid item style={{textAlign:"center"}}>
        <Typography variant="h3"> {`Organization - ${params?.id}`} </Typography>
        <Typography variant="h6"> Org Name : XXXX </Typography>
        <Typography variant="h6"> Description : XXXX </Typography>
        <Grid p={3}>
     <UpdateOrganizationUnit/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default page;
