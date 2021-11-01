import Footer from "./components/Footer";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const NotFound = () => {
  return (
    <Typography variant="h2" component="h2">
      Not Found
    </Typography>
  );
};

export default function App() {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Box>
  );
}
