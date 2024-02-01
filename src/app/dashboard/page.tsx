"use client"
import React from 'react'
import {
    CSSObject,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Theme,
  } from "@mui/material";
import styles from "./dashboard.module.css"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MuiDrawer from "@mui/material/Drawer";

const page = () => {
    const drawerWidth = 240;
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const drawerItems:any = 
      [ 
        // Admin Json 
        { title: "", link: "", icon:"", type:"A" },
        { title: "Organization", link: "/organization", icon:<ManageAccountsIcon /> },
        { title: "Produuct", link: "/product", icon:<ManageAccountsIcon />},

      
        // { title: "Quote Book", link: "/add-quote", icon:<RequestQuoteIcon />, type:"A" },
      
      
    ];
  
  
    const Drawer = styled(MuiDrawer, {
      shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      height:"90%",
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
    }));
  
    const closedMixin = (theme: Theme): CSSObject => ({
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflow: "hidden",
      overflowY: "scroll",
      height:"100%",
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    });
  
    const openedMixin = (theme: Theme): CSSObject => ({
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      height:"100%",
      overflow: "scroll",
    });
  return (
    <>
    <CssBaseline />
    <Drawer
      variant="permanent"
      sx={{ zIndex: "1 !important" , top:'60px !important' }}
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseOut={handleDrawerClose}
    >
      <List>
        {drawerItems.map((text:any, index:any) => (
          <ListItem key={text.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href={text.link}
              onClick={handleDrawerClose}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </>
  )
}

export default page