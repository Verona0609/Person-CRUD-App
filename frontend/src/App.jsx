import { Route, Routes } from "react-router";
import PersonsTable from "./components/PersonsTable/PersonTable";
import "./index.css";
import PersonForm from "./components/PersonForm/PersonForm";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PersonsTable />} />
        <Route path="/personlist" element={<PersonsTable />} />
        <Route path="/personlist/add" element={<PersonForm />} />
        <Route path="/personlist/edit/:id" element={<PersonForm />} />
      </Routes>
    </div>
  );
};

export default App;
