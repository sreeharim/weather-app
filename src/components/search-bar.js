import React from "react";

const SearchBar = () => {
  const { searchBoxStyle, searchBarStyle } = styles;
  return (
    <form>
      <div class="form-inline" style={searchBarStyle}>
        <input
          class="form-control"
          style={searchBoxStyle}
          type="text"
          placeholder="Search.."
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

const styles = {
  searchBarStyle: {
    marginTop: 20
  },
  searchBoxStyle: {
    width: 400,
    marginRight: 10
  }
};

export default SearchBar;
