import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const EditDeleteButtons = () => {
  return (
    <>
      <IconButton onClick={() => {}} aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => {}} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default EditDeleteButtons;
