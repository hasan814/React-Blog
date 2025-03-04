import { AppBar, Toolbar, Typography } from "@mui/material";

import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          component={"h1"}
          variant="h5"
          flex={1}
          sx={{ fontFamily: "YekanBakh" }}
        >
          وبلاگ
        </Typography>
        <Link to={"/"}>
          <BookIcon color="white" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
