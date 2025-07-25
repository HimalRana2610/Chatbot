import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab, serif",
    allVariants: { color: "white" },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right" />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
