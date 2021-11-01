import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const SearchResult = ({ searchedWord, searchedMunicipality }) => {
  return (
    <Box>
      {searchedWord !== "" && (
        <Box>
          <Typography
            variant="subtitle1"
            component="div"
            gutterBottom
            align="center"
          >
            <Box sx={{ fontWeight: "bold", display: "inline" }}>
              {searchedWord}
            </Box>
            は{}
            {searchedMunicipality === "" ? (
              "分からない"
            ) : (
              <Box sx={{ fontWeight: "bold", display: "inline" }}>
                {searchedMunicipality}
              </Box>
            )}
            {searchedMunicipality !== "" && "がやってる"}
          </Typography>

          {searchedMunicipality === "" && (
            <Box>
              <Typography variant="body1" component="div" align="center">
                都か区か？ 市か区か？
              </Typography>
              <Typography variant="body1" component="div" align="center">
                ルールが分からない
              </Typography>
              <Typography variant="body1" component="div" align="center">
                いつもこうさ 情けないだろ
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchResult;
