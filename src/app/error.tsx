"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  console.log(error.digest, "11")
  return (
    // global-error must include html and body tags
    <div className="flex items-center justify-center h-screen">
      <div>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
