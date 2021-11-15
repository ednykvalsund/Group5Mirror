import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SimpleTextField(props) {
  return (
    <div className="Forms">
      <TextField
        fullWidth
       
        variant="outlined"
        label={props.title}
        InputLabelProps={{
          shrink: true,
          disableAnimation: true
        }}
       // placeholder={props.title}
      />
    </div>
  );
}
