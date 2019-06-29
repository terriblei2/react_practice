import * as React from 'react';
import { render } from 'react-dom';

const Main: React.FC = () => (
    <div>Hello, Happy World!</div>
);

render(<Main />, document.getElementById('root'));