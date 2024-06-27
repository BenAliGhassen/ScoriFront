import { useFormik } from 'formik';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { SendScore } from '../Functions/SendScoreReq';
import Swal from 'sweetalert2';
import { setRank } from '../Redux/Reducer/Ranking';

function UserInfoForm() {
  const scoreA = useSelector((state) => state.Score.value);
 const dispatch = useDispatch()

  const submit = (values,actions)=>{
    if (scoreA !== null){
      SendScore(values,scoreA)

      setTimeout(()=>{
        actions.resetForm();
        dispatch(setRank(true))
      },1000)
    }else{
      Swal.fire({
        title: "Pas de score",
        text: "Calculer votre score avant",
        icon: "warning",
        
      })
    }
    
  }
const{handleBlur,handleChange,handleSubmit,values}=useFormik({
initialValues : {
  nom : '',
  prenom : '',
  etablisement : '',
},
onSubmit : submit
})

  return (
    <div className='m-5 mx-2'>
      <form method='POST' className='d-flex flex-rox' onSubmit={handleSubmit}>
        
        <input 
        type='text'
        className='rounded m-2 w-25'
        placeholder='Nom'
        name='nom'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.nom}  
        required
          />

        
        <input 
        type='text' 
        className='rounded m-2 w-25' 
        placeholder='Prenom'
        name='prenom'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.prenom} 
        required
        />


        <input 
        type='text' 
        className='rounded m-2 w-25' 
        placeholder='Etablisement'
        name='etablisement'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.etablisement} 
        required
        />

        <Button 
type='submit'
className='rounded border-0 w-5 mt-2' 
variant="primary"
>Voir rang</Button>
      </form>
    </div>
  )
}

export default UserInfoForm
