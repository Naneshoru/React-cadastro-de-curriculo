import Registration from './pages/registration/Registration';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { RegistrationProvider } from './models/RegistrationContext';
import MomentUtils from '@date-io/moment'
import DarkTheme from './DarkTheme'

import './App.scss';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={DarkTheme}>
        <RegistrationProvider>
          <div className="App">
            <Registration />
          </div>
        </RegistrationProvider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;