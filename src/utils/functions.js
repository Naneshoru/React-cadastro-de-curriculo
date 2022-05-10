import moment from "moment";

export const propertiesToPortuguese = (prop) => {
  switch (prop) {
    case 'fullName':
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

export const valuesToPortuguese = (value) => {
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

export const formatIfDate = (date) => {
  const formattedDate = moment(date).format('DD/MM/YYYY');
  
  return moment.isMoment(date) ? formattedDate : date
}