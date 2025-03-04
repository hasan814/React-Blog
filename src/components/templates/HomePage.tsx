import { Box, Typography } from "@mui/material";

import Authors from "../modules/Authors/Authors";
import Grid from "@mui/material/Grid2";
import Blog from "../modules/Blog/Blog";

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={3}>
        <Grid size={{ xs: 12, md: 3 }} mt={4}>
          <Typography component={"h3"} variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }} mt={4}>
          <Typography component={"h3"} variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blog />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
