import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
import { capitalizeFirstLetter } from '../../../utils/helpers'

const portrait = [
    {name:'Portraits', description:'Portraits of animals in my life'}
]

    afterEach(cleanup)
    describe('Gallery is rendeing', () => {
        it('renders',() => {
        render(<Gallery currentCategory={capitalizeFirstLetter(portrait)}/>)
    })
    it('matches snapshot', () => {
        const{ asFragment } = render(<Gallery currentCategory={capitalizeFirstLetter(portrait)} />)
        expect(asFragment()).toMatchSnapshot()
    })
})