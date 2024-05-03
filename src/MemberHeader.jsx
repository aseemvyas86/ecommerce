import Grid from "@mui/material/Grid";
import React from "react";
import ControlledCheckbox from "./CheckBox";

const MemberHeader = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={2}>
        <ControlledCheckbox />
      </Grid>
      <Grid item xs={2}>
        <h3>ID</h3>
      </Grid>
      <Grid item xs={2}>
        <h3>NAME</h3>
      </Grid>
      <Grid item xs={2}>
        <h3>EMAIL</h3>
      </Grid>
      <Grid item xs={2}>
        <h3>ROLE</h3>
      </Grid>
      <Grid item xs={2}>
        <h3>ACTION</h3>
      </Grid>
    </Grid>
  );
};

export default MemberHeader;
