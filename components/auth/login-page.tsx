"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "@/lib/auth-client";
import { useGuestMode } from "@/context/guest-mode-context";

export function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/command-hub';
  const { data: session, isPending } = useSession();
  const { setGuestMode } = useGuestMode();
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      router.replace(redirectTo);
    }
  }, [router, session, redirectTo]);

  const signInWithGoogle = async () => {
    setAuthError(null);
    try {
      await signIn.social({
        provider: "google",
        callbackURL: redirectTo,
      });
    } catch (err: any) {
      console.error("Error signing in with Google:", err);
      setAuthError(err.message || "Failed to initiate Google sign-in.");
    }
  };

  const signInWithGithub = async () => {
    setAuthError(null);
    try {
      await signIn.social({
        provider: "github",
        callbackURL: redirectTo,
      });
    } catch (err: any) {
      console.error("Error signing in with GitHub:", err);
      setAuthError(err.message || "Failed to initiate GitHub sign-in.");
    }
  };

  const handleGuestMode = () => {
    setGuestMode(true);
    router.push(redirectTo);
  };

  if (isPending) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <div className="loading-spinner" />
            <p className="loading-text">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-background-blur" />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome to Omi AI</h1>
            <p className="login-subtitle">Sign in to deploy & execute persistent AI agents</p>
          </div>

          {authError && (
            <div style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '1rem', textAlign: 'center' }}>
              {authError}
            </div>
          )}

          <div className="login-buttons">
            <button onClick={signInWithGoogle} className="login-google-btn">
              <svg
                className="google-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
              Continue with Google
            </button>

            <button onClick={signInWithGithub} className="login-google-btn" style={{ background: '#24292e', color: '#ffffff', marginTop: '0.75rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>

            <button onClick={handleGuestMode} className="login-guest-btn">
              Continue as Guest
            </button>
          </div>

          <div className="login-footer">
            <p className="login-info">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
