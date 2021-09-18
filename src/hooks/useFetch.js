let result = null;

export const fetchPeoples = async (ed) => {
  const res = await fetch(ed);
  result = res.json();
  return result;
};
