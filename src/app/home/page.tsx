import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-grow bg-gray-100 px-4 sm:px-6 lg:px-8">
        <h1 className="mb-14 mb-2 mt-20 text-center text-5xl font-bold">
          AI Tools Directory
        </h1>
        <input
          type="text"
          placeholder="Find best AI tools for specific tasks in 2024"
          className="mx-auto mb-2 block w-full max-w-md rounded-md border-2 border-orange-300 p-2 text-xs"
        />
        <p className="mb-4 text-center text-sm text-gray-500">
          Search 9000+ AI Tools & Agents
        </p>
        <div className="mb-2 mt-8 flex flex-wrap justify-center gap-2" />
        <div className="flex flex-wrap justify-center gap-2">
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Design
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Audio
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Video
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Games
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Financial
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Legal
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Well-Being & Health
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Lifestyle
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Education
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Data Analysis
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Programming
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Writing
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Images & Photos
          </button>
          <button className="bg-white px-3 py-1 text-xs font-semibold text-gray-500">
            Productivity
          </button>
        </div>
      </main>
    </div>
  );
};
export default Home;
