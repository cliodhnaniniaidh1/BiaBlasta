import * as React from "react";
import Link from "next/link";
import styles from "./Component.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const logo = "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/Bia+Blasta+Logo-2.png";
  const { user } = useUser();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <img src={logo} width={100} height={100} />
          <Link href='/'>Home</Link>
          <Link href='/pantry'>Search</Link>
          <Link href='/all-recipes'>Recipes</Link>
          {user ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} href="/account">
                  <Link href="/account">My account</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/api/auth/logout">Log Out</Link>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Link href="/api/auth/login">Login</Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}