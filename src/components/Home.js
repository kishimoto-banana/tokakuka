import Search from "./Search";
import FacilityData from "../public_facility.json";
import { Link, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import SnsShare from "./SnsShare";

const Home = () => {
  const shareUrl = "https://tokakuka.web.app/";

  return (
    <Container maxWidth="xs">
      <Box sx={{ my: 4 }}>
        <img src="/tokakuka-logo.png" alt="title" width="150" height="170" />
        <Typography variant="h4" component="h1" gutterBottom>
          トカクカ
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          都か区か気になる そこだけ気になる
        </Typography>

        <Box sx={{ my: 6 }}>
          <Search placeholder="施設名" data={FacilityData} />
        </Box>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnNVfDp0UkDaj0gO3aodQWlCb84MU4BQ0k_7cfDbH8pne31Q/viewform?usp=sf_link"
          underline="hover"
          target="_blank"
          rel="noopener"
          variant="body1"
        >
          トカクカ教える
        </Link>

        <Box sx={{ my: 2 }}>
          <SnsShare shareUrls={{ twitter: shareUrl, facebook: shareUrl }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
