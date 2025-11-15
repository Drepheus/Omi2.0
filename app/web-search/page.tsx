"use client";

import { useRouter } from "next/navigation";
import WebSearch from "@/src/WebSearch";

export default function WebSearchPage() {
  const router = useRouter();

  return (
    <div className="page-transition fade-in">
      <WebSearch onClose={() => router.back()} />
    </div>
  );
}
