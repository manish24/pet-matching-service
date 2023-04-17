import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function ContactInfo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="number"
          label="Phone Number"
          id="number"
          autoComplete="off"
        />
      </Grid>
    </Grid>
  );
}
