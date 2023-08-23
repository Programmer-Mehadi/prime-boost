import { To, useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  function onChange(event: { target: { value: To } }) {
    navigate(event.target.value);
  }
  return (
    <section className="bg-MidNight border-b border-slate-200 px-5 py-2">
      <div className="flex gap-4 flex-wrap justify-between items-center">
        <p className="font-NunitoSans text-white">Change Dropdown for page</p>
        <select
          className="select rounded-[5px] select-sm select-bordered w-full max-w-[200px]"
          onChange={onChange}
        >
          <option disabled selected>
            Select a page
          </option>
          <option value="/landing-page/corporate">Han Solo</option>
        </select>
      </div>
    </section>
  );
};

export default TopBar;
