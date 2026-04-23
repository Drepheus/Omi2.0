"use client";

import { useRouter } from "next/navigation";
import AgentsPage from "@/src/AgentsPage";

export default function AgentsRoute() {
  const router = useRouter();

  return (
    <div className="page-transition fade-in">
      <AgentsPage onClose={() => router.push('/command-hub')} />
    </div>
  );
}
