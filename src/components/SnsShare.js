import { Grid } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const SnsShare = ({ shareUrls }) => {
  console.log(shareUrls.facebook);
  return (
    <Grid container justifyContent="center" spacing={2}>
      {typeof shareUrls.twitter !== "undefined" && (
        <Grid item>
          <TwitterShareButton url={shareUrls.twitter}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Grid>
      )}

      {typeof shareUrls.facebook !== "undefined" && (
        <Grid item>
          <FacebookShareButton url={shareUrls.facebook}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Grid>
      )}
    </Grid>
  );
};

export default SnsShare;
