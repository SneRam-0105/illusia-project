import { Box, Typography } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ margin: "auto", textAlign: "center", maxWidth: 600, px: 2 }}>
      <Box sx={{ paddingTop: 10, mb: 4 }}>
        <Typography variant="h3">Welcome!</Typography>
        <Typography variant="subtitle1">Log in to your account.</Typography>
      </Box>
      ;
    </Box>
  );
};
export default App;
