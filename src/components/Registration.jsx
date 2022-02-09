import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, MenuItem, TextField } from '@material-ui/core';
import './Registration.scss'

const Registration = () => {
  const [state, setState] = useState({
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
    `)
    e.preventDefault();
  }

  const maritalOptions = [
    {label: "Solteiro(a)", value: 'Single'},
    {label: "Casado(a)", value: 'Married'},
    {label: "Separado(a)", value: 'Separate'},
    {label: "Divorciado(a)", value: 'Divorced'},
    {label: "Viúvo(a)", value: 'Widowed'}
  ]

  const checkedValueToEventName = (name, value) => ({
    target: {
      name, value
    }
  })

  return ( 
    <div className='form-wrapper'>
      <form className='form-container' onSubmit={(e) => handleSubmit(e)} >
        
        <div className='form-header'><strong><p>Currículo</p></strong></div>

        <div className='data-set'><p>Dados pessoais</p></div>

        <div className='form-side-by-side'>
          <div className='form--left-side'>
            <TextField 
              type="text" name="fullName"
              variant='outlined' color='secondary'
              className='field--input'
              label='Nome' placeholder='Ex: Ricardo Atakiama'
              value={state.name} onChange={handleChange}
            />
          </div>
          <div className='form--right-side'>
            <TextField 
              select name="maritalStatus"
              variant='outlined' color='secondary'  
              className={`field--input align-left`} 
              label='Estado civil:'
              value={state.maritalStatus} onChange={handleChange}
              options={maritalOptions}
             
            >
              {maritalOptions.map((option) => {
                return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              })}
            </TextField>
          </div>
        </div>
        <div className='form-side-by-side'>
          <div className='form--left-side'>
            <TextField
              type='email' name='email'
              variant='outlined' color='secondary'
              className='field--input'
              label='E-mail' placeholder='Ex: atakiama@usp.br'
              value={state.email} onChange={handleChange}
            >
            </TextField>
          </div>

          <div className='form--right-side'>
            <TextField 
              type="date" name="birthDate"
              // format="DD/MM/yyyy"
              variant='outlined' color='secondary'  
              className='field--input date-input' 
              label='Data de nascimento' InputLabelProps={{ shrink: true }}
              value={state.birthDate} onChange={handleChange}
            />
          </div>
        </div>

        <div className='form-side-by-side'>
          <div className='form--left-side'>
            <TextField
              type='text' name="phone"
              variant='outlined' color='secondary'
              className='field--input'
              label='Telefone' placeholder='Ex: (12)12345-1234'
              value={state.phone} onChange={handleChange}
            >
            </TextField>
          </div>
          <div className='form--right-side'>
            <TextField
              type='text' name="cell"
              variant='outlined' color='secondary'
              className='field--input'
              label='Celular' placeholder='Ex: (16)99464-3295'
              value={state.cell} onChange={handleChange}
            >
            </TextField>
          </div>
        </div>

        <div className='form-side-by-side'>
                  
          <div className='form--left-side'   >
            <FormControl className='field--input'>
              <FormControlLabel control={
                <Checkbox
                  name="hasChild"  
                  color='secondary'
                  checked={state.hasChild} onChange={(e) => handleChange(checkedValueToEventName('hasChild', e.target.checked))}
                >
                </Checkbox>}
                label='Possui filho(s)?'
                
              >
              </FormControlLabel>
            </FormControl>
          </div>
        </div>

        <div className='form-side-by-side'>
          <div className='form--left-side'>
              <TextField
                type='text' name="objective"
                variant='outlined' color='secondary'
                className='field--input'   
                label='Objetivo profissional' placeholder='Ex: Desenvolvimento Front-End'
                value={state.objective} onChange={handleChange}
              >
              </TextField>
          </div>
        </div>

        <div className='form-side-by-side'>
          <div className='form--left-side'>
            <TextField 
              multiline name="description" rows="10"
              variant='outlined' color='secondary'  
              className='field--input'   
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