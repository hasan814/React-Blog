import { Avatar, Typography } from "@mui/material";
import { IAuthorHeader } from "../../../types";

import Grid from "@mui/material/Grid2";

const AuthorHeader = ({ avatarUrl, name, field }: IAuthorHeader) => (
  <Grid size={12} display="flex" flexDirection="column" alignItems="center">
    <Avatar src={avatarUrl} sx={{ width: 200, height: 200 }} />
    <Typography variant="h5" fontWeight={700} mt={4}>
      {name}
    </Typography>
    <Typography variant="body1" color="text.secondary" mt={2}>
      {field}
    </Typography>
  </Grid>
);

export default AuthorHeader;
