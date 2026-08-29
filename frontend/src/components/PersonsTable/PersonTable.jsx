import { Link } from "react-router";
import { Icon } from "../Icon/Icon";
import "./PersonTable.css";
import { calculateAge } from "../../utils/dateHelpers";

function PersonsTable() {
  const mockPersons = [
    {
      id: 100,
      firstname: "Hans",
      lastname: "Müller",
      email: "hans.müller@gmail.com",
      birthdate: "2001-05-21",
      age: calculateAge("2001-05-21"),
    },
    {
      id: 101,
      firstname: "Hans",
      lastname: "Müller",

      birthdate: "1975-06-14",
      age: calculateAge("1975-06-14"),
    },
    {
      id: 102,
      firstname: "Hans",
      lastname: "Müller",
      email: "hans.müller@gmail.com",
      birthdate: "1995-03-23",
      age: calculateAge("1995-03-23"),
    },
  ];
  return (
    <div>
      <div className="header">
        <h1 className="table-title">
          <Icon id="icon-user" size={24} height={24} className="icon-user" />
          All Persons(amount)
        </h1>
        <Link to="/personlist/add">
          <Icon id="icon-user-plus" size={24} height={24} className="btn-add" />
        </Link>
      </div>
      <table className="table-container">
        <thead className="custom-table">
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Age</th>
            <th>Commands</th>
          </tr>
        </thead>
        <tbody className="custom-table">
          {mockPersons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.email || "-"}</td>
              <td>{person.birthdate}</td>
              <td>{calculateAge(person.birthdate)}</td>
              <td>
                <button className="btn-action btn-edit">Edit</button>
                <button className="btn-action btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonsTable;
