import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { SchemaForm } from '../Schema/FormSchema'
import FormError from './FormError'
import Button from 'react-bootstrap/Button';
import { CalculerScoreA } from '../Functions/CalcScoreA';
import {useDispatch } from 'react-redux'
import { setScore } from '../Redux/Reducer/ScoreA';

function FormulaireChamps() {

  const [scoreA,setScoreA]=useState(null)
  const dispatch = useDispatch();

const submit = (values)=>{
 setScoreA(CalculerScoreA(values))
}

useEffect(()=>{

dispatch(setScore(scoreA))

// eslint-disable-next-line react-hooks/exhaustive-deps
},[scoreA])

const {handleBlur,handleSubmit,handleChange,values,errors,touched}=useFormik({
initialValues : {
  M1 : 10 ,
  M2 : 10 ,
  Mbac : 10,
  Manglais1 : 10 ,
  Manglais2 : 10 ,
  Mfr1 : 10 ,
  Mfr2 : 10 ,
  NbEtdudiant1 : 20 ,
  NbEtdudiant2 : 20 ,
  Rang1 : 1,
  Rang2 : 1,
  dateDeNaissance : "",
},
validationSchema : SchemaForm,
onSubmit :submit,
})

  return (
    <div>
      <h1>Veuillez fournir vos informations :</h1>
        <form className='d-flex flex-column m-3' onSubmit={handleSubmit}>


<label className='mx-1'>Moyenne Generale 1er</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} max={20}  step="0.01"
value={values.M1} 
onChange={handleChange} 
onBlur={handleBlur} 
name='M1'
/>
{errors.M1 && touched.M1 && <FormError error={errors.M1}/>}

<label className='mx-1'>Moyenne Generale 2eme</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} 
max={20} 
step="0.01"
value={values.M2} 
onChange={handleChange} 
onBlur={handleBlur} 
name='M2'
/>
{errors.M2 && touched.M2 && <FormError error={errors.M2} />}

<label className='mx-1'>Moyenne Bac</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} 
max={20} 
step="0.01"
value={values.Mbac} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Mbac'
/>
{errors.Mbac && touched.Mbac && <FormError error={errors.Mbac}/>}


<label className='mx-1'>Moyenne Anglais 1er</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} 
max={20}  
step="0.01"
value={values.Manglais1} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Manglais1'
/>
{errors.Manglais1 && touched.Manglais1 && <FormError error={errors.Manglais1} />}

<label className='mx-1'>Moyenne Anglais 2eme</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} 
max={20}  
step="0.01"
value={values.Manglais2} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Manglais2'
/>
{errors.Manglais2 && touched.Manglais2 && <FormError error={errors.Manglais2}/>}


<label className='mx-1'>Moyenne Francais 1er</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} 
max={20} 
step="0.01"
value={values.Mfr1} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Mfr1'
/>
{errors.Mfr1 && touched.Mfr1 && <FormError error={errors.Mfr1}/>}

<label className='mx-1'>Moyenne Francais 2eme</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={0} 
max={20} 
step="0.01"
value={values.Mfr2} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Mfr2'
/>
{errors.Mfr2 && touched.Mfr2 && <FormError error={errors.Mfr2}/>}


<label className='mx-1'>Nombre d'etudiants de la promotion 1er</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={10}
value={values.NbEtdudiant1} 
onChange={handleChange} 
onBlur={handleBlur} 
name='NbEtdudiant1'
/>
{errors.NbEtdudiant1 && touched.NbEtdudiant1 && <FormError error={errors.NbEtdudiant1}/> }

<label className='mx-1'>Nombre d'etudiants de la promotion 2eme</label>
<input 
type='number' 
className='m-1 rounded w-50' 
min={10} 
value={values.NbEtdudiant2} 
onChange={handleChange} 
onBlur={handleBlur} 
name='NbEtdudiant2'
/>
{errors.NbEtdudiant2 && touched.NbEtdudiant2 && <FormError error={errors.NbEtdudiant2}/>}

<label className='mx-1'>votre rang en 1er</label>
<input 
type='number' 
className='m-1 rounded w-50'
value={values.Rang1} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Rang1'
/>
{errors.Rang1 && touched.Rang1 && <FormError error={errors.Rang1}/>}

<label className='mx-1'>votre rang en 2eme</label>
<input 
type='number' 
className='m-1 rounded w-50'
value={values.Rang2} 
onChange={handleChange} 
onBlur={handleBlur} 
name='Rang2'
/>
{errors.Rang2 && touched.Rang2 && <FormError error={errors.Rang2}/>}

<label className='mx-1'>Date de naissance</label>
<input 
type='date' 
className='m-1 rounded w-50' 
placeholder='Date de naissance' 
value={values.dateDeNaissance} 
onChange={handleChange} 
onBlur={handleBlur} 
name='dateDeNaissance'
/>
{errors.dateDeNaissance && touched.dateDeNaissance && <FormError error={errors.dateDeNaissance}/>}

<Button 
type='submit'
className='rounded border-0 w-50 mt-2' 
variant="primary"
>Get Score</Button>
</form>
{scoreA && <h2 className='mx-2'>Score A : {scoreA}</h2>}
    </div>
  )
}

export default FormulaireChamps
