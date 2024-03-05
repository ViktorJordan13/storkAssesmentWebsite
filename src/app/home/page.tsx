import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed left-0 right-0 top-0 z-10 bg-gray-100 px-4 py-6 text-center shadow-md">
        <h1 className="mb-2 text-4xl font-bold">AI Tools Directory</h1>
        <input
          type="text"
          placeholder="Find best AI tools for specific tasks in 2024"
          className="mx-auto mb-2 mt-12 w-full max-w-4xl rounded-md border-2 border-orange-300 p-2 text-xs"
        />
        <p className="mb-4 text-sm text-gray-600">
          Search 9000+ AI Tools & Agents
        </p>
        <div className="mb-2 mt-8 flex flex-wrap justify-center gap-2">
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Design
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Audio
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Video
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Games
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Financial
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Legal
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Well-Being & Health
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Lifestyle
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Education
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Data Analysis
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Programming
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Writing
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Images & Photos
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow">
            Productivity
          </button>
        </div>
      </div>

      <div className="pt-60" />
    </div>
  );
};
export default Home;
