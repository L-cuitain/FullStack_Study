import './App.css';

import { Provider } from '../Utils/context';

// import FnCom from '../Components/FnCom';
// import ClassCom from '../Components/ClassCom';
// import RefsCom from '../Components/RefsCom';
// import FaCom from '../Components/FaCom';
import SonCom from '../Components/SonCom';


//根组件
function App() {
  return (
    <Provider value="伸冤人">
      <SonCom name={'滑稽币+1'}/>
    </Provider>
  );
}

export default App;
