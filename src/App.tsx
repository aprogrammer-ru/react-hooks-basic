import CustomHookBasic from "./components/Custom/Basic";
import UseCallbackBasic from "./components/UseCallback/Basic";
import UseContextBasic from "./components/UseContext/Basic";
import ChangeThemeExample from "./components/UseContext/ChangeTheme";
import CleanupEffect from "./components/UseEffect/Basic";
import UseEffectBasic from "./components/UseEffect/Basic";
import UseMemoBasic from "./components/UseMemo/Basic";
import UseRefBasic from "./components/UseRef/Basic";
import UseStateBasic from "./components/UseState/Basic";

const App = (props: AppProps) => {
  
  return (
 
  <UseStateBasic />
  //<CleanupEffect />
  //<ChangeThemeExample />
   //<UseContextBasic />
   //<UseRefBasic />
   //<UseCallbackBasic />
   //<UseMemoBasic />
   //<CustomHookBasic />
);


};

export default App;

interface AppProps {
  title: string;
}


