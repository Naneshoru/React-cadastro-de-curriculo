import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfissionalInfo from './ProfissionalInfo';
import './Registration.scss'

const Registration = () => {
  const lastPage = 2;
  const [state, setState] = useState({
    step: 1,
    name: '',
    description: '',
    maritalStatus: 'Single',
    birthDate: '',
    email: '',
    objective: '',
    phone: '',
    cell: '',
    hasChild: false
  });

  // https://restcountries.com/v3.1/all

  const handleChange = (e) => {
    console.log(e)

    switch (e.target.name) {
      case 'fullName':
        setState({...state, name: e.target.value });
        break;
      case 'description':
        setState({...state, description: e.target.value });
        break;
      case 'maritalStatus':
        setState({...state, maritalStatus: e.target.value });
        break;
      case 'birthDate':
        setState({...state, birthDate: e.target.value });
        break;
      case 'email':
        setState({...state, email: e.target.value });
        break;
      case 'objective':
        setState({...state, objective: e.target.value });
        break;
      case 'phone':
        setState({...state, phone: e.target.value });
        break;
      case 'cell':
        setState({...state, cell: e.target.value });
        break;
      case 'hasChild':
        setState({...state, hasChild: e.target.value });
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    alert(`
      name: ${state.name}, 
      description: ${state.description}
      birthDate: ${state.birthDate}
      maritalStatus: ${state.maritalStatus}
      email: ${state.email}
      objective: ${state.objective}
      phone: ${state.phone}
      cell: ${state.cell}
      hasChild: ${state.hasChild}
      step: ${state.step}
    `)
    e.preventDefault();
  }

  const nextStep = (e) => {
    e.preventDefault();
    const { step } = state;

    setState({ ...state, step: step + 1 })
  }

  const previousStep = (e) => {
    e.preventDefault();
    const { step } = state;

    setState({ ...state, step: step - 1 })
  }

  const setCurrentPage = (state) => {
    switch (state.step) {
      case 1:
        return (<PersonalInfo state={state}  handleChange={handleChange} />);
      case 2:
        return (<ProfissionalInfo state={state}  handleChange={handleChange} />);
      default:
        return null;
    }
  }

  return ( 
    <div className='form-wrapper'>
      <form className='form-container' onSubmit={(e) => handleSubmit(e)} >
        
        <div className='form-header'><strong><p>Currículo</p></strong></div>

        {setCurrentPage(state)}

        <div className='form-footer'>
          {state.step > 1 && <button onClick={(e) => previousStep(e)}>Voltar</button>}
          {state.step < lastPage && <button onClick={(e) => nextStep(e)}>Próximo</button>}

          {state.step === lastPage && <button type="submit" className='submit-button'>Enviar</button>}
        </div>
      </form>
    </div>
  );
}
 
export default Registration;