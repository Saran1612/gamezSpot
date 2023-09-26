import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Global from "../../assests/ph_globe.svg";
import Logo from "../../assests/Mask group.svg";
import Account from "../../assests/Vector.svg";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const drawerWidth = 240;
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: -1,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{}}>
      <CssBaseline />
      <AppBar
        // position="fixed"
        className="header_appbar"
        sx={{
          background: "transparent",
          // ml: { sm: `${drawerWidth}px` },
          borderBottom: "1px solid #5B5969",
          boxShadow: "none",
          padding: "0px",
          position: "static",
        }}
      >
        <Toolbar sx={{}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                padding: "12px 0px",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginRight: "15px" }}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Poppins ,sans-serif",
                      lineHeight: "24px",
                      fontWeight: "400",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Gaming Accessories
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ marginRight: "15px" }}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Poppins ,sans-serif",
                      lineHeight: "24px",
                      fontWeight: "400",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Pages
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ marginRight: "15px" }}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Poppins ,sans-serif",
                      lineHeight: "24px",
                      fontWeight: "400",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Blogs
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>
              </Grid>

              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  onClick={handleLogoClick}
                  style={{ cursor: "pointer" }}
                />
              </Grid>

              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginRight: "30px" }}>
                  <img
                    src={Account}
                    alt="account"
                    className="header-menu_icons"
                  />
                </Box>

                <Box sx={{ marginRight: "30px" }}>
                  <img
                    src={Global}
                    alt="global"
                    className="header-menu_icons"
                  />
                </Box>

                <Box sx={{ marginRight: "30px" }}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "#FFFFFF",
                      borderRadius: "0px 18px 0px 18px",
                      border: "1px solid #ABABAB",
                      fontFamily: "Poppins ,sans-serif",
                      lineHeight: "24px",
                      fontWeight: "400",
                      fontSize: "1rem",
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                    className="usd_text"
                  >
                    USD
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ display: "flex", marginRight: "30px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "15px",
                    }}
                  >
                    <span className="my-cart_text">My Cart:</span>
                    <span className="my-cart-value_text">0.00USD</span>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "end" }}>
                    <IconButton aria-label="cart" onClick={handleCartClick}>
                      <StyledBadge
                        badgeContent={1}
                        color="secondary"
                        className="cart_icon"
                      >
                        <ShoppingCartIcon sx={{ color: "#fff" }} />
                      </StyledBadge>
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ borderTop: "1px solid #5B5969" }} />

            <Grid
              container
              spacing={2}
              sx={{
                padding: "16px 0px",
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // borderTop: "1px solid #5B5969",
                }}
              >
                <Search
                  className="header-search_bar"
                  sx={{
                    borderRadius: "0px 16px 0px 16px",
                    border: "1px solid #A0A0A4",
                  }}
                >
                  <SearchIconWrapper sx={{ color: "#FFFFFF" }}>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    className="search-bar_text"
                    placeholder="Search Product…"
                    inputProps={{ "aria-label": "search" }}
                    sx={{
                      fontFamily: "Poppins ,sans-serif",
                      lineHeight: "24px",
                      fontWeight: "400",
                      fontSize: "1rem",
                      color: "#FFFFFF",
                    }}
                  />
                </Search>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
