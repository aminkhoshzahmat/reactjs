import logo from './logo.svg';
import './App.css';
import InputText from "./Components/shared/forms/InputText";
import {ErrorBoundariesHandler} from "./Handlers/ErrorBoundariesHandler";
import UsersList from "./Components/UsersList";

function App() {
    return (
        <div>
        <ErrorBoundariesHandler>
            <InputText mode={false} value='Default text goes here'/>
            <div style={{borderBottom: '1px solid #eee', padding: '10px'}}></div>
            <UsersList/>
        </ErrorBoundariesHandler>
        </div>
    );
}

export default App;
