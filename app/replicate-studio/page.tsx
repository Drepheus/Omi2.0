"use client";

import { useRouter } from "next/navigation";
import ReplicateStudio from "@/src/ReplicateStudio";

export default function ReplicateStudioPage() {
  const router = useRouter();

  return (
    <div className="page-transition fade-in">
      <ReplicateStudio onClose={() => router.back()} />
    </div>
  );
}
