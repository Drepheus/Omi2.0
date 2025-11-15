"use client";

import { useRouter } from "next/navigation";
import MediaStudio from "@/src/MediaStudio";

export default function MediaStudioPage() {
  const router = useRouter();

  return (
    <div className="page-transition fade-in">
      <MediaStudio onClose={() => router.back()} />
    </div>
  );
}
