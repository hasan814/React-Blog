import sanitizeHTML from "sanitize-html";
import Grid from "@mui/material/Grid2";

const AuthorDescription = ({ description }: { description: string }) => (
  <Grid size={12}>
    <div
      dangerouslySetInnerHTML={{ __html: sanitizeHTML(description || "") }}
    />
  </Grid>
);

export default AuthorDescription;
