import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router/index.tsx";
import { ThemeProvider } from "./components/common/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "@/components/ui/sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </Provider>
    ,
  </StrictMode>
);
