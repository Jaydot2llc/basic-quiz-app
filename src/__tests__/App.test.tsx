import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('should smoke test', () => {
        expect(true).toBeTruthy();
    });
    it('should render App', () => {
        render(<App />);
    });
});