import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Appbar from "component/Appbar";
import Drawerr from "component/Drawerr";
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import getDesignToknes from "theme/theme";

const drawerWidth = 240;

export default function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "dark"
        ? "dark"
        : "light",
  );
  const Theme = React.useMemo(() => createTheme(getDesignToknes(mode)), [mode]);
  const [display, setDisplay] = useState("none");
  const [typeDrawer, setTypeDrawer] = useState("permanent");

  const showDrawer = () => {
    setTypeDrawer("temporary");
    setDisplay("block");
  };

  const hideDrawer = () => {
    setTypeDrawer("permanent");
    setDisplay("none");
  };

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />
        <Drawerr
          drawerWidth={drawerWidth}
          setMode={setMode}
          display={display}
          typeDrawer={typeDrawer}
          hideDrawer={hideDrawer}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
