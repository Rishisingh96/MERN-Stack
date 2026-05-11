import { MinimalTemplate } from "./MinimalTemplate";
import { ModernTemplate } from "./ModernTemplate";
import { BoldTemplate } from "./BoldTemplate";

export function TemplateRenderer({ template, user, draft }) {
  if (template === "modern") return <ModernTemplate user={user} draft={draft} />;
  if (template === "bold") return <BoldTemplate user={user} draft={draft} />;
  return <MinimalTemplate user={user} draft={draft} />;
}

