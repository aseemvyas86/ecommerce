import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import React from "react";
import Members from "./Members";

const Search = () => {
  const [searchParams, setSearchParams] = useState("");
  const [finalSearchValue, setFinalSearchValue] = useState("");

  const handleClick = () => {
    setFinalSearchValue(searchParams);
  };
  console.log("Render search");
  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by name,email or role"
          inputProps={{ "aria-label": "search by name,email or role" }}
          onChange={(event) => setSearchParams(event.target.value)}
          value={searchParams}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Members searchParams={finalSearchValue} />
    </>
  );
};

export default Search;
