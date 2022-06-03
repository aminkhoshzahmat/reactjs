import './App.css';
import React from 'react';
import Counter from './1-Counter'
import LifeCycle from './2-LifeCycle'
import ForceUpdate from "./3-ForceUpdate";
import LegacyLifeCycle from "./4-LegacyLifeCycle";
import Parent from "./6-ErrorBoundries";
import Title from "./7-DefaultProps";
import Users from "./8-ListKeys";
// import Parent from "./5-UnMounting";
import Frg from "./9-Fragment";
import Portal from "./10-Portal";

class App extends React.Component {
  render() {
      return (
          <div className='App'>
              {/*<Parent/>*/}
              {/*<Parent/>*/}
              {/*<Counter defaultValue={2}/>*/}
              {/*<Counter defaultValue={4}/>*/}
              {/*<Counter defaultValue={6}/>*/}
              {/*<LifeCycle/>*/}
              {/*<ForceUpdate/>*/}
              {/*<LegacyLifeCycle/>*/}
              {/*<Title name='Amin Khoshzahmat' color='blue' />*/}
              {/*<Title color='green' />*/}
              {/*<Title name='Somayeh Khanbabaei' />*/}
              {/*<Users/>*/}
              {/*<Frg/>*/}
              <Portal/>
          </div>
      );
  }
}

export default App;
