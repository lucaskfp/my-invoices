import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/pt-br";
import "./index.css";

import {
  Button,
  MantineProvider,
  NumberInput,
  Select,
  TextInput,
  createTheme,
} from "@mantine/core";
import { DateInput, DatesProvider } from "@mantine/dates";

import { App } from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

dayjs.extend(customParseFormat);

const theme = createTheme({
  defaultRadius: "md",
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
        radius: "xl",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    DateInput: DateInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "md",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <DatesProvider
        settings={{ locale: "pt-br", firstDayOfWeek: 0, consistentWeeks: true }}
      >
        <App />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
