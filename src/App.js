
import { useState } from "react"
import { createTheme } from "@mui/material";
import NavBar from "./components/NavBar.jsx";
import Sidebar from "./components/SideBar.jsx";
import Feed from "./components/Feed.jsx";
import RightBar from "./components/RightBar.jsx";
import Add from "./components/Add.jsx";
import { Box, Stack, ThemeProvider } from "@mui/material";

const App = () => {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme ({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box dgcolor={"background.default"} color={"text.primary"}>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
