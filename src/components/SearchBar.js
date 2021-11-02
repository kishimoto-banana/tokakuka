import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/system";


const SearchTextField = styled(TextField)`
  background-color: #ffffff;
  border-radius: 50px;
  fieldset {
    border-radius: 50px
  }
`;

const SearchBar = ({placeholder, suggestions, handleInputChange, handleChange}) => {
    return (
    <Box>
      <Autocomplete
        freeSolo
        disableClearable
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={suggestions}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          );
        }}
        renderInput={(params) => (
          <SearchTextField
            {...params}
            label={placeholder}
            fullWidth
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      </Box>
    );
};

export default SearchBar;