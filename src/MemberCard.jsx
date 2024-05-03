import Grid from "@mui/material/Grid";
import React from "react";
import ControlledCheckbox from "./CheckBox";
import EditDeleteButtons from "./Action";

const MemberCard = ({ id, name, email, role }) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={2}>
        <ControlledCheckbox />
      </Grid>
      <Grid item xs={2}>
        <h4>{id}</h4>
      </Grid>
      <Grid item xs={2}>
        <h4>{name}</h4>
      </Grid>
      <Grid item xs={2}>
        <h4>{email}</h4>
      </Grid>
      <Grid item xs={2}>
        <h4>{role}</h4>
      </Grid>
      <Grid item xs={2}>
        <EditDeleteButtons />
      </Grid>
    </Grid>
  );
};

export default MemberCard;
