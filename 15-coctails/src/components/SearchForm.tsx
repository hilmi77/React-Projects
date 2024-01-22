import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchValue.current?.focus();
  }, []);

  const searchCoctail = () => {
    if (searchValue.current) {
      setSearchTerm(searchValue.current?.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite coctail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCoctail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
