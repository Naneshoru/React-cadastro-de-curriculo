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
  const lastPageStep = 2;
  const [formState, setFormState] = useState({
    step: 0,
  })

  const [state, setState] = useState({
    name: '',
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

  const [errors, setErrors] = useState({
    name: '',
    maritalStatus: '',
    email: '',
    birthDate: '',
    phone: '',
    cell: '',
    hasChild: '',
    objective: '',
    url: '',
    description: '',
    curriculum: ''
  });

  // https://restcountries.com/v3.1/all

  const handleChange = (e) => {
    console.log(e)

    switch (e.target.name) {
      case 'fullName':
        setState({...state, name: e.target.value });
        setErrors({ ...errors, name: '' });

        if (!RegExp(/^[a-zA-Z]$/).test(e.target.value)) {
          setErrors({ ...errors, name: 'Campo obrigatório' });
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

        if (!RegExp(/^\d{8,}$/).test(e.target.value)) {
          setErrors({ ...errors, phone: 'Somente números são permitidos' });
        }
        break;
      case 'cell':
        setState({...state, cell: e.target.value });
        setErrors({ ...errors, cell: '' });

        if (!RegExp(/^\d{9,}$/).test(e.target.value)) {
          setErrors({ ...errors, cell: 'Somente números são permitidos' });
        }
        break;
      case 'hasChild':
        setState({...state, hasChild: e.target.value });
        break;
      case 'objective':
        setState({...state, objective: e.target.value });
        setErrors({ ...errors, objective: '' });

        if (!RegExp(/^[a-zA-Z]$/).test(e.target.value)) {
          setErrors({ ...errors, objective: 'Campo obrigatório' });
        }
        break;
      case 'description':
        setState({...state, description: e.target.value });
        setErrors({ ...errors, description: '' });

        if (!RegExp(/^[a-zA-Z]$/).test(e.target.value)) {
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
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    alert(`
      step: ${state.step}
      name: ${state.name}, 
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
    const { step } = formState;

    setFormState({ ...formState, step: step + 1 })
  }

  const previousStep = (e) => {
    e.preventDefault();
    const { step } = formState;

    setFormState({ ...formState, step: step - 1 })
  }

  const setCurrentPage = (state, formState) => {
    switch (formState.step) {
      case 0:
        return (<PersonalInfo state={state} errors={errors} handleChange={handleChange} />);
      case 1:
        return (<ProfissionalInfo state={state} errors={errors} handleChange={handleChange} />);
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
          <Stepper activeStep={formState.step} alternativeLabel>
            {pageNames.map((page) => (<Step key={page}><StepLabel>{page}</StepLabel></Step>))}
          </Stepper>
        </div>

        {setCurrentPage(state, formState)}

        <div className='form-footer'>
          {formState.step > 0 && formState.step <= lastPageStep && 
          <button onClick={(e) => previousStep(e)}>Voltar</button>}
          
          {formState.step < lastPageStep && 
          <button onClick={(e) => nextStep(e)}>Próximo</button>}

          {formState.step === lastPageStep && 
          <button type="submit" className='submit-button' onClick={(e) => nextStep(e)} disabled={!(Object.values(errors).every(x => x === ''))}>Enviar</button>}
        </div>
      </form>
    </div>
  );
}
 
export default Registration;