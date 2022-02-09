import Registration from './components/Registration';

import './App.scss';
import Variables from './sass/variables.scss'
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme ({
  overrides: {
    MuiOutlinedInput: {
      root: {
        color: 'white', // todos os textos
        
        '& $notchedOutline': { // borda do campo
          border: `2px solid ${Variables.lightBrand} `,
        },
        '&:hover $notchedOutline': {
          borderColor: 'lightgray'
        },
        "&$focused $notchedOutline": {
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Registration />
      </div>
    </ThemeProvider>
  );
}

export default App;