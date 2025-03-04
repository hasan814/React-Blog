import sanitizeHTML from "sanitize-html";
import Grid from "@mui/material/Grid2";

const BlogContent = ({ content }: { content: string }) => (
  <Grid size={12} mt={5}>
    <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content) }} />
  </Grid>
);

export default BlogContent;
