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
});
