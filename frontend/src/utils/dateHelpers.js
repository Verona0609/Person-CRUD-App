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
    firstname: "Veronuka",
    lastname: "Dyka",
    email: "dikaya.nika06@gmail.com",
    birthdate: "2001-09-06",
    age: calculateAge("2001-09-06"),
  },
  {
    id: 101,
    firstname: "Max",
    lastname: "Jungo",
    email: "max.jungo@gmail.com",
    birthdate: "1996-06-14",
    age: calculateAge("1996-06-14"),
  },
  {
    id: 102,
    firstname: "Samuel",
    lastname: "Schmidt",
    email: "samuel.schmidt@gmail.com",
    birthdate: "1976-03-23",
    age: calculateAge("1969-03-23"),
  },
];
