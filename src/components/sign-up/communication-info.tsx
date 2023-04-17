import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function CommunicationInfo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="line1"
          label="Address Line 1"
          id="line1"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="line2"
          label="Address Line 2"
          id="line2"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="line3"
          label="Address Line 3"
          id="line3"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="city"
          label="City"
          id="city"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="stateOrProvince"
          label="State"
          id="stateOrProvince"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="postalCode"
          label="Postal Code"
          id="postalCode"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="country"
          label="Country"
          id="country"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
        />
      </Grid>
    </Grid>
  );
}
