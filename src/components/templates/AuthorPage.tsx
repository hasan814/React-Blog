import { Avatar, Container, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { IAuthorPageProps } from "../../types";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import sanitizeHTML from "sanitize-html";
import Loading from "../modules/Loading";
import CardEL from "../Elements/CardEL";
import Error from "../modules/Error";
import Grid from "@mui/material/Grid2";

const AuthorPage: React.FC = () => {
  // ============== Params & Navigation ==============
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // ============== Query ==============
  const { loading, data, error } = useQuery<{ author: IAuthorPageProps }>(
    GET_AUTHOR_INFO,
    {
      variables: { slug },
    }
  );

  // =============== Erroring =================
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data?.author) {
    return <Typography>No author found.</Typography>;
  }
  // =============== Destructures =================
  const { avatar, name, field, description, posts } = data.author;

  // =============== Rendering =================
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={10} justifyContent="center">
        <Grid size={12} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            بازگشت به صفحه اصلی
          </Button>
        </Grid>

        <Grid
          size={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar?.url} sx={{ width: 200, height: 200 }} />
          <Typography variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>

        <Grid size={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(description?.html || ""),
            }}
          />
        </Grid>

        <Grid size={12} mt={6}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            مقالات {name}
          </Typography>
          <Grid container spacing={2}>
            {posts?.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <CardEL {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
