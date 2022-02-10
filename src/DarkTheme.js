import { createTheme } from '@material-ui/core/styles';
import Variables from './sass/variables.scss'

const DarkTheme = createTheme ({
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
        },
      }
    },
    MuiCheckbox: {
      root: {
        color: 'white', 
      },
    }
  }
});

export default DarkTheme;