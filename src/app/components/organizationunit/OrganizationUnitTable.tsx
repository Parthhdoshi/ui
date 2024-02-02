

"use client";
import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Autocomplete, Button, Grid, Modal, TextField } from "@mui/material";
import Link from "next/link";
import style from "styled-jsx/style";
import CloseIcon from '@mui/icons-material/Close';

interface Data {
  id: number;
  calories: string;
  fat: string;
  name: string;
  carbs:string;
  protein:string;
  orgName:string;
  orgLogo:string;
  gstNumber:string; 
  orgAddress:string;
  industryType:string;
  cinNumber:string;
  regulatedBy:string;
 licenseType:string;
}

function createData(
  id: number,
  name: string,
  calories: string,
  fat: string,
 carbs:any,
 protein:any,
 orgName:any,
 orgLogo:any,
 gstNumber:any, 
 orgAddress:any,
 industryType:any,
 cinNumber:any,
 regulatedBy:any,
licenseType:any
  
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    orgName,
    orgLogo,
    gstNumber, 
    orgAddress,
    industryType,
    cinNumber,
    regulatedBy,
   licenseType,
  };
}
const rows = [
  createData(1, "Organization 1", "Gst123", "Mumbai,India", "carbs1", "protein1", "OrgName1", "OrgLogo1", "GstNumber1", "OrgAddress1", "IndustryType1", "CinNumber1", "RegulatedBy1", "LicenseType1"),
  createData(2, "Organization 2", "Gst123", "Mumbai,India", "carbs2", "protein2", "OrgName2", "OrgLogo2", "GstNumber2", "OrgAddress2", "IndustryType2", "CinNumber2", "RegulatedBy2", "LicenseType2"),
  createData(3, "Organization 3", "Gst123", "Mumbai,India", "carbs3", "protein3", "OrgName3", "OrgLogo3", "GstNumber3", "OrgAddress3", "IndustryType3", "CinNumber3", "RegulatedBy3", "LicenseType3"),
  createData(4, "Organization 4", "Gst123", "Mumbai,India", "carbs4", "protein4", "OrgName4", "OrgLogo4", "GstNumber4", "OrgAddress4", "IndustryType4", "CinNumber4", "RegulatedBy4", "LicenseType4"),
  createData(5, "Organization 5", "Gst123", "Mumbai,India", "carbs5", "protein5", "OrgName5", "OrgLogo5", "GstNumber5", "OrgAddress5", "IndustryType5", "CinNumber5", "RegulatedBy5", "LicenseType5"),
  // Add more entries as needed
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Organization Name",
  },
  {
    id: "gstNumber",
    numeric: true,
    disablePadding: false,
    label: "gst number",
  },
  {
    id: "orgAddress",
    numeric: true,
    disablePadding: false,
    label: "Organization Address",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Organization logo",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Type of Industry ",
  },
  {
    id: "cinNumber",
    numeric: true,
    disablePadding: false,
    label: "Cin Number ",
  },
  {
    id: "regulatedBy",
    numeric: true,
    disablePadding: false,
    label: "Regulated By",
  },
  {
    id: "licenseType",
    numeric: true,
    disablePadding: false,
    label: "Type Of license",
  },
  
  
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };


  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">Organization Unit</Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function OrganizationUnitTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{ width: "100%" }}>
             <Grid style={{textAlign:"center"}}><span  style={{fontWeight:"700",fontSize:"25px"}}>welcome Organization Unit</span></Grid>
        <Grid style={{ display:"flex",justifyContent:"flex-end", paddingBottom:"5px"}}>
            <Button  onClick={handleOpen}  variant="contained" >ADD</Button>            
            </Grid>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer  >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell  component="th" id={labelId} scope="row" padding="none">{row.name}</TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.orgName}</TableCell>
                    <TableCell align="center">{row.cinNumber}</TableCell>
                    <TableCell align="center">{row.orgAddress}</TableCell>
                    <TableCell align="center">
                      <Link href={`/organizationunit/${row.id}`}><Button variant="contained"> View</Button></Link>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
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
        <div style={{textAlign:'center',paddingBottom:"10px"}}>
        <h2>Creat Organization Unit</h2>
        </div>
    
        <form >
              <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Organization Unit Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Organization Type"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={OrgNameList}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Organization Unit" variant="standard" fullWidth/>}
          />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Organization Description"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={OrgNameList}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Risk Organization" variant="standard" fullWidth/>}
          />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Compliance training "
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="products/systems"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="processnotes"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Board reporting"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Assessment of level"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Likelihood Rating"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={9} md={6} lg={3}>
                <TextField
                  id="outlined-basic"
                  label="Likelihood Score"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              </Grid>
              <Grid mt={3} style={{textAlign:"center"}}>
              <Button variant="contained">Submit</Button>
              </Grid>
        </form>
        </Box>
      </Modal>

    </Box>
  );
}

