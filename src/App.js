import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const lazyTodos = lazy(()=> import('./features/todos'))
class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route path='/todos' component ={ lazyTodos } />
            <Redirect to='/todos'/>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
