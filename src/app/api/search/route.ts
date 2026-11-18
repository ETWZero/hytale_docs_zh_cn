import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const dynamic = "force-static";

// `staticGET` exports the search database so it can be used by the
// client-side static search (required for `output: "export"`).
export const { staticGET: GET } = createFromSource(source);
