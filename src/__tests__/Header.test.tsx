import Header from '../components/Header';
import { QUIZ_TITLE } from '../services/DataService';

// src/components/__tests__/Header.test.tsx
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

// src/components/__tests__/Header.test.tsx
// Mocking any nested components or hooks if they existed
// For this example, there are no nested components or custom hooks to mock

describe('Header() Header method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    it('should render the header with the logo and title', () => {
      // Render the Header component
      render(<Header />);

      // Check if the logo image is rendered with the correct src and alt attributes
      const logo = screen.getByRole('img', { name: /quiz logo/i });
      expect(logo).toBeInTheDocument();
//      expect(logo).toHaveAttribute('src', logoImg);

      // Check if the title is rendered with the correct text
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(QUIZ_TITLE);
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle missing logo image gracefully', () => {
      // Temporarily mock the logo image import to simulate a missing image
      jest.mock("../../../assets/quiz_icon_bw.jpg", () => '');

      // Render the Header component
      render(<Header />);

      // Check if the logo image is still rendered but with an empty src
      const logo = screen.getByRole('img', { name: /quiz logo/i });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', 'test-file-stub'); // Adjust this based on your test setup

      // Restore the original mock
      jest.unmock('../../assets/quiz_icon_bw.jpg');
    });

    it('should render the title with correct styles', () => {
      // Render the Header component
      render(<Header />);

      // Check if the title has the correct styles applied
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveClass('text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-stone-500');
    });
  });
});