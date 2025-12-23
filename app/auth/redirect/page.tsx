"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Check for stored redirect URL from login page
    const storedRedirect = sessionStorage.getItem('authRedirect');
    sessionStorage.removeItem('authRedirect');
    
    // Redirect to stored URL or default to command-hub
    const redirectTo = storedRedirect || '/command-hub';
    router.replace(redirectTo);
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60">Redirecting...</p>
      </div>
    </div>
  );
}
