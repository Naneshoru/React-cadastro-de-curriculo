import { Grid, Typography } from '@material-ui/core';
import moment from "moment";
import React from 'react'

const ConfirmInfo = ({ state }) => {
  const propertiesToPortuguese = (prop) => {
    switch (prop) {
      case 'name':
        return 'Nome';
      case 'maritalStatus':
        return 'Estado civil';
      case 'email':
        return 'E-mail';
      case 'birthDate':
        return 'Data de nascimento';
      case 'phone':
        return 'Telefone';
      case 'cell':
        return 'Celular';
      case 'hasChild':
        return 'Filho(s)';
      case 'objective':
        return 'Objetivo profissional';
      case 'url':
        return 'Link';
      case 'description':
        return 'Descrição';
      case 'curriculum':
        return 'Currículo';
      default:
        return prop;
    }
  }

  const valuesToPortuguese = (value) => {
    switch (value) {
      case 'Single':
        return 'Solteiro(a)'
      case 'Married':
        return 'Casado(a)'
      case 'Separate':
        return 'Separado(a)'
      case 'Divorciado':
        return 'Divorced(a)'
      case 'Widowed':
        return 'Viúvo(a)'
      case true:
        return 'Sim'
      case false:
        return 'Não'
      default:
        return value;
    }
  }

  const formatIfDate = (date) => {
    console.log(date)
    const formattedDate = moment(date).format('DD/MM/YYYY');
    console.log(formattedDate)

    return moment.isMoment(date) ? formattedDate : date
  }

  return ( 
    <>
      <h3>Confirme seus dados</h3>
      <Grid container style={{ padding: '24px' }}>
        <Grid item md={3} />
        <Grid item container md={8} spacing={2}>
          {Object.keys(state).map((field) => {
            return (
              <Grid item key={field} md={12}>
                <Typography align='left'>
                  <span className='property'>{ propertiesToPortuguese(field) + ': ' }</span> 
                  <span className='value'>{ valuesToPortuguese(formatIfDate(state[field])).toString() }</span>
                </Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid item md />

      </Grid>      
    </>
  );
}
 
export default ConfirmInfo;