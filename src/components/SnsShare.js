import { Grid } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const SnsShare = ({ shareUrls, shareTitle }) => {
  console.log(shareUrls.facebook);
  return (
    <Grid container justifyContent="center" spacing={2}>
      {typeof shareUrls.twitter !== "undefined" && (
        <Grid item>
          <TwitterShareButton url={shareUrls.twitter} title={shareTitle} >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Grid>
      )}

      {typeof shareUrls.facebook !== "undefined" && (
        <Grid item>
          <FacebookShareButton url={shareUrls.facebook} title={shareTitle} >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Grid>
      )}

      {typeof shareUrls.line !== "undefined" && (
            <Grid item>
              <LineShareButton url={shareUrls.line} title={shareTitle} >
                <LineIcon size={32} round />
              </LineShareButton>
            </Grid>
          )}
    </Grid>
  );
};

export default SnsShare;
