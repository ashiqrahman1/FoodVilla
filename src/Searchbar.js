const Searchbar = () => {
  return (
    <div className="search-box">
      <div className="searchbar">
        <input type="text" placeholder="Search Your Food" />
        <div className="searchbar__icon">
          <button>
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
