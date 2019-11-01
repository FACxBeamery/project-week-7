import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, cleanup, fireEvent } from "@testing-library/react";
import MainContent from "./components/mainContent/mainContent";


it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe("form works as expected", () => {
	const { getByText, getByLabelText } = render(<App />);

	const searchbar = getByLabelText("Search for a topic:");
	const submitButton = getByText("Submit");
	fireEvent.change(searchbar, {
		target: { value: "React" }
	});

	fireEvent.click(submitButton);

	test("on submit people interested in react are seen", () => {
		getByText("Martha Lambert");
	});

afterEach(cleanup);
//stops event listeners after test

describe(" main content rendering ", () => {
	const categoriesList = [
		"frontend",
		"backend",
		"people",
		"marketing",
		"non-work"
	];
	let topic = null;
	const setTopic = (newTopic) => {
		topic = newTopic;
	};
	test("main content renders categories", () => {
		const { getByText, getByLabelText } = render(<App />);
		categoriesList.forEach((category) =>
			getByText(capitalizeFirstLetter(category))
		);
	});
	test("check clicking on category shows topic ", () => {
		const { getByText, getByLabelText } = render(<App />);
		const categoryButton = getByText("Frontend");
		fireEvent.click(categoryButton);
		getByText("Micro frontends");
		getByText("React");
	});

	test("check clicking on back button goes back to category view", () => {
		const { getByText, getByTestId } = render(<App />);
		const categoryButton = getByText("Frontend");
		fireEvent.click(categoryButton);
		const backButton = getByTestId("back-button");
		fireEvent.click(backButton);
		getByText("Category view: select a category to see more");
	});

	test("clicking on topic goes to person view", () => {
		const { getByText, getByTestId } = render(
			<MainContent
				topic={topic}
				setTopic={setTopic}
				categoriesList={categoriesList}
			/>
		);
		const categoryButton = getByText("Frontend");
		fireEvent.click(categoryButton);
		const topicButton = getByText("Micro frontends");
		fireEvent.click(topicButton);
		getByText("Martha Lambert");
	});

	// categoriesList.forEach((category) =>
	// 	getByText(capitalizeFirstLetter(category))
	// );

});
