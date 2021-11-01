import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        backgroundColor: "#1B1C1D",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            className="my-nav"
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="body1" color="#ffffff">
              ホーム
            </Typography>
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="body1" color="#ffffff">
              トカクカについて
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
