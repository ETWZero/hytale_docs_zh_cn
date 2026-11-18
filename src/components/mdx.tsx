import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Callout } from "@/components/mdx/callout";
import { ParameterList } from "@/components/mdx/parameter-list";
import { OfficialDocumentationNotice } from "@/components/mdx/official-documentation-notice";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    Callout,
    ParameterList,
    OfficialDocumentationNotice,
    Card,
    Cards,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
