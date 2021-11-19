import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

export default function SimpleTextField(props) {
  return (
    <div className="Forms">
      <TextField
        fullWidth
        hiddenLabel
        id="outlined-basic"
        variant="outlined"
        placeholder={props.title}

        InputProps={{
          endAdornment: <InputAdornment position="end">{props.children}</InputAdornment>,
        }}
      >

      </TextField>
    </div>
  );
}
