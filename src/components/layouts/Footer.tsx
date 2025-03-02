import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3A76D2",
        color: "white",
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6">وب‌سایت ما</Typography>
            <Typography variant="body2">
              بهترین مقالات و منابع برای یادگیری برنامه‌نویسی و توسعه وب.
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid
            size={{ xs: 12, md: 6 }}
            textAlign={{ xs: "center", md: "right" }}
          >
            <Typography variant="h6">تماس با ما</Typography>
            <Typography variant="body2">
              ایمیل: h.mousavi910@@example.com
            </Typography>
            <Typography variant="body2">تلفن: 09171837298</Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} تمامی حقوق محفوظ است.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
