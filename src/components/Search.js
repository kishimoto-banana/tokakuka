import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { Box } from "@mui/system";

const Search = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const [searchedMunicipality, setSearchedMunicipality] = useState("");

  const filterData = (_, value) => {
    const searchTerm = value;
    if (searchTerm === "") {
      setFilteredData([]);
      return;
    }

    const newFilteredData = data.filter((value) => {
      return value.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(newFilteredData);
  };

  const handleChange = (_, value) => {
    // サジェスト候補をクリックされたパターン
    if (typeof value === "object") {
      setSearchedWord(value.name);
      setSearchedMunicipality(value.municipality);
      return;
    }

    // 入力された値でエンターされたパターン
    const matchObj = data.find((v) => v.name === value);
    if (typeof matchObj === "undefined") {
      // 見つからなかった
      setSearchedWord(value);
      setSearchedMunicipality("");
    } else {
      // 見つかった
      setSearchedWord(value);
      setSearchedMunicipality(matchObj.municipality);
    }
  };

  return (
    <>
      <SearchBar
        placeholder={placeholder}
        suggestions={filteredData}
        handleInputChange={filterData}
        handleChange={handleChange}
      />
      <Box sx={{ my: 2 }}>
        <SearchResult
          searchedWord={searchedWord}
          searchedMunicipality={searchedMunicipality}
        />
      </Box>
    </>
  );
};

export default Search;
