export const fetchMenu = async () => {
  try {
    const data = await fetch("http://localhost:8080/menu");
    if (!data.ok) {
      throw Error;
    }
    const res = await data.json();
    return res;
  } catch (error) {
    throw error;
  }
};
