import React from 'react'
import {mount, shallow} from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import Header from '../../components/Header'
import { create } from 'react-test-renderer'

describe('<Header />', () => {
    test('Render del componente header', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>,
    
        )
        expect(header.length).toEqual(1)
    })
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>,
        )
        expect(header.find('.Header-title').text()).toEqual("Challenge")
    })
})

describe('Snapshot para Header', () => {
    test('Comprobar el snapshot de header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>,
        )
        expect(header.toJSON()).toMatchSnapshot()
    })
})