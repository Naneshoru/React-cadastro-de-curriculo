import Registration from './components/Registration';
import { ThemeProvider } from '@material-ui/core';
import DarkTheme from './DarkTheme'

import './App.scss';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="App">
        <Registration />
      </div>
    </ThemeProvider>
  );
}

export default App;