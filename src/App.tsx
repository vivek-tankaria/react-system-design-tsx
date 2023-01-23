import Button from './custom/Button';
import './App.css';
import './custom/Button/Button.css';

function App() {
  function Handle(){
    alert('You clicked me');
  }
  return (
    <div className="App">
      <p>
        <Button type={'primary'} onClick={Handle}>Primary</Button>
      </p>
      <p>
        <Button type={'secondary'} >Secondary</Button>
      </p>
      <p>
        <Button type={'tertiary'} >Tertiary</Button>
      </p>
      <p>
        <Button type={'outline_grey'} >Outline Grey</Button>
      </p>
    </div>
  );
}

export default App;
