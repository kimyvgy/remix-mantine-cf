import type { MetaFunction } from "@remix-run/cloudflare";
import { MantineProvider } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import DefaultLayout from "./components/layout/default-layout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix + Mantine + Cloudflare",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <MantineProvider withGlobalStyles withCSSVariables>
      <html lang="en">
        <head>
          <Meta />
          <Links />
          <StylesPlaceholder />
        </head>
        <body>
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>

          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
