import {
  Avatar,
  Link,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar({ drawerWidth, showDrawer }) {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
        position: "static",
      }}
    >
      <Toolbar>
        <IconButton
          sx={{ mr: "9px", display: { sm: "none" } }}
          onClick={() => {
            showDrawer();
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            "&:hover": { textDecoration: "none", fontSize: "16.5px" },
          }}
        >
          Online store
        </Link>
        <Typography sx={{ mr: 2, color: "inherit" }} variant="body1">
          Eman Zedan
        </Typography>
        <Avatar alt="sam" src="image/flowers.webp" />
        {/* <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" /> */}
      </Toolbar>
    </AppBar>
  );
}
