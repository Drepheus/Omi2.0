"use client";

import { useRouter } from "next/navigation";
import AIWorkflowsPage from "@/src/AIWorkflowsPage";

export default function WorkflowsRoute() {
  const router = useRouter();

  return (
    <div className="page-transition fade-in">
      <AIWorkflowsPage onClose={() => router.push('/command-hub')} />
    </div>
  );
}
