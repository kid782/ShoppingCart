const fetchOptions = {
  mode: "cors",
};

export async function getData(url) {
  try {
    const response = await fetch(url, fetchOptions);
    if (!response.ok) throw new Error("Something went wrong");
    const formattedResult = await response.json();
    return formattedResult;
  } catch (error) {
    console.log(error);
  }
}
