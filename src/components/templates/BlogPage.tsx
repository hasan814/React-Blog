import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { GET_POST_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import CommentForm from "../modules/Form/CommentForm";
import BlogContent from "../modules/Blog/BlogContent";
import BlogHeader from "../modules/Blog/BlogHeader";
import BlogAuthor from "../modules/Blog/BlogAuthor";
import BlogImage from "../modules/Blog/BlogImage";
import Comments from "../modules/Form/Comments";
import Loading from "../Elements/Loading";
import Error from "../Elements/Error";
import Grid from "@mui/material/Grid2";

const BlogPage = () => {
  // ============= Navigation & Params ==============
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  // ============= Query ==============
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  // =============== Error Handling ===============
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data?.post) return <Typography>No Post found.</Typography>;

  // =============== Destructuring Data ===============
  const { title, coverPhoto, author, content } = data.post;

  // =============== Rendering =================
  return (
    <Container maxWidth="lg">
      <Grid container>
        <BlogHeader title={title} onBack={() => navigate(-1)} />
        <BlogImage src={coverPhoto.url} alt={title} />
        <BlogAuthor
          avatarUrl={author.avatar.url}
          name={author.name}
          field={author.field}
        />
        <BlogContent content={content.html} />
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
