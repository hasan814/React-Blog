import { Outlet } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth={"lg"}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default App;
