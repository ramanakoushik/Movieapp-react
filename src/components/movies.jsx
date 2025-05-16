function Moviecard({ movie }) {
  function handleClick() {
    alert("clicked");
  }

  return (
    <div className="moviecard">
      <div className="movie_poster">
        <img src={movie.url} alt={movie.Title} />
        <div className="movie_overlay">
          <button className="fav_button" onClick={handleClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default Moviecard;
