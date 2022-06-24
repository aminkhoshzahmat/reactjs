import "./App.css";
import React, { PureComponent } from "react";
import Counter from "./1-Counter";
import LifeCycle from "./2-LifeCycle";
import ForceUpdate from "./3-ForceUpdate";
import LegacyLifeCycle from "./4-LegacyLifeCycle";
import Parent from "./6-ErrorBoundries";
import Title from "./7-DefaultProps";
import Users from "./8-ListKeys";
// import Parent from "./5-UnMounting";
import Frg from "./9-Fragment";
import Portal from "./10-Portal";
import Form from "./11-Form";
import AdvancedSetState from "./12-AdvancedSetState";
import CreateRef from "./13-CreateRef";
import Stateless from "./16-Stateless";
import ClassVsFunction from "./17-ClassVsFunction";
import UseState from "./18-UseState";
import UseEffect from "./19-UseEffect";
import AdvancedUseEffect from "./20-AdvancedUseEffect";
import HooksRules from "./21-HooksRules";
import CustomHook from "./22-CustomHook";
import TodosUseState from "./23-TodosUseState";
import UseReducer from "./24-UseReducer";
import TodosUseReducer from "./25-TodosUseReducer";
import UseMemo from "./26-UseMemo";
import Memo from "./27-Memo";
import UseRef from "./28-UseRef";
import UseCallback from "./29-UseCallback";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/*<Parent/>*/}
        {/*<Parent/>*/}
        {/*<Counter defaultValue={2}/>*/}
        {/*<Counter defaultValue={4}/>*/}
        {/*<Counter defaultValue={6}/>*/}
        {/*<LifeCycle/>*/}
        {/* <ForceUpdate/> */}
        {/*<LegacyLifeCycle/>*/}
        {/*<Title name='Amin Khoshzahmat' color='blue' />*/}
        {/*<Title color='green' />*/}
        {/*<Title name='Somayeh Khanbabaei' />*/}
        {/*<Users/>*/}
        {/*<Frg/>*/}
        {/*<Portal/>*/}
        {/* <Form /> */}
        {/* <AdvancedSetState /> */}
        {/* <CreateRef /> */}
        {/* <PureComponent /> */}
        {/* <Stateless /> */}
        {/* <ClassVsFunction /> */}
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <AdvancedUseEffect /> */}
        {/* <HooksRules /> */}
        {/* <CustomHook /> */}
        {/* <TodosUseState /> */}
        {/* <UseReducer /> */}
        {/* <TodosUseReducer /> */}
        {/* <UseMemo /> */}
        {/* <Memo /> */}
        {/* <UseRef /> */}
        <UseCallback />
      </div>
    );
  }
}

export default App;
