// import React from "react";
// import MainContent from "./MainContent";
// import App from "../../App";
// import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

// import { render, cleanup, fireEvent } from "@testing-library/react";

// afterEach(cleanup);
// describe(" main content rendering ", () => {
// 	const categoriesList = [
// 		"frontend",
// 		"backend",
// 		"people",
// 		"marketing",
// 		"non-work"
// 	];
// 	let topic = null;
// 	const setTopic = (newTopic) => {
// 		topic = newTopic;
// 	};
// 	test("main content renders categories", () => {
// 		const { getByText, getByLabelText } = render(
// 			<MainContent
// 				topic={topic}
// 				setTopic={setTopic}
// 				categoriesList={categoriesList}
// 			/>
// 		);
// 		categoriesList.forEach((category) =>
// 			getByText(capitalizeFirstLetter(category))
// 		);
// 	});
// 	test("check clicking on category shows topic ", () => {
// 		const { getByText, getByLabelText } = render(
// 			<MainContent
// 				topic={topic}
// 				setTopic={setTopic}
// 				categoriesList={categoriesList}
// 			/>
// 		);
// 		const categoryButton = getByText("Frontend");
// 		fireEvent.click(categoryButton);
// 		getByText("Micro frontends");
// 		getByText("React");
// 	});

// 	test("check clicking on back button goes back to category view", () => {
// 		const { getByText, getByTestId } = render(
// 			<MainContent
// 				topic={topic}
// 				setTopic={setTopic}
// 				categoriesList={categoriesList}
// 			/>
// 		);
// 		const categoryButton = getByText("Frontend");
// 		fireEvent.click(categoryButton);
// 		const backButton = getByTestId("back-button");
// 		fireEvent.click(backButton);
// 		getByText("Category view: select a category to see more");
// 	});

// 	test("clicking on topic goes to person view", () => {
// 		const { getByText, getByTestId } = render(
// 			<MainContent
// 				topic={topic}
// 				setTopic={setTopic}
// 				categoriesList={categoriesList}
// 			/>
// 		);
// 		const categoryButton = getByText("Frontend");
// 		fireEvent.click(categoryButton);
// 		const topicButton = getByText("Micro frontends");
// 		fireEvent.click(topicButton);
// 		getByText("Martha Lambert");
// 	});

// 	// categoriesList.forEach((category) =>
// 	// 	getByText(capitalizeFirstLetter(category))
// 	// );
// });
