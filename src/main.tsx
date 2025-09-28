import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";

import { AuthProvider } from "./contexts/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" richColors closeButton expand />
      <App />
    </AuthProvider>
  </StrictMode>
);
