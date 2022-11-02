import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('should contain element', () => { 
    render(<NavBar />)
    const webshopElement = screen.getByTestId('webshop');
    expect(webshopElement).toBeInTheDocument();
 })