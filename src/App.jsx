import ButtonColumn from './components/ButtonColumn';
import InputColumn from './components/InputColumn';
import MarkupColumn from './components/MarkupColumn';
import PreviewColumn from './components/PreviewColumn';
import './App.scss';
import './buttons.scss';

function App() {
  return (
    <div className="app">
      <ButtonColumn />
      <InputColumn />
      <MarkupColumn />
      <PreviewColumn></PreviewColumn>
    </div>
  )
}

export default App
