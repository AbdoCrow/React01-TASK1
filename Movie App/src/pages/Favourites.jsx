function Favourites() {
  return (
    <div className="favourites px-6 py-12">
      <section className="fvourites-grid">
      <h2 className="text-5xl font-bold text-center mb-20">Your Favourites</h2>
      </section>
      <section className="recommendations">
        <h2 className="text-5xl font-bold text-center mb-20">
          Top{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-6xl">
            {" "}
            10
          </span>{" "}
          Recommended{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Movies
          </span>{" "}
          For You
        </h2>
      </section>
    </div>
  );
}

export default Favourites;
