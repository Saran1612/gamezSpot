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
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";
import ProdOne from "../../assests/Group 1000002799.png";
import ProdTwo from "../../assests/Group 1000002774.png";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ReusableButton from "../Button/Button";
import { AuthContext } from "../useContext/useContext";
import { useContext } from "react";
import { useEffect } from "react";
import ResuableDropdown from "../DropDown/DropDown";
import ParticleBackground from "../Particles/Particles";

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
  const { data, setData, count, setCount, setCartedData } =
    useContext(AuthContext);
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElAcc, setAnchorElAcc] = React.useState(null);
  const [anchorElPages, setAnchorElPages] = React.useState(null);
  const [anchorElBlogs, setAnchorElBlogs] = React.useState(null);
  const [cartData, setCartData] = React.useState([]);
  console.log(cartData, "cartDatacartData");
  const navigate = useNavigate();

  const GamingAccopen = Boolean(anchorElAcc);
  const Pagesopen = Boolean(anchorElPages);
  const Blogsopen = Boolean(anchorElBlogs);

  console.log(data, "updatedDatainHEADER");

  const uniqueIds = {};

  const filteredData = data.filter((item) => {
    if (!uniqueIds[item.id]) {
      uniqueIds[item.id] = true;
      return true;
    }
    return false;
  });

  const formattedData = filteredData.map((each) => ({
    id: each.id,
    productImg: each.img === undefined ? each.productImg : each.img,
    productName: each.name === undefined ? each.productName : each.name,
    originalPrice: each.price === undefined ? each.originalPrice : each.price,
    Quantity: each?.quantity === undefined ? each.Quantity : each.quantity,
    discountPrice: each.price === undefined ? each.discountPrice : each.price,
  }));

  console.log(formattedData, "formattedData");

  const handleAccClick = (event) => {
    setAnchorElAcc(event.currentTarget);
  };

  const handleBlogsClick = (event) => {
    setAnchorElBlogs(event.currentTarget);
  };

  const handlePagesClick = (event) => {
    setAnchorElPages(event.currentTarget);
  };

  const handleBlogsClose = () => {
    setAnchorElBlogs(null);
    setMobileOpen(!mobileOpen);
  };

  const handleAccClose = () => {
    setAnchorElAcc(null);
    setMobileOpen(!mobileOpen);
  };
  const handlePagesClose = () => {
    setAnchorElPages(null);
    setMobileOpen(!mobileOpen);
  };

  const handleCartClick = () => {
    setMobileOpen(!mobileOpen);
    toggleDrawer("right", true);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogoClick = () => {
    navigate("/home");
    setMobileOpen(!mobileOpen);
  };

  const handleViewCartClick = () => {
    toggleDrawer("right", false)();
    setMobileOpen(false);
    navigate("/home/cart");
  };
  const handleCheckOutClick = () => {
    toggleDrawer("right", false)();
    setMobileOpen(false);
    navigate("/home/billing");
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (anchor === "right" && open === false) {
      // Additional logic to close the drawer when the button is clicked
      setState({ ...state, [anchor]: open });
      setMobileOpen(!mobileOpen);
    } else {
      // Default behavior for opening the drawer
      setState({ ...state, [anchor]: open });
      setMobileOpen(!mobileOpen);
    }
    setMobileOpen(false);
  };

  const getTotalPrice = (data) => {
    let countValue = 0;
    data.forEach((item) => {
      const quantity = item.Quantity !== undefined ? Number(item.Quantity) : 1;
      const price =
        item.originalPrice !== undefined ? Number(item.originalPrice) : 0;
      countValue += quantity * price;
    });
    setCount(countValue);
    return `Rs.${countValue}`;
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

      {formattedData?.length !== 0 ? (
        <>
          <List className="header-drawer_list">
            {formattedData.map((items) => (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={items.productImg}
                    sx={{ objectFit: "contain" }}
                    className="product_avatar"
                  />
                </ListItemAvatar>
                <ListItemText
                  className="list-primary_text"
                  primary={items.productName}
                  secondary={
                    <span className="list-secondary_text">
                      {`${items?.Quantity ? items.Quantity : 1}*${
                        items.originalPrice
                      }`}
                    </span>
                  }
                />
              </ListItem>
            ))}
          </List>

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
            <span className="subtotal_price-text">
              {getTotalPrice(formattedData)}
            </span>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <strong>Cart is empty!</strong>
        </Box>
      )}

      <Box className="sideDrawer-holder">
        <ReusableButton
          buttonName="VIEW CART"
          size="large"
          className="viewCart_button"
          // onClick={() => navigate("/home/cart")}
          onClick={handleViewCartClick}
        />

        <ReusableButton
          buttonName="CHECKOUT"
          size="large"
          className="checkout_button"
          // onClick={() => navigate("/home/billing")}
          onClick={handleCheckOutClick}
        />
      </Box>
    </Box>
  );

  const Cart = [
    { id: "Ps5", full_name: "Ps5" },
    { id: "XBox", full_name: "XBox" },
    { id: "Nitendo Switch", full_name: "Nitendo Switch" },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer", width: "100px" }}
          />
        </Box>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "block" }}>
            <ListItemIcon sx={{ width: "100%" }}>
              <Box sx={{ marginRight: "15px", width: "100%" }}>
                <span className="details-text-mob">Gaming Accessories</span>

                <Box sx={{ marginTop: "14px", width: "100%" }}>
                  <ResuableDropdown
                    size="small"
                    type="text"
                    style={{ width: "100%" }}
                    name="gamingAcc"
                    options={Cart}
                    className="game_acc-dropdown details_select"
                    placeholder="select"
                    onChange={handleAccClose}
                  />
                </Box>
              </Box>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ display: "block" }}>
            <ListItemIcon sx={{ width: "100%" }}>
              <Box sx={{ marginRight: "15px", width: "100%" }}>
                <span className="details-text-mob">Pages</span>

                <Box sx={{ marginTop: "14px", width: "100%" }}>
                  <ResuableDropdown
                    size="small"
                    type="text"
                    style={{ width: "100%" }}
                    name="Pages"
                    options={Cart}
                    className="game_acc-dropdown details_select"
                    placeholder="select gameing"
                    onChange={handlePagesClose}
                  />
                </Box>
              </Box>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ display: "block" }}>
            <ListItemIcon sx={{ width: "100%" }}>
              <Box sx={{ marginRight: "15px", width: "100%" }}>
                <span className="details-text-mob">Blogs</span>

                <Box sx={{ marginTop: "14px", width: "100%" }}>
                  <ResuableDropdown
                    size="small"
                    type="text"
                    style={{ width: "100%" }}
                    name="Blogs"
                    options={Cart}
                    className="game_acc-dropdown details_select"
                    placeholder="select Blogs"
                    onChange={handleBlogsClose}
                  />
                </Box>
              </Box>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{ marginRight: "30px", display: "flex" }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Link to="/home/profile" style={{ textDecoration: "none" }}>
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
              <Box
                sx={{ marginRight: "30px" }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Link to="#" style={{ textDecoration: "none" }}>
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
                  <span className="my-cart-value_text">0.00INR</span>
                </Box>

                <Box sx={{ display: "flex", alignItems: "end" }}>
                  <IconButton
                    aria-label="cart"
                    // onClick={handleCartClick}
                    onClick={toggleDrawer("right", true)}
                  >
                    <StyledBadge
                      badgeContent={filteredData.length}
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

  const location = useLocation();
  console.log(location.pathname, "pathname");

  return (
    <Box
      sx={{ overflowY: "scroll" }}
      // className={
      //   location.pathname === "/home"
      //     ? "app-bg_img-home header-box"
      //     : "app-bg_img header-box"
      // }
    >
      <CssBaseline />
      <AppBar
        // position="fixed"
        className="header_appbar"
        sx={{
          background: "transparent",
          // ml: { sm: `${drawerWidth}px` },
          // borderBottom: "1px solid #5B5969",
          boxShadow: "none",
          padding: "0px",
          position: "static",
        }}
      >
        <Toolbar
          sx={{ flexDirection: { xs: "column" }, alignItems: { xs: "start" } }}
        >
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
              flexDirection: "column",
              width: "100%",
              position: "relative",
            }}
          >
            <ParticleBackground />
            
            <Grid
              container
              spacing={2}
              sx={{
                padding: "12px 0px",
                display: { xs: "none", sm: "none", md: "flex" },
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
                    aria-controls={GamingAccopen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={GamingAccopen ? "true" : undefined}
                    onClick={handleAccClick}
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
                    anchorEl={anchorElAcc}
                    open={GamingAccopen}
                    onClose={handleAccClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleAccClose}>XBox</MenuItem>
                    <MenuItem onClick={handleAccClose}>PS5</MenuItem>
                    <MenuItem onClick={handleAccClose}>PS4</MenuItem>
                    <MenuItem onClick={handleAccClose}>
                      Nintendo Switch
                    </MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ marginRight: "15px" }}>
                  <Button
                    id="basic-button"
                    aria-controls={Pagesopen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={Pagesopen ? "true" : undefined}
                    onClick={handlePagesClick}
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
                    anchorEl={anchorElPages}
                    open={Pagesopen}
                    onClose={handlePagesClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handlePagesClose}>Pages One</MenuItem>
                    <MenuItem onClick={handlePagesClose}>Pages Two</MenuItem>
                    <MenuItem onClick={handlePagesClose}>Pages Three</MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ marginRight: "15px" }}>
                  <Button
                    id="basic-button"
                    aria-controls={Blogsopen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={Blogsopen ? "true" : undefined}
                    onClick={handleBlogsClick}
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
                    anchorEl={anchorElBlogs}
                    open={Blogsopen}
                    onClose={handleBlogsClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleBlogsClose}>Blogs One</MenuItem>
                    <MenuItem onClick={handleBlogsClose}>Blogs Two</MenuItem>
                    <MenuItem onClick={handleBlogsClose}>Blogs Three</MenuItem>
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
                  <Link to="/home/profile" style={{ textDecoration: "none" }}>
                    <img
                      src={Account}
                      alt="account"
                      className="header-menu_icons"
                    />
                  </Link>
                </Box>

                <Box sx={{ marginRight: "30px" }}>
                  <Link to="#" style={{ textDecoration: "none" }}>
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
                    <span className="my-cart-value_text">0.00INR</span>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "end" }}>
                    <IconButton
                      aria-label="cart"
                      // onClick={handleCartClick}
                      onClick={toggleDrawer("right", true)}
                    >
                      <StyledBadge
                        badgeContent={filteredData.length}
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

            {location.pathname === "/home" ||
            location.pathname === "/home/singleProducts" ? (
              <Grid
                container
                spacing={2}
                sx={{
                  padding: "16px 0px",
                  display: { xs: "none", sm: "none", md: "flex" },
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
            ) : null}

            <Box className="outletBox">
              <Outlet />
            </Box>
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
