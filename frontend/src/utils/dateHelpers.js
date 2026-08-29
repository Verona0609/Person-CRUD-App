export const calculateAge = (birthDateString) => {
  if (!birthDateString) return "";
  /*  if (isNaN(age)) return "-"; */

  const today = new Date();
  const birthDate = new Date(birthDateString);

  const age = today.getFullYear() - birthDate.getFullYear();

  return age;
};
