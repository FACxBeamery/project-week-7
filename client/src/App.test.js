import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, cleanup, fireEvent } from "@testing-library/react";

import capitalizeFirstLetter from "../src/utils/capitalizeFirstLetter";
import dummyTopics from "./dummyTopics"
import dummyPeople from "./dummyPeople"

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
afterEach(cleanup);


test("form works as expected", () => {
	const { getByText, getByLabelText } = render(<App />);

	const searchbar = getByLabelText("Search for a topic:");
	const submitButton = getByText("Search Topics");

	fireEvent.change(searchbar, {
		target: { value: "React" }
	});

	fireEvent.click(submitButton);
	getByText("Martha Lambert");
});

test("Searchbar works as expected", () => {
	const { getByText, getByLabelText } = render(<App />);
	const peopleTextInput = getByLabelText("Search for a person:");
	const searchPeopleSubmit = getByText("Search");
	fireEvent.change(peopleTextInput, {
		target: { value: "Lyndsey Scott" }
	});
	fireEvent.click(searchPeopleSubmit);
	getByText("Lyndsey Scott");
});


describe(" main content rendering ", () => {
	jest.mock("./utils/APIcalls/getPeopleData")
	const getPeopleData = require("./utils/APIcalls/getPeopleData")
	getPeopleData.mockImplementation(() => dummyPeople)
	jest.mock("./utils/APIcalls/getTopicData")
	const getTopicData = require("./utils/APIcalls/getTopicData")
	getTopicData.mockImplementation(() => dummyTopics)

	// const categoriesList = [
	// 	"frontend",
	// 	"backend",
	// 	"people",
	// 	"marketing",
	// 	"non-work"
	// ];
	// let topic = null;
	// const setTopic = (newTopic) => {
	// 	topic = newTopic;
	// };
	test("main content renders categories", () => {
		const { getByText } = render(<App />);
		categoriesList.forEach((category) =>
			getByText(capitalizeFirstLetter(category))
		);
	});
	test("check clicking on category shows topic ", () => {
		const { getByText } = render(<App />);
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

	categoriesList.forEach((category) =>
		getByText(capitalizeFirstLetter(category))
	);
});
