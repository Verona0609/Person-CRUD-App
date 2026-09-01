import { Link, useNavigate } from "react-router";
import { Icon } from "../Icon/Icon";
import "./PersonTable.css";
import { calculateAge, defaultList } from "../../utils/dateHelpers";
import { useState } from "react";
import DeletePersonModal from "../DeleteModal/Modal";

function PersonsTable() {
  const navigate = useNavigate();

  const [persons, setPersons] = useState(() => {
    const saved = localStorage.getItem("persons_list");
    return saved ? JSON.parse(saved) : defaultList;
  });

  const [personToDelete, setPersonToDelete] = useState(null);

  const handleDelete = () => {
    if (!personToDelete) return;

    const updated = persons.filter((person) => person.id !== personToDelete.id);
    setPersons(updated);
    localStorage.setItem("persons_list", JSON.stringify(updated));

    setPersonToDelete(null);
  };

  return (
    <div>
      <div className="header">
        <h1 className="table-title">
          <Icon id="icon-user" size={24} height={24} className="icon-user" />
          All Persons({persons.length})
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
          {persons.map((person, index) => (
            <tr key={person.id}>
              <td>
                <strong>{index + 100}</strong>
              </td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.email || "-"}</td>
              <td>{person.birthdate}</td>
              <td>{calculateAge(person.birthdate)}</td>
              <td>
                <button
                  className="btn-action btn-edit"
                  onClick={() => {
                    console.log("Клікнули на ID:", person.id);
                    navigate(`/personlist/edit/${person.id}`);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn-action btn-delete"
                  onClick={() => setPersonToDelete(person)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeletePersonModal
        isOpen={Boolean(personToDelete)}
        person={personToDelete}
        onClose={() => setPersonToDelete(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default PersonsTable;
