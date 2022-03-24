import React from 'react'
import { render, cleanup, fireEvent } from'@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

afterEach(cleanup)
const currentPhoto ={ 
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index:1
};

const mockToggleModal = jest.fn();


describe('content componenet', () => {
    it('render', () => {
        render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />)
    })
    it('matches snapshot Dom node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        expect(asFragment).toMatchSnapshot()
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
 const {getByText} = render(<Modal
 onClose={mockToggleModal}
 currentPhoto={currentPhoto}
 />)
 fireEvent.click(getByText('Close the Picture'));
 expect(mockToggleModal).toHaveBeenCalledTimes(1)
    });
  }) 
