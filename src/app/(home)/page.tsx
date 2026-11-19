import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Code2,
  Earth,
  ExternalLink,
  GitBranch,
  LayoutGrid,
  Palette,
  Sparkles,
  Swords,
} from "lucide-react";

const sections = [
  {
    href: "/docs",
    title: "简介",
    description: "了解这份官方文档的来源、使用方式与免责声明。",
    icon: BookOpen,
  },
  {
    href: "/docs/npc-doc",
    title: "NPC 元数据",
    description: "构建器、角色、运动控制器、传感器与指令的完整参考。",
    icon: Bot,
  },
  {
    href: "/docs/custom-ui",
    title: "自定义 UI",
    description: "布局、标记语法、通用样式，以及完整的类型文档。",
    icon: Palette,
  },
  {
    href: "/docs/npc",
    title: "NPC 文档",
    description: "从模板、行为到战斗的 NPC 制作分步教程。",
    icon: Swords,
  },
  {
    href: "/docs/worldgen",
    title: "世界生成",
    description: "资产包、世界生成教程与技术生成器参考。",
    icon: Earth,
  },
  {
    href: "/docs/custom-ui/type-documentation",
    title: "类型文档",
    description: "UI 元素、枚举与属性类型的快速查阅表。",
    icon: LayoutGrid,
  },
];

const quickLinks = [
  { label: "自定义 UI：标记语法", href: "/docs/custom-ui/markup" },
  { label: "自定义 UI：类型文档", href: "/docs/custom-ui/type-documentation" },
  { label: "世界生成：教程", href: "/docs/worldgen/worldgen-tutorial" },
  {
    label: "世界生成：密度",
    href: "/docs/worldgen/technical-hytale-generator/density",
  },
  { label: "NPC：了解你的敌人", href: "/docs/npc/1-know-your-enemy" },
  { label: "NPC 元数据：构建器", href: "/docs/npc-doc" },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28">
        <span className="border-fd-primary/30 bg-fd-primary/10 text-fd-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
          <Sparkles className="size-3.5" />
          Hypixel Studios 官方文档的中文翻译
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          来自 Hytale 的官方文档
        </h1>

        <p className="text-fd-muted-foreground mt-5 max-w-2xl text-base leading-7 md:text-lg">
          由 Hypixel Studios Canada Inc. 提供的 Hytale 官方模组开发文档中文翻译，
          涵盖 NPC、自定义 UI 与世界生成。
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="bg-fd-primary text-fd-primary-foreground inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            开始阅读
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs/npc-doc"
            className="border-fd-border bg-fd-card/60 text-fd-foreground inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            NPC 元数据
          </Link>
        </div>

        <p className="text-fd-muted-foreground mt-6 max-w-2xl text-xs leading-5">
          本站为社区中文翻译，与 Hypixel Studios Canada, Inc. 及
          HytaleModding 无隶属关系。
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">文档目录</h2>
            <p className="text-fd-muted-foreground mt-1 text-sm">
              选择你想了解的部分。
            </p>
          </div>
          <Link
            href="/docs"
            className="text-fd-primary hidden text-sm font-medium hover:underline sm:inline-flex"
          >
            查看全部
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.href}
                href={section.href}
                className="group border-fd-border bg-fd-card/50 hover:border-fd-primary/50 hover:bg-fd-accent/40 flex flex-col rounded-xl border p-5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-fd-primary/10 text-fd-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{section.title}</h3>
                  <ArrowRight className="text-fd-muted-foreground group-hover:text-fd-primary ms-auto size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="text-fd-muted-foreground mt-3 text-sm leading-6">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <div className="border-fd-border bg-fd-card/40 rounded-xl border p-6">
          <div className="flex items-center gap-2">
            <Code2 className="text-fd-primary size-5" />
            <h2 className="text-lg font-semibold">常用入口</h2>
          </div>
          <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-fd-muted-foreground hover:text-fd-primary flex items-center gap-2 text-sm transition-colors"
              >
                <span className="bg-fd-primary/60 size-1.5 shrink-0 rounded-full" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-fd-border mt-auto border-t">
        <div className="text-fd-muted-foreground mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Hytale 官方文档中文版，由社区翻译维护</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://hytalemodding.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fd-primary inline-flex items-center gap-1.5 transition-colors"
            >
              HytaleModding
              <ExternalLink className="size-3" />
            </a>
            <a
              href="https://github.com/etwzero/hytale_docs_zh_cn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fd-primary inline-flex items-center gap-1.5 transition-colors"
            >
              GitHub
              <GitBranch className="size-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
