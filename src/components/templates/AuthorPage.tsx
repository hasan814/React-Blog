import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { IAuthorPageProps } from "../../types";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import AuthorDescription from "../modules/Authors/AuthorDescription";
import AuthorHeader from "../modules/Authors/AuthorHeader";
import AuthorPosts from "../modules/Authors/AuthorPosts";
import BackButton from "../modules/Authors/BackButton";
import Loading from "../Elements/Loading";
import Error from "../Elements/Error";
import Grid from "@mui/material/Grid2";

const AuthorPage: React.FC = () => {
  // ============== Params & Navigation ==============
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // ============== Query ==============
  const { loading, data, error } = useQuery<{ author: IAuthorPageProps }>(
    GET_AUTHOR_INFO,
    { variables: { slug } }
  );

  // =============== Error Handling ===============
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data?.author) return <Typography>No author found.</Typography>;

  // =============== Destructuring Data ===============
  const { avatar, name, field, description, posts } = data.author;

  // =============== Rendering =================
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={10} justifyContent="center">
        <BackButton onClick={() => navigate("/")} />
        <AuthorHeader
          avatarUrl={avatar?.url || "/default-avatar.png"}
          name={name}
          field={field}
        />
        <AuthorDescription description={description?.html} />
        <AuthorPosts name={name} posts={posts} />
      </Grid>
    </Container>
  );
};

export default AuthorPage;
