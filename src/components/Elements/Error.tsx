import { Alert, Container } from "@mui/material";

const Error = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Alert severity="error">
        An error has occurred. Please try again later.
      </Alert>
    </Container>
  );
};

export default Error;
