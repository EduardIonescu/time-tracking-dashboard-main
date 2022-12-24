const url = "./data.json";

// Get buttons
const timeframeButtons = document.querySelectorAll(".container-bottom button");

// Colors
const backgroundColors = [
	"var(--orange)",
	"var(--soft-blue)",
	"var(--light-red)",
	"var(--lime-green)",
	"var(--violet)",
	"var(--soft-orange)",
];

// this changes the button timeframe into what's shown on screen.
const getTimeframe = {
	daily: "Yesterday",
	weekly: "Last Week",
	monthly: "Last Month",
};

// Fetch data
async function getData() {
	try {
		let res = await fetch(url).then((res) => res.json());
		return res;
	} catch (err) {
		console.log(err);
	}
}

// timeframe is the one passed by buttons
async function createSections(timeframe) {
	const data = await getData();

	data.map((d, index) => {
		const title = d.title;
		const sectionName = title.toLowerCase().split(" ").join("-");
		const selectedTimeframe = d.timeframes[timeframe];
		const currentHours = selectedTimeframe.current,
			previoushours = selectedTimeframe.previous;

		createSection(
			backgroundColors[index],
			sectionName,
			title,
			getTimeframe[timeframe],
			currentHours,
			previoushours
		);
	});
}

// Create new sections
function createSection(
	backgroundColor,
	sectionName,
	title,
	timeframe,
	currentHours,
	previousHours
) {
	const main = document.querySelector("main");

	const section = document.createElement("section");
	section.classList.add("section-active");
	section.style.backgroundColor = backgroundColor;

	const image = document.createElement("img");
	image.classList.add("image-bg");
	image.src = `./images/icon-${sectionName}.svg`;
	image.alt = `${sectionName} icon`;

	section.appendChild(image);

	const article = document.createElement("article");
	article.classList.add("container-fg");

	const divTop = document.createElement("div");
	divTop.classList.add("top");

	const h2Top = document.createElement("h2");
	h2Top.classList.add("subtitle");
	h2Top.innerText = `${title}`;

	const imageEllipsis = document.createElement("img");
	imageEllipsis.classList.add("image-ellipsis");
	imageEllipsis.src = "./images/icon-ellipsis.svg";
	imageEllipsis.alt = "ellipsis image";

	divTop.append(h2Top, imageEllipsis);

	const divBottom = document.createElement("div");
	divBottom.classList.add("bottom");

	const h2Bottom = document.createElement("h2");
	h2Bottom.classList.add("hours");
	h2Bottom.innerText = `${currentHours}hrs`;

	const pBottom = document.createElement("p");
	pBottom.classList.add("previous-hours");
	pBottom.innerText = `${timeframe} - ${previousHours}hrs`;

	divBottom.append(h2Bottom, pBottom);

	article.append(divTop, divBottom);
	section.appendChild(article);

	main.appendChild(section);
}

// Delete previous sections so they don't stack infinitely
function deleteSections() {
	const sections = document.querySelectorAll(".section-active");
	if (sections) {
		sections.forEach((section) => {
			section.parentNode.removeChild(section);
		});
	}
}

// eventListener for each button
timeframeButtons.forEach((timeframeButton) => {
	timeframeButton.addEventListener("click", () => {
		deleteSections();
		createSections(timeframeButton.value);
	});
});

// Create sections on page load, based on weekly value
createSections(timeframeButtons[1].value);
