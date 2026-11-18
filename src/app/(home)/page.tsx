import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-bold">Hytale 官方文档</h1>
      <p className="text-fd-muted-foreground max-w-xl">
        由 Hypixel Studios Canada Inc. 提供的 Hytale 官方模组开发文档中文版。
      </p>
      <Link
        href="/docs"
        className="bg-fd-primary text-fd-primary-foreground rounded-lg px-5 py-2.5 text-sm font-medium"
      >
        查看文档
      </Link>
    </div>
  );
}
