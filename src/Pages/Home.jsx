import React, { useState, useEffect } from "react";
import Carditems from "../Components/Carditems";

const Home = () => {
  const [searchingProduct, setSearchingProduct] = useState("");
  const [vedios, setVedios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Page, setpage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://mimic-server-api.vercel.app/videos?_page=${Page}&_limit=4&q=${searchingProduct}`,
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setVedios(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Page, searchingProduct]);
  useEffect(() => {
    setpage(1);
  }, [searchingProduct]);

  if (loading) return <p className="text-center text-red-600">Loading....</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  return (
    <>
      <section className=" max-w-8xl mx-auto text-center px-6 py-20 bg-linear-to-r from-blue-400 to-violet-500 text-white relative">
        <input
          type="search"
          placeholder="Search"
          className="max-w-3xl w-full bg-white text-gray-600 px-3 py-2 outline-none placeholder:text-gray-600 rounded shadow mx-auto"
          onChange={(e) => setSearchingProduct(e.target.value)}
        />
        {vedios.length === 0 && (
          <p className="text-red-600">No results found</p>
        )}
        <Carditems vedios={vedios} />
        <div className="flex gap-10 items-center justify-center mx-auto">
          <button
            className={`px-3 py-2 my-10 rounded shadow cursor-pointer
    ${
      Page === 1
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-white text-blue-500 hover:bg-gray-100"
    }
  `}
            onClick={() => setpage((prev) => prev - 1)}
            disabled={Page === 1}
          >
            Prev
          </button>
          <button
            className="bg-white text-blue-500
          px-3 py-2 my-10 rounded shadow cursor-pointer"
            onClick={() => setpage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
