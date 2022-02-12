import Registration from './components/Registration';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import DarkTheme from './DarkTheme'

import './App.scss';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={DarkTheme}>
        <div className="App">
          <Registration />
        </div>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;