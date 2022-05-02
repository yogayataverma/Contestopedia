import React,{useState} from 'react';
import MainContainer from './navigation/MainContainer';
import RootStack from './navigation/screens/RootStack'

function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
     {
      login 
      ?
      <MainContainer />
      :
      <RootStack />
     }
     
    </>
  );
}

export default App;