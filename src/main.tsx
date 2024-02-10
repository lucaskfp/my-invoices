import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import "./index.css";

import { Button, MantineProvider, createTheme } from "@mantine/core";

import { App } from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
        radius: "xl",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
