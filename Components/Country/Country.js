export default function CountryItem(props) {
  return (
    <select
      defaultValue={props.language}
      onChange={props.handleCountryChange}
      className="text-sm rounded-md block w-28 p-1.5 bg-transparent text-white/80 border border-white/20 focus:border-white/40 focus:outline-none cursor-pointer"
    >
      <option value={"US"} className="bg-gray-800 text-white">English</option>
      <option value={"TR"} className="bg-gray-800 text-white">Türkiye</option>
      <option value={"GR"} className="bg-gray-800 text-white">Germany</option>
    </select>
  );
}
