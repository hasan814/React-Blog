import { ICardEL } from "../../types";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardEL = ({ title, slug, coverPhoto, author }: ICardEL) => {
  // ================ Destructures ================
  const { name, avatar } = author || {};
  const avatarUrl = avatar?.url || "/default-avatar.png";

  // ================ Rendering ================
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardHeader
        avatar={<Avatar src={avatarUrl} sx={{ ml: 2 }} />}
        title={
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" color="text.primary" fontWeight={500}>
          {title}
        </Typography>
      </CardContent>

      <Divider sx={{ my: 1 }} />

      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            size="small"
            fullWidth
            sx={{ borderRadius: 3 }}
          >
            مطالعه کتاب
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEL;
