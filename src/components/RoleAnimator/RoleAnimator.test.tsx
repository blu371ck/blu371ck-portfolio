import React from 'react';
import { render, screen, act } from '@testing-library/react';
import RoleAnimator from './RoleAnimator';

jest.useFakeTimers();

describe('RoleAnimator Component', () => {
  it('renders the first role initially', () => {
    render(<RoleAnimator />);
    
    expect(screen.getByText('Defender')).toBeInTheDocument();

    const animatedDiv = screen.getByTestId('role-animator-inner');
    expect(animatedDiv).toHaveStyle({ transform: 'translateY(-0rem)' });
  });

  it('transitions to the next role after the interval', () => {
    render(<RoleAnimator />);
    
    const animatedDiv = screen.getByTestId('role-animator-inner');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(animatedDiv).toHaveStyle({ transform: 'translateY(-5rem)' });
  });

  it('loops back to the first role after the last one', () => {
    render(<RoleAnimator />);

    const animatedDiv = screen.getByTestId('role-animator-inner');

    act(() => {
      jest.advanceTimersByTime(12000);
    });

    expect(animatedDiv).toHaveStyle({ transform: 'translateY(-0rem)' });
  });
});