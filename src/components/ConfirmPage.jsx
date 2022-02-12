import { List, ListItem, ListItemText } from '@material-ui/core';
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
        break;
    }
  }

  const formatIfDate = (date) => {
    const formattedDate = moment(date).format('DD-MM-YYYY');
    return moment(date).isValid() ? formattedDate : date
  }

  return ( 
    <>
      <h3>Confirme seus dados</h3>
      <List style={{ padding: '24px' }}>    
        {Object.keys(state).map((field) => {
          return (
            <ListItem key={field} >
              <ListItemText primary={
                <>
                  <span className='property'>{ propertiesToPortuguese(field) + ': ' }</span> 
                  <span className='value'>{ valuesToPortuguese(formatIfDate(state[field])) }</span>
                </>
              } />
            </ListItem>
          );
        })}
      </List>      
    </>
  );
}
 
export default ConfirmInfo;