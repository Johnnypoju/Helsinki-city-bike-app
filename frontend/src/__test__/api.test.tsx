import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import axios from 'axios';

describe('Journey list', () => {
    it("renders", async () => {
        
        axios.get = jest.fn().mockResolvedValueOnce(({
            data: {
                routes: [
                    {
                        id: 1,
                        departure_station_name: "Laajalahden aukio",
                        return_station_name: "Teljäntie",
                        distance: 2043,
                        duration: 500
                    }
                ],
                count: 1
            }

        }
        ));
        render(<App />);
        await Promise.resolve();
        await waitFor(() => {
            screen.getByText('..loading');
        }
        )
    })
})