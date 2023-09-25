import { useState } from 'react';
import './Global.scss';
import Story from './components/Story';
import storiesdata from './data/dummy.json'

function App() {
  const [counter, setCounter] = useState(0)
  const callbackSetCounter = (side) => {
    if (side == 'left') {
      if(counter == 0){
        setCounter(storiesdata.length - 1)
        return;
      }
      setCounter(counter - 1)
    } else {    
      if(storiesdata.length == counter + 1){
        setCounter(0)
        return;
      }
      setCounter(counter + 1)
    }
  }
  
  return (
    <div className="App">
      <div className={'mainDiv'}>
        <div>
          Header
        </div>
        {/* {storiesdata.map((story, i) => (
          <Story story={story} key={i} />
        ))
        } */}
        <Story story={storiesdata[counter]} key={counter} callback={callbackSetCounter}/>
      </div>
    </div>
  );
}

export default App;
