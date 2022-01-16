import React from 'react';
//components 
import Header from './components/Header';
import Home from './components/Home'

//Styles
import { GlobalStyle } from './GlobalStyle';


function App() {
  
  return (
    <div className='App'>
      <Header/>
     <Home/>
      <GlobalStyle/>
    </div>
  )
}

export default App;

//this was a trail lamp code
//SWitching a lamp on

//Components
//import Lamp from './Lamp'
//import LightSwitch from './LightSWitch'

//const Star = () => React.createElement('div',null,'This is a star')

/*const Room = styled.div'
  position:relative;
  width:500px;
  border: 10px;'*/

/*Lamp One
  const[isLampOneOn , setIsLampOneOn] = useState(false);
  //Lamp Two
  const[isLampTwoOn , setIsLampTwoOn] = useState(false);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return(
    <Room>
      <Lamp lampOn={isLampOneOn} position='left'/>
      <Lamp lampOn={isLampTwoOn} position='right'/>
      <LightSWitch 
      name='one'
      callback={handleLightSwitchOne}
      switchOn={isLampOneOn}
      position='left'/>
      <LightSWitch 
      name='two'
      callback={handleLightSwitchTwo}
      switchOn={isLampTwoOn}
      position='right'/>
    </Room>
  )*/