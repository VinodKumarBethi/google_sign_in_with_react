import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MyGoogle from '../Components/MyGoogle';
import '@testing-library/jest-dom';

//mocked Google objects
const googleid = {
    initialize: jest.fn(),
    renderButton: jest.fn(),
    prompt: jest.fn()
}
window.google = {
    accounts: {
        id: googleid
    }
}

describe('Unit test-1', () => {
    test("renders MyGoogle component correctly", () => {
        const mygoogle = render(
            <MemoryRouter>
                <MyGoogle />
            </MemoryRouter>
        );
        const pageTitle = mygoogle.getByText('Login Here')
        expect(pageTitle).toBeInTheDocument()
    })
})