import React from "react";
// import render function to render the componenet
// import cleanup function to remove componenet from the DOM to
//prevent memory leaking
import { render, cleanup } from "@testing-library/react";
// just dom package
import "@testing-library/jest-dom/extend-expect";
//import about
import About from "..";

// configure the testing environment
// ensure there will be no left over memeory data to give us false result
afterEach(cleanup);

describe("About componenet", () => {
  // first test to verify that the componenet is rendering
  it("render", () => {
    // call back function to runder the tset
    render(<About />);
  });
  // second test compare snapshots of the dom
  it("matches snapshot DOM node structure", () => {
    // return a snapshot of the About component
    const { asFragment } = render(<About />);
    // ensure the expacted and the outcome are matching
    expect(asFragment()).toMatchSnapshot();
  });
});
