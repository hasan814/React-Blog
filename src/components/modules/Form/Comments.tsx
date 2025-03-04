import { IComment, ICommentProps } from "../../../types";
import { GET_POST_COMMENTS } from "../../../graphql/queries";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";

import CommentItem from "./CommentItem";
import Loading from "../../Elements/Loading";
import Grid from "@mui/material/Grid2";

const Comments: React.FC<ICommentProps> = ({ slug }) => {
  // ============= Query ==============
  const { loading, data } = useQuery<{ comments: IComment[] }>(
    GET_POST_COMMENTS,
    {
      variables: { slug },
      skip: !slug,
    }
  );

  // ============= Loading & Error Handling ==============
  if (!slug) return <Typography color="error">Error: Invalid slug</Typography>;
  if (loading) return <Loading />;
  if (!data?.comments?.length)
    return <Typography>No Comments Found.</Typography>;

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

        {data.comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
