import './Global.scss';
import bundleOfStories from './data/dummy.json'
import Dummy from './components/Dummy';

export default function App() {  
return (
    <div className="App">
      <Dummy bundle={bundleOfStories}/>  
    </div>
  );
}

