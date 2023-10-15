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
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Logo from "../../assests/Mask group.svg";
import Account from "../../assests/Vector.svg";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";
import ProdOne from "../../assests/Group 1000002799.png";
import ProdTwo from "../../assests/Group 1000002774.png";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ReusableButton from "../Button/Button";

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

  // const handleCartClick = () => {
  //   navigate("/billing");
  // };

  const handleLogoClick = () => {
    navigate("/home");
  };

  const Data = [
    {
      id: 1,
      name: "Game Triger Finger New",
      price: "$12.00",
      quality: "1",
      img: ProdOne,
    },
    {
      id: 2,
      name: "Android Smart Watch XAD0",
      price: "$59.00",
      quality: "1",
      img: ProdTwo,
    },
  ];

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
        // padding: "20px",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // paddingBottom: "14px",
          padding: "16px",
        }}
      >
        <span className="shoping-cart-header_text">SHOPPING CART</span>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(anchor, false)}
          sx={{
            fontSize: "1.5rem",
          }}
        >
          <CloseIcon fontSize="1rem" />
        </IconButton>
      </Box>

      <Divider sx={{ borderTop: "1px solid #D2D2D2" }} />

      <List className="header-drawer_list">
        {Data.map((items) => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={items.img}
                className="product_avatar"
              />
            </ListItemAvatar>
            <ListItemText
              className="list-primary_text"
              primary={items.name}
              secondary={
                <span className="list-secondary_text">
                  {`${items.quality}*${items.price}`}
                </span>
              }
            />
          </ListItem>
        ))}
      </List>

      {/* <Divider /> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderTop: "1px dotted #DDDDDD",
          borderBottom: "1px dotted #DDDDDD",
        }}
      >
        <span className="subtotal_text">Subtotal:</span>
        <span className="subtotal_price-text">$71.90</span>
      </Box>

      <Box className="sideDrawer-holder">
        <ReusableButton
          buttonName="VIEW CART"
          size="large"
          className="viewCart_button"
          href="/cart"
          // onClick={handleLoginClick}
        />

        <ReusableButton
          buttonName="CHECKOUT"
          size="large"
          className="checkout_button"
          // onClick={handleLoginClick}
        />
      </Box>
    </Box>
  );

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box sx={{ marginRight: "15px" }}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "#ffffff",
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
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box sx={{ marginRight: "15px" }}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "#ffffff",
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
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box sx={{ marginRight: "15px" }}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "#ffffff",
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
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box sx={{ marginRight: "30px", display: "flex" }}>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <img
                    src={Account}
                    alt="account"
                    className="header-menu_icons"
                  />
                </Link>
              </Box>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box sx={{ marginRight: "30px" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <LanguageOutlinedIcon
                    sx={{ color: "#fff", fontSize: "1.8rem" }}
                  />
                </Link>
              </Box>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
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
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem> */}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
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
                  <IconButton
                    aria-label="cart"
                    // onClick={handleCartClick
                    onClick={toggleDrawer("right", true)}
                  >
                    <StyledBadge
                      badgeContent={1}
                      color="secondary"
                      className="cart_icon"
                    >
                      <ShoppingCartIcon sx={{ color: "#fff" }} />
                    </StyledBadge>
                  </IconButton>
                  

                  <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                  >
                    {list("right")}
                  </Drawer>
                </Box>
              </Box>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
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
            sx={{
              mr: 2,
              display: { md: "none" },
              marginLeft: { xs: "0px", sm: "20px" },
              fontSize: "2rem",
            }}
          >
            <MenuIcon fontSize="1.8rem" />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
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
                sm={4}
                md={5}
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
                sm={1}
                md={2}
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
                sm={5}
                md={5}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginRight: "30px", display: "flex" }}>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <img
                      src={Account}
                      alt="account"
                      className="header-menu_icons"
                    />
                  </Link>
                </Box>

                <Box sx={{ marginRight: "30px" }}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <LanguageOutlinedIcon
                      sx={{ color: "#fff", fontSize: "1.8rem" }}
                    />
                  </Link>
                </Box>

                {/* <Box sx={{ marginRight: "30px" }}>
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
                </Box> */}

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
                    <IconButton
                      aria-label="cart"
                      // onClick={handleCartClick
                      onClick={toggleDrawer("right", true)}
                    >
                      <StyledBadge
                        badgeContent={1}
                        color="secondary"
                        className="cart_icon"
                      >
                        <ShoppingCartIcon sx={{ color: "#fff" }} />
                      </StyledBadge>
                    </IconButton>

                    <Drawer
                      anchor={"right"}
                      open={state["right"]}
                      onClose={toggleDrawer("right", false)}
                    >
                      {list("right")}
                    </Drawer>
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

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "center",
              marginRight: "50px",
              marginTop: "10px",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              height="70px"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            />
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#000",
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
