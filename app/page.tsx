export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-4xl md:text-6xl font-serif mb-4">
        Letters by Agan
      </h1>

      <p className="text-gray-600 text-lg md:text-xl mb-10 italic">
        “Words that stay.”
      </p>

      <div className="max-w-xl text-left space-y-6">
        
        <div>
          <h2 className="text-xl font-medium">
            The Silence Between Us
          </h2>
          <p className="text-sm text-gray-500">April 2026</p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            A Letter I Never Sent
          </h2>
          <p className="text-sm text-gray-500">April 2026</p>
        </div>

      </div>

    </main>
  );
}