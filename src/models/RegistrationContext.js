import { createContext, useContext, useState } from "react";
import moment from "moment";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {

  const pageNames = ['Dados pessoais', 'Dados profissionais', 'Confirmação de dados']
  const lastPageStep = pageNames.length - 1;
  const [stepperState, setStepperState] = useState({
    step: 0
  })

  const nextStep = (e) => {
    e.preventDefault();
    const { step } = stepperState;

    setStepperState({ ...stepperState, step: step + 1 });
  }

  const previousStep = (e) => {
    e.preventDefault();
    const { step } = stepperState;

    setStepperState({ ...stepperState, step: step - 1 });
  }

  const [formState, setState] = useState({
    fullName: '',
    maritalStatus: 'Single',
    email: '',
    birthDate: moment(),
    phone: '',
    cell: '',
    hasChild: false,
    objective: '',
    url: '',
    description: '',
    curriculum: ''
  });

  const required = 'Campo obrigatório';

  const [errors, setErrors] = useState({
    fullName: required,
    maritalStatus: '',
    email: required,
    birthDate: '',
    phone: '',
    cell: required,
    hasChild: '',
    objective: required,
    url: '',
    description: required,
    curriculum: required
  });

  const [showErrors, setshowErrors] = useState({
    fullName: false,
    maritalStatus: false,
    email: false,
    birthDate: false,
    phone: false,
    cell: false,
    hasChild: false,
    objective: false,
    url: false,
    description: false,
    curriculum: false
  })

  
  const setEventTargetNameAndValue = (name, value) => ({
    target: {
      name, value
    }
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'fullName':
        setState({...formState, fullName: e.target.value });
        setErrors({ ...errors, fullName: '' });
        if (!RegExp(/^([\w]{2,})+\s+([\w\s]{2,})+$/i).test(e.target.value)) {
          setErrors({ ...errors, fullName: 'Campo obrigatório' });
        }
        break;
      case 'maritalStatus':
        setState({...formState, maritalStatus: e.target.value });
        break;
      case 'email':
        setState({...formState, email: e.target.value });
        setErrors({ ...errors, email: '' });
        if (!RegExp(/^\S+@\S+\.\S+$/).test(e.target.value)) {
          setErrors({ ...errors, email: 'Formato de e-mail inválido' });
        }
        break;
      case 'birthDate':
        setState({...formState, birthDate: e.target.value });
        break;
      case 'phone':
        setState({...formState, phone: e.target.value });
        setErrors({ ...errors, phone: '' });

        if (!RegExp(/^$|^\d{8,}$/).test(e.target.value)) {
          setErrors({ ...errors, phone: 'Campo requer pelo menos 8 dígitos' });
        }
        if (!RegExp(/^\d*$/).test(e.target.value)) {
          setErrors({ ...errors, phone: 'Somente números são permitidos' });
        }
        break;
      case 'cell':
        setState({...formState, cell: e.target.value });
        setErrors({ ...errors, cell: '' });
        if (!RegExp(/^\d{9,}$/).test(e.target.value)) {
          setErrors({ ...errors, cell: 'Campo requer pelo menos 9 dígitos' });
        }
        if (!RegExp(/^\d*$/).test(e.target.value)) {
          setErrors({ ...errors, cell: 'Somente números são permitidos' });
        }
        break;
      case 'hasChild':
        setState({...formState, hasChild: e.target.value });
        break;
      case 'objective':
        setState({...formState, objective: e.target.value });
        setErrors({ ...errors, objective: '' });

        if (RegExp(/^$/i).test(e.target.value)) {
          setErrors({ ...errors, description: 'Campo obrigatório' });
        }

        if (!RegExp(/^([a-z0-9\s])*$/i).test(e.target.value)) {
          setErrors({ ...errors, objective: 'Apenas letras, números e espaços' });
        }
        break;
      case 'description':
        setState({...formState, description: e.target.value });
        setErrors({ ...errors, description: '' });

        if (RegExp(/^$/i).test(e.target.value)) {
          setErrors({ ...errors, description: 'Campo obrigatório' });
        }

        if (!RegExp(/^([a-z0-9\s])*$/i).test(e.target.value)) {
          setErrors({ ...errors, description: 'Apenas letras, números e espaços' });
        }

        break;
      case 'url':
        setState({...formState, url: e.target.value });
        setErrors({ ...errors, url: '' });

        if (!RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).test(e.target.value)) {
          setErrors({ ...errors, url: 'Campo inválido' });
        }
        break;
      case 'curriculum':
        setState({...formState, curriculum: e.target.value });
        setErrors({ ...errors, curriculum: '' });

        if (!RegExp(/^.*\.(doc|DOC|docx|DOCX|pdf|PDF)$/).test(e.target.value)) {
          setErrors({ ...errors, curriculum: 'Somente arquivos nos formatos doc, docx ou pdf' });
        }
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    alert(`
      step: ${formState.step}
      fullName: ${formState.fullName}
      maritalStatus: ${formState.maritalStatus}
      birthDate: ${formState.birthDate}
      email: ${formState.email}
      phone: ${formState.phone}
      cell: ${formState.cell}
      hasChild: ${formState.hasChild}
      objective: ${formState.objective}
      description: ${formState.description}
      link: ${formState.link}
      curriculum: ${formState.curriculum}
    `)
    e.preventDefault();
  }

  const handleShowErrors = (e) => {
    switch (e.target.name) {
      case 'fullName':
      case 'maritalStatus':
      case 'email':
      case 'birthDate':
      case 'phone':
      case 'cell':
      case 'hasChild':
      case 'objective':
      case 'description':
      case 'url':
      case 'curriculum':
        setshowErrors({...showErrors, [e.target.name]: true });
        break;
      default:
        break;
    }
  }

  const isSubmitDisabled = () => 
    Object.values(errors).length ? true : false

  return (
    <RegistrationContext.Provider 
      value={{ 
        pageNames, lastPageStep, 
        stepperState, previousStep, nextStep, 
        formState, errors, showErrors,   
        handleChange, handleSubmit, isSubmitDisabled, handleShowErrors, 
        setEventTargetNameAndValue
      }}
    >
      { children }
    </RegistrationContext.Provider>
  )
}

export function useRegistration() {
  return useContext(RegistrationContext)
};