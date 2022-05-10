import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { formatIfDate, propertiesToPortuguese, valuesToPortuguese } from '../utils/functions';

const ConfirmInfo = ({ state }) => {
  return ( 
    <>
      <Grid container style={{ padding: '24px' }}>
        <Grid item xs={3} />
        <Grid item container xs={8} spacing={2}>
          {Object.keys(state).map((field) => {
            return (
              <Grid item key={field} xs={12}>
                <Typography align='left'>
                  <span className='property'>{ propertiesToPortuguese(field) + ': ' }</span> 
                  <span className='value'>{ valuesToPortuguese(formatIfDate(state[field])).toString() }</span>
                </Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid item xs />

      </Grid>      
    </>
  );
}
 
export default ConfirmInfo;