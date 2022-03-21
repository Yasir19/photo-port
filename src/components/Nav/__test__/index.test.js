import React from 'react'
import {render, cleanup, getByLabelText} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '..'

// configure the test 
afterEach(cleanup)

describe('Nav componenet', () => {
    // basleline
    it('render', () => {
        render(<Nav />)
    });
    //snapshot
    it('matches snapshot', ()=>{
        const { asFragment } = render(<Nav />);
        expect(asFragment).toMatchSnapshot();
    })
})
describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        const {getByLabelText} = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})
describe('link are visible', () =>{
    it('inserts text in to the link',() => {
        const{getByTestId} = render(<Nav />)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
})