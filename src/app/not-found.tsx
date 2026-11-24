import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-5 sm:px-6">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Esta página no existe.</h1>
      <Link href="/" className="mt-6 underline decoration-accent decoration-2 underline-offset-4">
        Volver al inicio
      </Link>
    </main>
  );
}
