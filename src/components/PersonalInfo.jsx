import { Checkbox, FormControl, FormControlLabel, MenuItem, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers'
import React from 'react';

const PersonalInfo = ({ state, handleChange, errors }) => {
  const maritalOptions = [
    {label: "Solteiro(a)", value: 'Single'},
    {label: "Casado(a)", value: 'Married'},
    {label: "Separado(a)", value: 'Separate'},
    {label: "Divorciado(a)", value: 'Divorced'},
    {label: "Viúvo(a)", value: 'Widowed'}
  ]

  const setEventNameAndValue = (name, value) => ({
    target: {
      name, value
    }
  })

  return ( 
    <>
      <div className='form-side-by-side'>
        <div className='form--left-side'>
          <TextField autoFocus required
            type="text" name="fullName"
            variant='outlined' color='secondary'
            className='field--input'
            label='Nome' placeholder='Ex: Ricardo Atakiama'
            value={state.name} onChange={handleChange}
            error={Boolean(errors?.name)}
            helperText={(errors?.name)}
          />
        </div>
        <div className='form--right-side'>
          <TextField required
            select name="maritalStatus"
            variant='outlined' color='secondary'  
            className={`field--input align-left`} 
            label='Estado civil'
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
          <TextField required
            type='email' name='email'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            variant='outlined' color='secondary'
            className='field--input'
            label='E-mail' placeholder='Ex: atakiama@usp.br'
            value={state.email} onChange={handleChange}
            error={Boolean(errors?.email)}
            helperText={(errors?.email)}
          >
          </TextField>
        </div>

        <div className='form--right-side'>
          <KeyboardDatePicker required
            autoOk
            disableToolbar
            id='date-picker' name="birthDate"            
            format="DD/MM/yyyy" 
            inputVariant="outlined"
            color='secondary'
            className='field--input date-input' 
            label='Data de nascimento'
            value={state.birthDate} onChange={e => handleChange(setEventNameAndValue('birthDate', e))}
            InputLabelProps={{ shrink: true }}
            invalidDateMessage='Formato de data inválida'
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
            error={Boolean(errors?.phone)}
            helperText={(errors?.phone)}
          >
          </TextField>
        </div>
        <div className='form--right-side'>
          <TextField required
            type='text' name="cell"
            variant='outlined' color='secondary'
            className='field--input'
            label='Celular' placeholder='Ex: (16)99464-3295'
            value={state.cell} onChange={handleChange}
            error={Boolean(errors?.cell)}
            helperText={(errors?.cell)}
          >
          </TextField>
        </div>
      </div>

      <div className='form-side-by-side'>
        <div className='form--left-side'   >
          <FormControl className='field--input'>
            <FormControlLabel 
              control={<Checkbox
                name="hasChild"  
                color='secondary'
                checked={state.hasChild} 
                onChange={(e) => {handleChange(setEventNameAndValue('hasChild', e.target.checked))}}
              />}
              label='Possui filho(s)?'
            >
            </FormControlLabel>
          </FormControl>
        </div>
      </div>
    </>
  );
}
 
export default PersonalInfo;