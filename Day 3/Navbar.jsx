import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { Scale } from "@mui/icons-material";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const CustomNavbarLink = styled('a')({
  color: '#000',
  fontWeight: 'bold',
  '&:hover': {
    color: '#1e2a5a',
    borderRadius: '5px',
  },
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "Login",
    to: "/login",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "transparent",
      }}
      elevation={0}
    >
      <StyledToolbar>
        {/* <Typography
                variant="h6"
                component="h2"

                >
                    HBSales
                </Typography> */}
        <img
          src={logo}
          alt=""
          width={100}
          height={100}
          style={{ transform: "scale(1.5)" }}
        />
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#000",
                    fontWeight: "600",
                    "&:hover": {
                      color: "#1e2a5a",
                      borderRadius: "5px",
                      color: "white"
                    },
                  }}
                > 
                  <CustomNavbarLink>{text}</CustomNavbarLink>
                  {/* <ListItemText primary={text} /> */}
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
