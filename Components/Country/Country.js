export default function CountryItem(props) {
  return (
    <select
      defaultValue={props.language}
      onChange={props.handleCountryChange}
      className="border border-gray-300 text-sm rounded-md block w-40 p-2">
      <option value={"US"}>English</option>
      <option value={"TR"}>Türkiye</option>
      <option value={"GR"}>Germany</option>
    </select>
  );
}
