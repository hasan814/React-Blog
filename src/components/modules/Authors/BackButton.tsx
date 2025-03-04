import { Button } from "@mui/material";

import Grid from "@mui/material/Grid2";

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <Grid size={12} display="flex" justifyContent="center">
    <Button variant="contained" color="primary" onClick={onClick}>
      بازگشت به صفحه اصلی
    </Button>
  </Grid>
);

export default BackButton;
