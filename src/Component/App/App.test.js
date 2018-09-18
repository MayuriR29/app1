import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow'

it('should render snapshot correctly', () => {
  const renderer=new ShallowRenderer();
  renderer.render(<App/>);
  const output=renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
