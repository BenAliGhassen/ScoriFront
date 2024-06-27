import React from 'react'

function FormError({error}) {
  return (
    <div className='text-danger mx-1'>
      {error}
    </div>
  )
}

export default FormError
