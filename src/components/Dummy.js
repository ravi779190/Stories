import { useState, useEffect } from 'react';
import '../Global.scss';
import Story from './Story';

export default function App({bundle}) {
    // console.log('bundlebundle : ', bundle)
  const [counter, setCounter] = useState(0)
  const [bundleCounter, setBundleCounter] = useState(0)
  const callbackSetCounter = (action, length) => {
    // console.log('i am here ')
    if (action === 'prev') {
      debugger
      if(counter === 0){
        if(bundleCounter ===  0){ 
          return
        }
        setBundleCounter(bundleCounter - 1)
        setCounter(length-1)
        console.log('bundleCounter : ', bundleCounter)
        console.log('counter : ', counter)
        return;
      }
      setCounter(counter - 1)
    } else if(action === 'next' || action === 'autoPlay') {  
        if(bundle.length ===  bundleCounter + 1){
            return false
        }
          setBundleCounter(bundleCounter + 1)
          setCounter(0)
          return 
    }
  }
  return (
      <div className={'mainDiv'}>
        {/* {bundle.map((item, key) => ( */}
          <Story story={bundle[bundleCounter].stories} thumbnail={bundle[bundleCounter].thumbnail} 
          createdAt={bundle[bundleCounter].createdAt} title={bundle[bundleCounter].title} 
          length={bundle[bundleCounter].stories.length} callback={callbackSetCounter}/>
        {/* ))
        } */}

      </div>
  );
}
