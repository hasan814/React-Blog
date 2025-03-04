import { Avatar, Box, Typography } from "@mui/material";
import { IComment } from "../../../types";

import Grid from "@mui/material/Grid2";

const CommentItem = ({ name, text }: IComment) => (
  <Grid m={2} p={2} size={12} borderRadius={1} border="1px solid silver">
    <Box display="flex" alignItems="center" mb={3}>
      <Avatar>{name?.charAt(0) || "?"}</Avatar>
      <Typography variant="body1" fontWeight={700} ml={1}>
        {name || "ناشناس"}
      </Typography>
    </Box>
    <Typography variant="body2">{text}</Typography>
  </Grid>
);

export default CommentItem;
