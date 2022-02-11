import { List, ListItem, ListItemText } from '@material-ui/core';
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
        return 'descrição';
      case 'curriculum':
        return 'Currículo';
      default:
        return prop;
    }
  }

  return ( 
    <>
      <h3>Confirme seus dados</h3>
      <List>    
        {Object.keys(state).map((field) => {
          return (
            <ListItem key={field} >
              <ListItemText primary={
                <>
                  <span className='property'>{ propertiesToPortuguese(field) + ': ' }</span> 
                  <span className='value'>{ state[field] }</span>
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