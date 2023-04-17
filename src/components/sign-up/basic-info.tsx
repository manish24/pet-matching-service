import { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicInfo() {
  const titleArray = ["Mr", "Mrs", "Ms"];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <FormControl style={{ width: 80 }}>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            labelId="miles-simple-select-label"
            id="miles-simple-select"
            label="title"
          >
            {titleArray.map((item, index) => (
              <MenuItem value={item} key={`${item}_${index}`}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          style={{ width: 200, margin: 2 }}
          autoComplete="off"
          name="givenName"
          required
          fullWidth
          id="givenName"
          label="First Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="middleName"
          label="Middle Name"
          name="middleName"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="familyName"
          label="Last Name"
          name="familyName"
          autoComplete="off"
        />
      </Grid>
    </Grid>
  );
}
