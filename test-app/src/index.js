import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MouseTracker from './App';
import * as serviceWorker from './serviceWorker';
import FormBody from './Input'
import { RegularComponent } from './RegularComponent';
import { HookComponent, HookComponent2 } from './HookComponent';

ReactDOM.render(<div>
  {/* <HookComponent2/> */}
  <HookComponent/>
  {/* <RegularComponent/> */}
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
