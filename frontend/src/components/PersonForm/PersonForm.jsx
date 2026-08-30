import { Link, useNavigate } from "react-router";
import { Icon } from "../Icon/Icon";
import "./PersonForm.css";
import { calculateAge } from "../../utils/dateHelpers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personValidation } from "../../utils/personValidation";

function PersonForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personValidation),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      birthdate: "",
      comment: "",
    },
  });

  const birthdateValue = watch("birthdate");
  const computedAge = birthdateValue ? calculateAge(birthdateValue) : "";

  const onSubmit = (data) => {
    const newPerson = {
      id: Date.now(),
      ...data,
      age: computedAge,
    };

    const savedPersons = localStorage.getItem("persons_list");

    const currentList = savedPersons
      ? JSON.parse(savedPersons)
      : [
          {
            id: 100,
            firstname: "Hans",
            lastname: "Müller",
            email: "hans.müller@gmail.com",
            birthdate: "2001-05-21",
            age: 24,
          },
          {
            id: 101,
            firstname: "Hans",
            lastname: "Müller",
            email: "",
            birthdate: "1975-06-14",
            age: 51,
          },
          {
            id: 102,
            firstname: "Hans",
            lastname: "Müller",
            email: "hans.müller@gmail.com",
            birthdate: "1995-03-23",
            age: 31,
          },
        ];

    currentList.push(newPerson);

    localStorage.setItem("persons_list", JSON.stringify(currentList));

    reset();

    navigate("/personlist");
  };

  return (
    <div className="form-container">
      <h2 className="title-form">
        <Link to="/personlist">
          <Icon id="icon-user" size={24} height={24} className="icon-user" />
        </Link>
        Add Person
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-add">
        <div>
          <input
            className="form-input"
            type="text"
            placeholder="Firstname*"
            {...register("firstname")}
          />

          {errors.firstname && (
            <p style={{ color: "red" }}>{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <input
            className="form-input"
            type="text"
            placeholder="Lastname*"
            {...register("lastname")}
          />

          {errors.lastname && (
            <p style={{ color: "red" }}>{errors.lastname.message}</p>
          )}
        </div>
        <div>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div className="birth-date-container">
          <input
            className="birth-input"
            type="date"
            placeholder="Birthdate*"
            {...register("birthdate")}
          />

          {errors.birthdate && (
            <p style={{ color: "red" }}>{errors.birthdate.message}</p>
          )}
        </div>

        <input
          className="form-input"
          type="number"
          placeholder="Age"
          value={computedAge}
          readOnly
        />
        <textarea
          className="form-comment"
          placeholder="Comment"
          {...register("comment")}
        ></textarea>
        <button className="btn-form" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default PersonForm;
