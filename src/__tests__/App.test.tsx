import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
    it('renders without crashing', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByText(/Test Page/i)).toBeInTheDocument();
        });
    });
});
