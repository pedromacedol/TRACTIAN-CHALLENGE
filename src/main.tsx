import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import { customTheme } from "./assets/Styles/theme";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={customTheme}>
    <BrowserRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </ChakraProvider>
);
