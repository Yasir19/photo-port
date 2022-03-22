import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import ContactForm from "..";

afterEach(cleanup)
describe('Contact componenet', () => {
    it('render', () => {
        render(<ContactForm/>)
    })
    it('match snapshot',() => {
        const{ asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders Contact Me',()=>{
        const{getByTestId} = render(<ContactForm/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    })
    it('renders submit button',()=>{
        const{getByTestId} = render(<ContactForm/>)
        expect(getByTestId('btag')).toHaveTextContent('Submit')
    })
})