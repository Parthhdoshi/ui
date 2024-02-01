import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid, Button } from '@mui/material';

const createData = (name:any, calories:any, fat:any, carbs:any, protein:any, orgName:any, orgLogo:any, gstNumber:any, orgAddress:any, industryType:any, cinNumber:any, regulatedBy:any, licenseType:any) => {
  return { name, calories, fat, carbs, protein, orgName, orgLogo, gstNumber, orgAddress, industryType, cinNumber, regulatedBy, licenseType };
};

const OrganizationTable = () => {
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Org 1', 'Logo 1', 'GST123', 'Address 1', 'Industry 1', 'CIN123', 'Regulator 1', 'License 1'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Org 2', 'Logo 2', 'GST456', 'Address 2', 'Industry 2', 'CIN456', 'Regulator 2', 'License 2'),
    createData('Eclair', 262, 16.0, 24, 6.0, 'Org 3', 'Logo 3', 'GST789', 'Address 3', 'Industry 3', 'CIN789', 'Regulator 3', 'License 3'),
    createData('Another Dessert', 200, 8.0, 30, 5.0, 'Org 4', 'Logo 4', 'GST111', 'Address 4', 'Industry 4', 'CIN111', 'Regulator 4', 'License 4'),
    createData('More Dessert', 180, 7.0, 28, 3.5, 'Org 5', 'Logo 5', 'GST222', 'Address 5', 'Industry 5', 'CIN222', 'Regulator 5', 'License 5'),
    // Add more rows as needed
  ];

  return (
    <Grid>
        <Grid style={{textAlign:"center"}}><span  style={{fontWeight:"700",fontSize:"25px"}}>Invest4Edu Pvt Ltd</span></Grid>
        <Grid style={{ display:"flex",justifyContent:"flex-end", paddingBottom:"5px"}}>
            <Button variant="contained">ADD</Button>
            </Grid>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{background:"#478697"}}>
          <TableRow style={{color:"#ffff"}}>
            <TableCell align='center'>Organization Name</TableCell>
            <TableCell align='center'>Organization Logo</TableCell>
            <TableCell align='center'>Gst Number</TableCell>
            <TableCell align='center'>Organization Address</TableCell>
            <TableCell align='center'>Type of Industry</TableCell>
            <TableCell align='center'>Cin_Number</TableCell>
            <TableCell align='center'>Regulated By</TableCell>
            <TableCell align='center'>Types of Licenses</TableCell>
            {/* Add more TableCell components for additional columns */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.orgName}</TableCell>
              <TableCell align="center">{row.orgLogo}</TableCell>
              <TableCell align="center">{row.gstNumber}</TableCell>
              <TableCell align="center">{row.orgAddress}</TableCell>
              <TableCell align="center">{row.industryType}</TableCell>
              <TableCell align="center">{row.cinNumber}</TableCell>
              <TableCell align="center">{row.regulatedBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
};

export default OrganizationTable;
