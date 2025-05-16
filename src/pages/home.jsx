import MovieCard from "../components/movies";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    { id: 1, title: "Movie 1", release_date: "2023" },
    { id: 2, title: "Movie 2", release_date: "2023" },
    { id: 3, title: "Movie 3", release_date: "2023" },
    { id: 4, title: "Movie 4", release_date: "2023" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search_form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search_input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>

      <div className="movies_grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchTerm) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
