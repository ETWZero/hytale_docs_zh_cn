import type { Metadata, Viewport } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./styles/global.css";
import "./styles/official-docs.css";
import "./styles/transitions.css";

export const metadata: Metadata = {
  title: {
    default: "Hytale 官方文档",
    template: "%s | Hytale 官方文档",
  },
  description:
    "Hypixel Studios Canada Inc. 提供的 Hytale 官方模组开发文档中文版。",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="transition-colors">
        <RootProvider theme={{ defaultTheme: "dark", enableSystem: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
