import * as yup from 'yup';

export const SchemaForm = yup.object().shape({
  M1: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Generale 1er est requise'),
  M2: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Generale 2eme est requise'),
  Mbac: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Bac est requise'),
  Manglais1: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Anglais 1er est requise'),
  Manglais2: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Anglais 2eme est requise'),
  Mfr1: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Francais 1er est requise'),
  Mfr2: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(0, 'La valeur minimale est de 0')
    .max(20, 'La valeur maximale est de 20')
    .required('Moyenne Francais 2eme est requise'),
  NbEtdudiant1: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(10, 'La valeur minimale est de 10')
    .required("Nombre d'étudiants de la promotion 1er est requis"),
  NbEtdudiant2: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .min(10, 'La valeur minimale est de 10')
    .required("Nombre d'étudiants de la promotion 2eme est requis"),
  Rang1: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .required('Votre rang en 1er est requis'),
  Rang2: yup.number()
    .transform(value => (isNaN(value) ? undefined : parseFloat(value)))
    .typeError('Doit être un nombre')
    .required('Votre rang en 2eme est requis'),
  dateDeNaissance: yup.date()
    .typeError('Doit être une date valide')
    .required('Date de naissance est requise'),
});
