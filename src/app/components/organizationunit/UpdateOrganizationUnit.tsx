
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Autocomplete, Button, Grid, IconButton, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';

type Props = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateOrganizationUnit = () => {
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
        <IconButton
      style={{ position: 'absolute',fontSize:"18px" ,top: "8px", right: "5px"}}
      onClick={() => handleClose()}
    >
      <CloseIcon style={{fontSize:"18px"}} />
    </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" pb={2}>
            Update Organization Unit Details
          </Typography>
          <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={9} md={6} lg={3}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={OrgNameList}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Organization" variant="standard" fullWidth/>}
          />
              </Grid>
            <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
            <TextField id="standard-basic" label="Product Name" variant="standard" fullWidth />
              </Grid>
              </Grid>
                 <Grid  item xs={12} sm={9} md={12} lg={12} style={{textAlign:"center",paddingTop:"20px"}}>
                 <Button variant="contained">Upudate</Button>
                 </Grid>
        </Box>
      </Modal>
    </div>
  </Grid>
  )
}

export default UpdateOrganizationUnit