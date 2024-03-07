'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface Tool {
  id: string;
  title: string;
  url: string;
}

const Home: NextPage = () => {
  const [aiTools, setAiTools] = useState<Tool[]>([]);

  useEffect(() => {
    // Actual fetching data from your API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/api/entries', {
          headers: {
            Authorization:
              'Bearer NGM0MTFhMDljMjYxNTUzYmI2ODg4MDNhZmFhOTYzNGQ2NmFkZDdiZjBjYTY4ZmM1Y2Y3MWE3NjAxODY0YzhiZQ',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // eslint-disable-next-line no-underscore-dangle
        setAiTools(data._embedded.items);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('There was a problem with fetching AI Tools:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-grow bg-gray-100 px-4 sm:px-6 lg:px-8">
        <h1 className="mb-16 mt-20 text-center text-5xl font-bold">
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
        <div className="mt-8">
          {aiTools.length > 0 ? (
            aiTools.map((tool) => (
              <div
                key={tool.id}
                className="mb-4 rounded-lg bg-white p-4 shadow-lg"
              >
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {tool.url}
                  </a>
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">Loading AI Tools...</p>
          )}
        </div>
      </main>
    </div>
  );
};
export default Home;
