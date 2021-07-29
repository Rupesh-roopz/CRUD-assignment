import Form from "./components/form";
import { Home } from "./components/home";
import { FormData } from "./components/formData"
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route path="/form/formData" component={FormData}/>
      <Route path="/form" component={Form}/>
      <Route path="/" component={Home}/>
      
      
      </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
