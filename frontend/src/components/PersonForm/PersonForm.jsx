import { Link } from "react-router";
import { Icon } from "../Icon/Icon";
import "./PersonForm.css";
import { calculateAge } from "../../utils/dateHelpers";
import { useState } from "react";

function PersonForm() {
  const [age, setAge] = useState("");

  const calculatedAge = (e) => {
    const selectedDate = e.target.value;
    const result = calculateAge(selectedDate);

    setAge(result);
  };
  return (
    <div className="form-container">
      <h2 className="title-form">
        {" "}
        <Link to="/personlist">
          <Icon id="icon-user" size={24} height={24} className="icon-user" />
        </Link>
        Add Person
      </h2>
      <form className="form-add">
        <input className="form-input" type="text" placeholder="Firstname*" />
        <input className="form-input" type="text" placeholder="Lastname*" />
        <input className="form-input" type="email" placeholder="Email" />
        <div className="birth-date-container" onChange={calculatedAge}>
          <input className="birth-input" type="date" placeholder="Birthdate*" />
          {/*  <Icon id="icon-calendar" size={18} height={18} /> */}
        </div>

        <input
          className="form-input"
          type="number"
          placeholder="Age"
          value={age}
          readOnly
        />
        <textarea className="form-comment" placeholder="Comment"></textarea>
        <button className="btn-form">Save</button>
      </form>
    </div>
  );
}
export default PersonForm;
