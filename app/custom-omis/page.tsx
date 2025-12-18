"use client";

import { useRouter } from "next/navigation";
import CustomOmis from "@/src/CustomOmis";

export default function CustomOmisPage() {
  const router = useRouter();

  return (
    <div className="page-transition fade-in">
      <CustomOmis onClose={() => router.push('/command-hub')} />
    </div>
  );
}
