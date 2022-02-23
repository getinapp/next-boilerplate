import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />);

    const helloWorldText = screen.getByText('Hello World!');
    const switchThemeButton = screen.getByText('Switch theme');

    expect(helloWorldText).toBeInTheDocument();
    expect(switchThemeButton).toHaveTextContent('Switch theme');
  });
});
