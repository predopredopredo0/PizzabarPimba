import { createFileRoute } from "@tanstack/react-router";
import { MenuSite } from "@/components/menu-site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MenuSite />;
}
