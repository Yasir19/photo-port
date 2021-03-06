import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '..'
const categories = [
    {name:'portraits', description:'Portraits of animals in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn()


// configure the test 
afterEach(cleanup)

describe('Nav componenet', () => {
    // basleline
    it('render', () => {
        render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
             />)
    });
    //snapshot
    it('matches snapshot', ()=>{
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
             />);
        expect(asFragment).toMatchSnapshot();
    })
})
describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        const {getByLabelText} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
             />);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})
describe('link are visible', () =>{
    it('inserts text in to the link',() => {
        const{getByTestId} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
             />)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
})