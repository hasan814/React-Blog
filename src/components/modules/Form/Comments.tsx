import { Avatar, Box, Typography } from "@mui/material";
import { IComment, ICommentProps } from "../../../types";
import { GET_POST_COMMENTS } from "../../../graphql/queries";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@apollo/client";

import Grid from "@mui/material/Grid2";
import Loading from "../../Elements/Loading";

const Comments: React.FC<ICommentProps> = ({ slug }) => {
  // ============= Check Slug First ==============
  if (!slug) {
    return <Typography color="error">Error: Invalid slug</Typography>;
  }

  // ============= Query ==============
  const { loading, data } = useQuery<{ comments: IComment[] }>(
    GET_POST_COMMENTS,
    { variables: { slug } }
  );

  // =============== Error Handling =================
  if (loading) return <Loading />;
  if (!data?.comments || data.comments.length === 0) {
    return <Typography>No Comments Found.</Typography>;
  }

  const { comments } = data;

  // ============= Rendering ==============
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid size={12} m={3}>
        <Typography variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>

        {comments.map((comment) => (
          <Grid
            m={2}
            p={2}
            size={12}
            key={uuidv4()}
            borderRadius={1}
            border={"1px solid silver"}
          >
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name?.charAt(0) || "?"}</Avatar>
              <Typography variant="body1" fontWeight={700} ml={1}>
                {comment.name || "ناشناس"}
              </Typography>
            </Box>
            <Typography variant="body2">{comment.text}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
