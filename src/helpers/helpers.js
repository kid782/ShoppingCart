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

export function getFiveRandom(array) {
	const fiveRandom = [];
	for (let i = 0; i < 5; i++) {
		let randomIndex = randomIntFromInterval(0, array.length - 1);
		const currentItem = array[randomIndex];
		if (!fiveRandom.includes(currentItem)) {
			fiveRandom.push(currentItem)
		} else {
			--i;
		}
	}
	return fiveRandom;
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}