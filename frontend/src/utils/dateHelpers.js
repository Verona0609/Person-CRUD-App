export const calculateAge = (birthDateString) => {
  if (!birthDateString) return "";

  const today = new Date();
  const birthDate = new Date(birthDateString);

  const age = today.getFullYear() - birthDate.getFullYear();
  if (isNaN(age)) return "-";
  return age;
};

export const defaultList = [
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
