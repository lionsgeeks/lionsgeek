import React, { Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LoadingPage from "./pages/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = React.lazy(() => import("./App"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </I18nextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
