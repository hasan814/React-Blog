import { Avatar, Divider, Typography } from "@mui/material";
import { AuthorCardProps } from "../../types";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid2";

const AuthorCard = ({ slug, avatar, name, isLast }: AuthorCardProps) => {
  return (
    <>
      <Grid size={12}>
        <Link
          to={`/authors/${slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            gap: "10px",
          }}
        >
          <Avatar src={avatar.url} alt={name} />
          <Typography variant="body1" color="text.secondary">
            {name}
          </Typography>
        </Link>
      </Grid>
      {!isLast && (
        <Grid size={12}>
          <Divider variant="middle" />
        </Grid>
      )}
    </>
  );
};

export default AuthorCard;
