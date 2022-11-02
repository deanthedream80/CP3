import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('test', () => { 
    expect(true).toBe(true);
 });

 test('should render component', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('meepletown');
    expect(homeElement).toBeInTheDocument();
 });

 test('should have text', () => {
    render(<Home />);
    const homeElement = screen.queryByTestId('meepletown');
    expect(homeElement).toHaveTextContent('MeepleTown');
 });