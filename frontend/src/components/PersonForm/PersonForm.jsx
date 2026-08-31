import { Link, useNavigate, useParams } from "react-router";
import { Icon } from "../Icon/Icon";
import "./PersonForm.css";
import { calculateAge, defaultList } from "../../utils/dateHelpers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personValidation } from "../../utils/personValidation";
import { useEffect } from "react";

function PersonForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = id !== undefined;

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

  useEffect(() => {
    if (isEditMode) {
      const savedPersons = localStorage.getItem("persons_list");

      if (savedPersons) {
        const currentList = JSON.parse(savedPersons);
        const personEdit = currentList.find((p) => p.id === Number(id));
        if (personEdit) {
          reset(personEdit);
        }
      }
    }
  }, [id, isEditMode, reset]);

  const onSubmit = (data) => {
    const savedPersons = localStorage.getItem("persons_list");
    let currentList = savedPersons ? JSON.parse(savedPersons) : defaultList;

    if (isEditMode) {
      currentList = currentList.map((person) =>
        person.id === Number(id)
          ? { ...person, ...data, age: computedAge }
          : person,
      );
    } else {
      const maxId =
        currentList.length > 0 ? Math.max(...currentList.map((p) => p.id)) : 99;

      const newPerson = {
        id: maxId + 1,
        ...data,
        age: computedAge,
      };

      currentList.push(newPerson);
    }

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
        {isEditMode ? "Edit Person" : "Add Person"}
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
          {isEditMode ? "Save changes" : "Add person"}
        </button>
      </form>
    </div>
  );
}

export default PersonForm;
