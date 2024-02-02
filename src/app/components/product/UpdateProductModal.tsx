"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type Props = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateProductModal = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const OrgNameList = [
    {"id": 1, "name": "Tech Innovators Inc"},
    {"id": 2, "name": "Global Solutions Co."},
    {"id": 3, "name": "Creative Minds Group"},
    {"id": 4, "name": "Data Dynamics Ltd"},
    {"id": 5, "name": "Infinite Innovations Corporation"},
    {"id": 6, "name": "Web Wizards Enterprises"},
    {"id": 7, "name": "Future Systems Ltd"},
    {"id": 8, "name": "Digital Ventures LLC"},
    {"id": 9, "name": "CodeCrafters Technologies"},
    {"id": 10, "name": "InnoSoft Solutions"}
  ]
  

  return (
    <Grid>
      <Button variant="contained" onClick={handleOpen}>
        {" "}
        Update{" "}
      </Button>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" pb={2}>
              Update Product Details
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={OrgNameList}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Organization" variant="standard" fullWidth/>}
            />
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
            <TextField id="standard-basic" label="Description" variant="standard" fullWidth/>
          </Box>
        </Modal>
      </div>
    </Grid>
  );
};

export default UpdateProductModal;
