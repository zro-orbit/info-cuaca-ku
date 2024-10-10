export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          name="city"
          placeholder="Cari Kota"
          className="w-full p-4 rounded-full shadow-lg text-lg font-toystoss"
          required
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}