import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const Youtube = ({ youtubeId }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        title="YouTube video player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  );
};

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          トカクカとは？
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" component="div" gutterBottom>
            トカクカは公共施設を運営している自治体を検索できるサービスです。
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <Link href="https://twitter.com/unpuy_tw" underline="none">
              @unpuy_tw
            </Link>{" "}
            が運営しています。
          </Typography>
        </Box>
        <Box sx={{ my: 8 }}>
          <Youtube youtubeId="Oh9oXxG08D8" />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
