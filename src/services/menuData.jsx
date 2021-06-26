export const fetchMenu = async () => {
  const data = await fetch("http://localhost:8080/menu");
  const res = await data.json();
  return res;
};
