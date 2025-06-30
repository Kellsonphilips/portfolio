"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-red-600">500</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Something went wrong</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">An unexpected error has occurred. Please try again or return to the homepage.</p>
      <button onClick={reset} className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-2">Try Again</button>
      <a href="/" className="inline-block px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Go Home</a>
    </div>
  );
} 