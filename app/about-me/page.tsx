import Navbar from '@/components/me/navbar';

export default function AboutMePage() {
  return (
    <div>
      <Navbar className="bg-gray-400" />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p>Welcome to my about page.</p>
        </div>
      </div>
    </div>
  );
}
