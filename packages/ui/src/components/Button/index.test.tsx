import { render } from '@testing-library/react';
import {Button} from './index';

describe('<Button />', () => {
  it('renders', () => {
    render(<Button>Hola hdev</Button>);
  });
});