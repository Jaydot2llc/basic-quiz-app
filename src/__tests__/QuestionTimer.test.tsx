import React from 'react';
import QuestionTimer from '../components/QuestionTimer.tsx';
import { act, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

// Mocking React hooks
jest.mock("react", () => {
  const originalReact = jest.requireActual("react");
  return {
    ...originalReact,
    useState: originalReact.useState,
    useEffect: originalReact.useEffect,
  };
});

describe('QuestionTimer() QuestionTimer method', () => {
  const mockOnTimeout = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    mockOnTimeout.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Happy Path Tests
  describe('Happy Paths', () => {
    fit('should render the progress bar with the correct initial value', () => {
      // Test to ensure the progress bar is rendered with the correct initial value
      render(<QuestionTimer timeout={5000} onTimeout={mockOnTimeout} mode="test-mode" />);
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('max', '5000');
      expect(progressBar).toHaveAttribute('value', '5000');
    });

    it('should call onTimeout after the specified timeout', () => {
      // Test to ensure onTimeout is called after the specified timeout
      render(<QuestionTimer timeout={5000} onTimeout={mockOnTimeout} mode="test-mode" />);
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      expect(mockOnTimeout).toHaveBeenCalledTimes(1);
    });

    it('should decrease the remaining time at regular intervals', () => {
      // Test to ensure the remaining time decreases at regular intervals
      render(<QuestionTimer timeout={5000} onTimeout={mockOnTimeout} mode="test-mode" />);
      act(() => {
        jest.advanceTimersByTime(100);
      });
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('value', '4900');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle a timeout of zero', () => {
      // Test to ensure the component handles a timeout of zero
      render(<QuestionTimer timeout={0} onTimeout={mockOnTimeout} mode="test-mode" />);
      expect(mockOnTimeout).toHaveBeenCalledTimes(1);
    });

    it('should handle a negative timeout gracefully', () => {
      // Test to ensure the component handles a negative timeout gracefully
      render(<QuestionTimer timeout={-1000} onTimeout={mockOnTimeout} mode="test-mode" />);
      expect(mockOnTimeout).toHaveBeenCalledTimes(1);
    });

    it('should not call onTimeout if component is unmounted before timeout', () => {
      // Test to ensure onTimeout is not called if the component is unmounted before timeout
      const { unmount } = render(<QuestionTimer timeout={5000} onTimeout={mockOnTimeout} mode="test-mode" />);
      unmount();
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      expect(mockOnTimeout).not.toHaveBeenCalled();
    });
  });
});