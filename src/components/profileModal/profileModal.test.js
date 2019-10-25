import React from "react";
import ProfileModal from "./profileModal";
import { render } from "@testing-library/react";

test("check ProfileModal is rendered", () => {
	const dummyProfile = {
		name: "Test",
		job: "Tester",
		office: "Testing Office"
	};
	render(<ProfileModal>{dummyProfile}</ProfileModal>);
});
