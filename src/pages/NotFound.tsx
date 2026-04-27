import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.warn("[Matrix AI] 404 — no route matched:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs tracking-widest text-primary mb-3">
          ERROR · 404
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
          Page not <span className="text-gradient">found</span>
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          The page <code className="font-mono">{location.pathname}</code> doesn't exist.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <Button asChild variant="hero">
            <Link to="/">
              <Home className="w-4 h-4" /> Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
