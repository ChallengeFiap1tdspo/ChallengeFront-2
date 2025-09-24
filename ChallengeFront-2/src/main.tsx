import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home/Home";
import FAQ from "./routes/FAQ/Faq";
import Contato from "./routes/Contato/Contato";
import Equipe from "./routes/Equipe/Equipe";

// monta as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contato", element: <Contato /> },
      { path: "/equipe", element: <Equipe /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    'Elemento "#root" não encontrado — verifique seu index.html (deve ter <div id="root"></div>).'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
