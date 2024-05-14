function getData() {
  const data = JSON.parse(localStorage.getItem("current"));
  if (data) {
    return data;
  }
  return {};
}

function setData(data) {
  localStorage.setItem("current", JSON.stringify(data));
}

export { getData, setData };
