import Registration from './pages/registration/Registration';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import DarkTheme from './DarkTheme'

import './App.scss';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={DarkTheme}>
        <div className="App">
          <Registration />
        </div>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;