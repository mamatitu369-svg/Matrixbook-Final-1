import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/Brand";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center p-6">
      <Brand />
      <div>
        <p className="font-mono text-primary text-sm mb-2">// 404</p>
        <h1 className="font-display text-5xl font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
      </div>
      <Button variant="hero" asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
}
