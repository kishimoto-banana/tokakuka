import Footer from "./components/Footer";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Grid } from "@mui/material";
import Div100vh from 'react-div-100vh';

const NotFound = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Grid
        container
        spacing={1}
        align="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h4" component="div">
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="div">
            Page Not Found.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function App() {
  return (
    <Div100vh>
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      
    </Box>
    </Div100vh>
    
  );
}
