import { Avatar, Box, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHTML from "sanitize-html";
import CommentForm from "../modules/CommentForm";
import Comments from "../modules/Comments";
import Loading from "../modules/Loading";
import Error from "../modules/Error";
import Grid from "@mui/material/Grid2";

const BlogPage = () => {
  // ============= Navigate ================
  const navigate = useNavigate();

  // ============= Params ================
  const { slug } = useParams();

  // ============= Query ================
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  // =============== Erroring =================
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data?.post) {
    return <Typography>No Post found.</Typography>;
  }
  // ============= Destructures ================
  const { title, coverPhoto, author, content } = data.post;

  // ============= Rendering ================
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={12}
          mt={9}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            component={"h2"}
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid size={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={data.post.slug}
            width={"100%"}
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid size={12} mt={7} display={"flex"} alignItems={"center"}>
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="body1" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid size={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(content.html) }}
          ></div>
        </Grid>
        <Grid size={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid size={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
