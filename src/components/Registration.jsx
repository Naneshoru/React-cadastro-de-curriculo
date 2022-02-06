import React, { useState } from 'react';

import './Registration.css'

const Registration = () => {
  const [state, setState] = useState({
    name: 'Ex: Ricardo Atakiama',
    description: 'Faça um resumo de suas qualificações, habilidades e realizações profissionais.',
    maritalStatus: 'Single',
    birthDate: ''
  });

  const handleChange = (e) => {
    console.log(e)

    switch (e.target.name) {
      case 'fullName':
        setState({...state, name: e.target.value });
        console.log(state.name)
        break;
      case 'maritalStatus':
        setState({...state, maritalStatus: e.target.value });
        console.log(state.maritalStatus)
        break;
      case 'description':
        setState({...state, description: e.target.value });
        console.log(state.description)
        break;
      case 'birthDate':
        setState({...state, birthDate: e.target.value });
        console.log(state.birthDate)
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
    `)
    e.preventDefault();
  }

  return ( 
    <form className='form-container' onSubmit={(e) => handleSubmit(e)} >
      
      <div className='form-header'><strong><p>Currículo</p></strong></div>

      <div className='data-set'><p>Dados pessoais</p></div>

      <div className='form-side-by-side'>
        <div className='form--left-side'>
          <label className='field--title' htmlFor="fullName">Nome: </label>
          <input className='field--input' name="fullName" type="text" value={state.name} onChange={handleChange}/>
        </div>

        <div className='form--right-side'>
          <label className='field--title' htmlFor="maritalStatus">Estado civil: </label>
          <select className='field--input' name="maritalStatus" id="maritalStatus" value={state.maritalStatus} onChange={handleChange}>
            <option value="Single">Solteiro(a)</option>
            <option value="Married">Casado(a)</option>
            <option value="Separate">Separado(a)</option>
            <option value="Divorced">Divorciado(a)</option>
            <option value="Widowed">Viúvo(a)</option>
          </select>
        </div>
      </div>
      <div className='form-side-by-side'>

        <div className='form--left-side'>
          <label className='field--title' htmlFor="birthDate">Data de nascimento: </label>
          <input className='field--input date-input' name="birthDate" type="date" value={state.birthDate} onChange={handleChange}/>
        </div>

        <div className='form--right-side'>
          <label className='field--title' htmlFor="description">Descrição profissional: </label>
          <textarea className='field--input' name="description" id="description" cols="30" rows="10" value={state.description} onChange={handleChange}></textarea>
        </div>
      </div>
          
      {/* <div className='field'>
        <label className='field--title' htmlFor="fullName">Nome: </label>
        <input className='field--input' name="fullName" type="text" value={state.name} onChange={handleChange}/>
      </div> */}

      <div className='form-footer'>
        <input type="submit" value={'Enviar'}/>
      </div>

    </form>
  );
}
 
export default Registration;