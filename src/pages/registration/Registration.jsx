import React from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import ConfirmPage from './ConfirmPage';
import SuccessPage from './SuccessPage';
import PersonalInfo from './PersonalInfo';
import ProfissionalInfo from './ProfissionalInfo';
import { useRegistration } from '../../models/RegistrationContext';


import './Registration.scss'

const Registration = () => {

  const { 
    pageNames, handleSubmit, isSubmitDisabled, stepperState, lastPageStep, previousStep, nextStep 
  } = useRegistration();

  const setCurrentPage = () => {
    switch (stepperState.step) {
      case 0:
        return (<PersonalInfo />);
      case 1:
        return (<ProfissionalInfo />);
      case 2:
        return (<ConfirmPage />);
      case 3:
        return (<SuccessPage />);
      default:
        return null;
    }
  }

  return ( 
    <div className='form__wrapper'>
      <form className='form__container' onSubmit={(e) => handleSubmit(e)} >
        
        <div className='form__header'><strong><p>Currículo</p></strong></div>

        <div className='form__steps'>
          <Stepper activeStep={stepperState.step} alternativeLabel>
            {pageNames.map((page) => (<Step key={page} completed={false}><StepLabel>{page}</StepLabel></Step>))}
          </Stepper>
        </div>

        {setCurrentPage()}

        <div className='form__footer'>
          {stepperState.step > 0 && stepperState.step <= lastPageStep && 
          <button onClick={(e) => previousStep(e)} className='button'>Voltar</button>}
          
          {stepperState.step < lastPageStep && 
          <button onClick={(e) => nextStep(e)} className='button'>Próximo</button>}

          {stepperState.step === lastPageStep && 
          <button type="submit" className='submit-button button' onClick={(e) => nextStep(e)} disabled={isSubmitDisabled}>Enviar</button>}
        </div>
      </form>
    </div>
  );
}
 
export default Registration;