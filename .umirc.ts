import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/locale'],
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
  },
});
