import React from "react";
import ReactDOM from "react-dom/client";

import RouteProvider from "./routes/RouteProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>
);
