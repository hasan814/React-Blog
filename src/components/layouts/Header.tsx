import { AppBar, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

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
        <BookIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
