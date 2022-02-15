import { createTheme } from '@material-ui/core/styles';
import Variables from './sass/variables.scss'

const DarkTheme = createTheme ({
  overrides: {
    // ================ <INPUT FIELDS> ================
    MuiOutlinedInput: {
      root: {
        color: 'white', // todos os textos
        
        '& $notchedOutline': { // borda do campo
          border: `2px solid ${Variables.lightBrand} `,
        },
        '&:hover $notchedOutline': {
          borderColor: 'lightgray'
        },
        '&$focused $notchedOutline': {
          boxShadow: `0px 0px 5px 0px #019EE2, 0px 0px 20px 0px #019EE2, 0px 0px 10px 0px #019EE2`
        },
      }
    },
    MuiCheckbox: { root: { color: 'white',  }, },
    MuiSelect: { icon: { color: 'white' } },
    // MuiButtonBase: {
    //   root: {
    //     backgroundColor: Variables.lightAccent + '!important'
    //   }
    // },
    // ================ </INPUT FIELDS> ================
    MuiSvgIcon: {
      root: {
        // backgroundColor: Variables.lightAccent,  
        color: 'white',
      },

      // '&:hover': {
      //   backgroundColor: 'white',
      // }
    },
    // ================ <STEPPER> ================
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
    // ================ </STEPPER> ================
    // ================ <CALENDAR> ================

    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: Variables.mainBrand,

        '&:hover': {
          backgroundColor: Variables.darkAccent, 
        }
      },
      dayLabel: {
        color: 'white'
      }
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: Variables.mainBrand,
        color: 'white'
      },
        // backgroundColor: Variables.muiSecondary
    },
    MuiPickersDay: {
      day: {
        color: 'white', // dias no calendário

        '&:hover': {
          backgroundColor: Variables.darkAccent, 
        }
      },
      daySelected: { // dia selecionado
        backgroundColor: Variables.muiSecondary, // circulo

        '&:hover': {
          backgroundColor: 'red', 
        }
      },
      current: { // dia atual
      //   // backgroundColor: 'green',
      //   border: `solid 1px ${Variables.muiSecondary}`,
        color: Variables.muiSecondary
      }
    },
    MuiDialogActions: {
      root: {
        backgroundColor: Variables.mainBrand,
      }
    },
    MuiButton:{ // botões ok e cancel
      textPrimary:{
        color: 'white',

        '&:hover': {
          backgroundColor: Variables.darkAccent, 
        }
      }
    },
    // ================ </CALENDAR> ================
  }
});

export default DarkTheme;