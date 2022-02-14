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
    },
    MuiStepper: {
      root: {
        backgroundColor: Variables.lightAccent,  
      }
    },
    MuiStepLabel: {
      label: {
        '&$active': {
          color: 'white',
          'font-weight': 'bold',
          'font-size': '1em'
        },
        '&:not($active)': {
          color: 'white',
          'font-weight': 'bold',
        }
      },
    },
    MuiStepIcon: {
      root: {
        '&$active': {
          color: Variables.mainBrand,
          'font-size': '1.6em'
        },
        '&$completed': {
          color: Variables.mainBrand,
        },
      },
    },
  }
});

export default DarkTheme;