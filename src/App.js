import { useState } from 'react';
import './Global.scss';
import Story from './components/Story';
import bundleOfStories from './data/dummy.json'

function App() {
  const [counter, setCounter] = useState(0)
  const [bundleCounter, setBundleCounter] = useState(0)
  const callbackSetCounter = (side, length) => {
    if (side === 'left') {
      if(counter === 0){
        // setCounter(length - 1)
        // TODO : will return to previous bundle of stories
        if(bundleCounter ===  0){ 
          return
        }
        setBundleCounter(bundleCounter - 1)
        setCounter(length - 1)
        return;
      }
      setCounter(counter - 1)
    } else {   
      if(length === counter + 1){
        // check if next bundle is there
        if(bundleOfStories.length ===  bundleCounter + 1){
          setBundleCounter(0)
          setCounter(0)
          return
        }
        setBundleCounter(bundleCounter + 1)
        setCounter(0)
        return;
      }
      setCounter(counter + 1)
    }
  }
  // console.log("storiesdata : ", bundleOfStories[0].stories)
  // console.log("storiesdata : ", bundleOfStories)
  return (
    <div className="App">
      <div className={'mainDiv'}>
        <div>
          Header
        </div>
        {/* {bundleOfStories.map((item, key) => ( */}
          <Story story={bundleOfStories[bundleCounter].stories[counter]} 
          length={bundleOfStories[bundleCounter].stories.length} callback={callbackSetCounter}/>
        {/* ))
        } */}

      </div>
    </div>
  );
}

export default App;
