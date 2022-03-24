import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
// import { capitalizeFirstLetter } from '../../../utils/helpers'

const portrait = 
    {name:'Portraits', description:'Portraits of animals in my life'}

    afterEach(cleanup)
    describe('Gallery is rendeing', () => {
        it('renders',() => {
        render(<Gallery currentCategory={portrait}/>)
    })
    it('matches snapshot', () => {
        const{ asFragment } = render(<Gallery currentCategory={portrait} />)
        expect(asFragment()).toMatchSnapshot()
    })
    it('render',()=>{
        const{getByTestId} = render(<Gallery currentCategory={portrait}/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })
})