import { Button } from "@mui/material";
import { ISubmitBtn } from "../../../types";

import Grid from "@mui/material/Grid2";

const SubmitButton = ({ onClick, loading }: ISubmitBtn) => (
  <Grid size={12} m={2}>
    <Button variant="contained" onClick={onClick} disabled={loading}>
      {loading ? "در حال ارسال..." : "ارسال"}
    </Button>
  </Grid>
);

export default SubmitButton;
