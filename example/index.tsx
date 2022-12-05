import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

const App = () => {
  return (
    <div>
      <Button text="theme-root" />
      <div className="another-theme">
        <Button text="another-theme" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
