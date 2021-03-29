import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Displaygit from './Displaygit';
import Displayprofile from './Displayprofile';
import Headtitle from './Headtitle';


function App() {
  const [inp, setInp] = useState('')
  const inputChange = (event) => {
    setInp(event.target.value);
    console.log(inp);
  }

  return (
    <>

      <Headtitle
        func={inputChange}
      />

      <Switch>

        <Route exact path='/' component={() =>
          <Displaygit
            userInp={inp}
          />
        } />

        <Route path='/profile/:id' component={Displayprofile} />
      </Switch>

    </>

  );
}

export default App;
