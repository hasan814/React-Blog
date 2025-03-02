import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { theme } from "./Providers/themeProviders.ts";

import router from "./routes/index.tsx";
import client from "./services/apolloClient.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
