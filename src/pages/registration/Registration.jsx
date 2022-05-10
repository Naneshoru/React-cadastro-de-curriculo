import React, { useState } from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import ConfirmPage from './ConfirmPage';
import SuccessPage from './SuccessPage';
import PersonalInfo from './PersonalInfo';
import ProfissionalInfo from './ProfissionalInfo';
import moment from "moment";
import './Registration.scss'

const Registration = () => {
  const pageNames = ['Dados pessoais', 'Dados profissionais', 'Confirmação de dados']
  const lastPageStep = pageNames.length - 1;
  const [stepperState, setStepperState] = useState({
    step: 0
  })

  const [state, setState] = useState({
    fullName: '',
    maritalStatus: 'Single',
    email: '',
    birthDate: moment(),
    phone: '',
    cell: '',
    hasChild: false,
    objective: '',
    url: '',
    description: '',
    curriculum: ''
  });

  const required = 'Campo obrigatório';

  const [errors, setErrors] = useState({
    fullName: required,
    maritalStatus: '',
    email: required,
    birthDate: '',
    phone: '',
    cell: required,
    hasChild: '',
    objective: required,
    url: '',
    description: required,
    curriculum: required
  });

  const setEventTargetNameAndValue = (name, value) => ({
    target: {
      name, value
    }
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'fullName':
        setState({...state, fullName: e.target.value });
        setErrors({ ...errors, fullName: '' });
        if (!RegExp(/^([\w]{2,})+\s+([\w\s]{2,})+$/i).test(e.target.value)) {
          setErrors({ ...errors, fullName: 'Campo obrigatório' });
        }
        break;
      case 'maritalStatus':
        setState({...state, maritalStatus: e.target.value });
        break;
      case 'email':
        setState({...state, email: e.target.value });
        setErrors({ ...errors, email: '' });
        if (!RegExp(/^\S+@\S+\.\S+$/).test(e.target.value)) {
          setErrors({ ...errors, email: 'Formato de e-mail inválido' });
        }
        break;
      case 'birthDate':
        setState({...state, birthDate: e.target.value });
        break;
      case 'phone':
        setState({...state, phone: e.target.value });
        setErrors({ ...errors, phone: '' });

        if (!RegExp(/^$|^\d{8,}$/).test(e.target.value)) {
          setErrors({ ...errors, phone: 'Campo requer pelo menos 8 dígitos' });
        }
        if (!RegExp(/^\d*$/).test(e.target.value)) {
          setErrors({ ...errors, phone: 'Somente números são permitidos' });
        }
        break;
      case 'cell':
        setState({...state, cell: e.target.value });
        setErrors({ ...errors, cell: '' });
        if (!RegExp(/^\d{9,}$/).test(e.target.value)) {
          setErrors({ ...errors, cell: 'Campo requer pelo menos 9 dígitos' });
        }
        if (!RegExp(/^\d*$/).test(e.target.value)) {
          setErrors({ ...errors, cell: 'Somente números são permitidos' });
        }
        break;
      case 'hasChild':
        setState({...state, hasChild: e.target.value });
        break;
      case 'objective':
        setState({...state, objective: e.target.value });
        setErrors({ ...errors, objective: '' });

        if (!RegExp(/^([a-z0-9])+$/i).test(e.target.value)) {
          setErrors({ ...errors, objective: 'Campo obrigatório' });
        }
        break;
      case 'description':
        setState({...state, description: e.target.value });
        setErrors({ ...errors, description: '' });

        if (!RegExp(/^([a-z0-9])+$/i).test(e.target.value)) {
          setErrors({ ...errors, description: 'Campo obrigatório' });
        }
        break;
      case 'url':
        setState({...state, url: e.target.value });
        setErrors({ ...errors, url: '' });

        if (!RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).test(e.target.value)) {
          setErrors({ ...errors, url: 'Campo inválido' });
        }
        break;
      case 'curriculum':
        setState({...state, curriculum: e.target.value });
        setErrors({ ...errors, curriculum: '' });

        if (!RegExp(/^.*\.(doc|DOC|docx|DOCX|pdf|PDF)$/).test(e.target.value)) {
          setErrors({ ...errors, curriculum: 'Somente arquivos nos formatos doc, docx ou pdf' });
        }
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    alert(`
      step: ${state.step}
      fullName: ${state.fullName}, 
      maritalStatus: ${state.maritalStatus}
      birthDate: ${state.birthDate}
      email: ${state.email}
      phone: ${state.phone}
      cell: ${state.cell}
      hasChild: ${state.hasChild}
      objective: ${state.objective}
      description: ${state.description}
      link: ${state.link}
      curriculum: ${state.curriculum}
    `)
    e.preventDefault();
  }

  const nextStep = (e) => {
    e.preventDefault();
    const { step } = stepperState;

    setStepperState({ ...stepperState, step: step + 1 });
  }

  const previousStep = (e) => {
    e.preventDefault();
    const { step } = stepperState;

    setStepperState({ ...stepperState, step: step - 1 });
  }

  const [showErrors, setshowErrors] = useState({
    fullName: false,
    maritalStatus: false,
    email: false,
    birthDate: false,
    phone: false,
    cell: false,
    hasChild: false,
    objective: false,
    url: false,
    description: false,
    curriculum: false
  })

  const handleShowErrors = (e) => {
    switch (e.target.name) {
      case 'fullName':
      case 'maritalStatus':
      case 'email':
      case 'birthDate':
      case 'phone':
      case 'cell':
      case 'hasChild':
      case 'objective':
      case 'description':
      case 'url':
      case 'curriculum':
        setshowErrors({...showErrors, [e.target.name]: true });
        break;
      default:
        break;
    }
  }

  const setCurrentPage = (state, stepperState) => {
    switch (stepperState.step) {
      case 0:
        return (<PersonalInfo state={state} handleChange={handleChange} setEventTargetNameAndValue={setEventTargetNameAndValue}
          errors={errors} showErrors={showErrors} handleShowErrors={handleShowErrors} />);
      case 1:
        return (<ProfissionalInfo state={state} handleChange={handleChange} setEventTargetNameAndValue={setEventTargetNameAndValue}
          errors={errors} showErrors={showErrors} handleShowErrors={handleShowErrors} />);
      case 2:
        return (<ConfirmPage state={state} />);
      case 3:
        return (<SuccessPage />);
      default:
        return null;
    }
  }

  return ( 
    <div className='form-wrapper'>
      <form className='form-container' onSubmit={(e) => handleSubmit(e)} >
        
        <div className='form-header'><strong><p>Currículo</p></strong></div>

        <div className='data-category'>
          <Stepper activeStep={stepperState.step} alternativeLabel>
            {pageNames.map((page) => (<Step key={page} completed={false}><StepLabel>{page}</StepLabel></Step>))}
          </Stepper>
        </div>

        {setCurrentPage(state, stepperState)}

        <div className='form-footer'>
          {stepperState.step > 0 && stepperState.step <= lastPageStep && 
          <button onClick={(e) => previousStep(e)} className='button'>Voltar</button>}
          
          {stepperState.step < lastPageStep && 
          <button onClick={(e) => nextStep(e)} className='button'>Próximo</button>}

          {stepperState.step === lastPageStep && 
          <button type="submit" className='submit-button button' onClick={(e) => nextStep(e)} disabled={!(Object.values(errors).every(x => x === ''))}>Enviar</button>}
        </div>
      </form>
    </div>
  );
}
 
export default Registration;