import { Search } from "lucide-react";

export function SearchForm() {
  return (
    <form className="grid md:grid-cols-4 gap-4">
     
      <div className="flex flex-col gap-2">
        <label htmlFor="">Search</label>
        <input
          className="py-2 outline-none border-b border-slate-100"
          type="text"
          placeholder="Search Places"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="">Destination</label>
        <select
          id="destination"
          className="py-2 outline-none border-b border-slate-100"
        >
          <option value="volvo">India</option>
          <option value="saab">America</option>
          <option value="opel">Dubai</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="">Durations</label>
        <select
          id="durations"
          className="py-2 outline-none border-b border-slate-100"
        >
          <option value="volvo">1 Day</option>
          <option value="saab">2 Day</option>
          <option value="opel">2-4 Day</option>
        </select>
      </div>

      <button className="bg-pink-500 text-white py-4 rounded-md md:-my-10 md:-mr-10 flex justify-center items-center md:flex-col gap-2">
        <Search size={20} /> Search
      </button>
    </form>
  );
}
