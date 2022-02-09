import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import './Registration.scss'

const Registration = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    maritalStatus: 'Single',
    birthDate: ''
  });

  // https://restcountries.com/v3.1/all

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

  const options = [
    {label: "Solteiro(a)", value: 'Single', style: { color: 'red' }},
    {label: "Casado(a)", value: 'Married', style: { color: 'blue' }},
    {label: "Separado(a)", value: 'Separate', style: { color: 'blue' }},
    {label: "Divorciado(a)", value: 'Divorced', style: { color: 'blue' }},
    {label: "Viúvo(a)", value: 'Widowed', style: { color: 'blue' }}
  ]

  return ( 
    <div className='form-wrapper'>
      <form className='form-container' onSubmit={(e) => handleSubmit(e)} >
        
        <div className='form-header'><strong><p>Currículo</p></strong></div>

        <div className='data-set'><p>Dados pessoais</p></div>

        <div className='form-side-by-side'>
          <div className='form--left-side'>
            <TextField 
              type="text"
              variant='outlined' color='secondary'
              className='field--input' name="fullName"  
              label='Nome' placeholder='Ex: Ricardo Atakiama'
              value={state.name} onChange={handleChange}
            />
          </div>

          <div className='form--right-side'
            variant='outlined' color='secondary'
          >
            <TextField select
              variant='outlined' color='secondary'  
              className={`field--input select`} name="maritalStatus" id="maritalStatus" 
              label='Estado civil:' labelId='maritalStatusLabel'
              value={state.maritalStatus} onChange={handleChange}
              options={options}
            >
              {options.map((option) => {
                return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              })}
            </TextField>
          </div>
        </div>
        <div className='form-side-by-side'>

          <div className='form--left-side'>
            <TextField 
              type="date"
              // format="DD/MM/yyyy"
              variant='outlined' color='secondary'  
              className='field--input date-input' name="birthDate" label='Data de nascimento: '
              value={state.birthDate} onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div className='form--right-side'>
            <TextField 
              multiline rows="10"
              variant='outlined' color='secondary'  
              className='field--input' name="description" id="description"  
              value={state.description} onChange={handleChange}
              placeholder='Faça um resumo de suas qualificações, habilidades e realizações profissionais.'
              label='Descrição profissional: '
              >
            </TextField>
          </div>
        </div>

        <div className='form-footer'>
          <button type="submit" className='submit-button'>
            Enviar
          </button>
        </div>

      </form>

    </div>

  );
}
 
export default Registration;