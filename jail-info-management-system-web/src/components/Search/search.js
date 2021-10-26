const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="inmate-search">
            <span className="visually-hidden">Search Inmate</span>
        </label>
        <input
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="inmate-search"
            placeholder="Search Inmate"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
)
    

export default SearchBar;