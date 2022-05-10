import { TextField } from "@material-ui/core";

const ProfissionalInfo = ({ state, handleChange, setEventTargetNameAndValue, errors, showErrors, handleShowErrors }) => {

  return ( 
    <>
      <div className='form-side-by-side'>
        <div className='form--left-side'>
          <TextField autoFocus required
            type='text' name="objective"
            variant='outlined' color='secondary'
            className='field--input'   
            label='Objetivo profissional' placeholder='Ex: Desenvolvimento Front-End'
            value={state.objective} onChange={handleChange}
            error={showErrors.objective ? Boolean(errors?.objective) : false }
            helperText={errors.objective}
            onBlur={handleShowErrors}
          >
          </TextField>
        </div>
        <div className='form--right-side'>
          <TextField
            type='text' name="url"
            variant='outlined' color='secondary'
            className='field--input'   
            label='Link' placeholder='Ex: https://www.linkedin.com/in/ricardo-atakiama-4827411b5/'
            value={state.url} onChange={handleChange}
            error={showErrors.url ? Boolean(errors?.url) : false }
            helperText={errors.url}
            onBlur={handleShowErrors}
          >
          </TextField>
        </div>
      </div>

      <div className='form-side-by-side'>
        <div className='form--left-side'>
          <TextField required
            multiline name="description" rows="10"
            variant='outlined' color='secondary'  
            className='field--input'   
            value={state.description} onChange={handleChange}
            placeholder='Faça um resumo de suas qualificações, habilidades e realizações profissionais.'
            label='Descrição profissional'
            error={showErrors.description ? Boolean(errors?.description) : false }
            helperText={errors.description}
            onBlur={handleShowErrors}
            >
          </TextField>
        </div>
        <div className='form--right-side'>
          <TextField required
            type='file' name="curriculum"
            variant='outlined' color='secondary'
            className='field--input'
            label='Currículo' InputLabelProps={{ shrink: true }}
            onChange={(e) => {handleChange(setEventTargetNameAndValue('curriculum', e.target.files[0].name))}}
            error={showErrors.curriculum ? Boolean(errors?.curriculum) : false }
            helperText={errors.curriculum}
            onBlur={handleShowErrors}
          >
          </TextField>
        </div>
      </div>
    </>
  );
}
 
export default ProfissionalInfo;