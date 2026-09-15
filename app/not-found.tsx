import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-light)] flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Page Not Found</h2>
      <p className="text-[var(--color-text-light)] text-center mb-8 max-w-md">
        Looks like you've taken a wrong turn. Let's get you back to where you want to go.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-[var(--color-accent)] text-white font-medium rounded hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </main>
  );
}
