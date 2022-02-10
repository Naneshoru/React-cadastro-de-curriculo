import { TextField } from "@material-ui/core";

const ProfissionalInfo = ({ state, handleChange }) => {
  return ( 
    <>
      <div className='data-category'><p>Dados profissionais</p></div>

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
            label='Descrição profissional'
            >
          </TextField>
        </div>
      </div>
    </>
  );
}
 
export default ProfissionalInfo;