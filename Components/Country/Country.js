export default function CountryItem(props) {
  return (
    <select
      defaultValue={props.language}
      onChange={props.handleCountryChange}
      aria-label="Select language"
      className="text-sm rounded-md block w-28 p-1.5 bg-transparent text-white/80 border border-white/20 focus:border-white/40 focus:outline-none cursor-pointer"
    >
      <option value={"US"} className="bg-gray-800 text-white">English</option>
      <option value={"TR"} className="bg-gray-800 text-white">Türkçe</option>
      <option value={"DE"} className="bg-gray-800 text-white">Deutsch</option>
      <option value={"ES"} className="bg-gray-800 text-white">Español</option>
      <option value={"FR"} className="bg-gray-800 text-white">Français</option>
      <option value={"PT"} className="bg-gray-800 text-white">Português</option>
      <option value={"RU"} className="bg-gray-800 text-white">Русский</option>
    </select>
  );
}
