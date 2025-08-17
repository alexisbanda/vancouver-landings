import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  it('should render the main heading', () => {
    render(<Contact />);
    
    // Find the heading by its text content, case-insensitive
    const headingElement = screen.getByText(/Contáctanos Hoy/i);
    
    // Assert that the element was found in the document
    expect(headingElement).not.toBeNull();
  });
});
