import { render, fireEvent, screen } from '@testing-library/react';
import DotSlider from '../DotSlider';

describe('DotSlider', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with default value', () => {
    render(
      <DotSlider
        value={10}
        onChange={mockOnChange}
      />
    );

    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveValue('10');
  });

  it('calls onChange when value changes', () => {
    render(
      <DotSlider
        value={10}
        onChange={mockOnChange}
      />
    );

    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '15' } });

    expect(mockOnChange).toHaveBeenCalledWith(15);
  });
}); 