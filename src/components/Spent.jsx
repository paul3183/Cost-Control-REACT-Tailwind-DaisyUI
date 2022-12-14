import React from 'react'
import { formatDate } from './helpers'
import iconSave from '../img/icono_ahorro.svg'
import iconHome from '../img/icono_casa.svg'
import iconFood from '../img/icono_comida.svg'
import iconExpense from '../img/icono_gastos.svg'
import iconFree from '../img/icono_ocio.svg'
import iconHealth from '../img/icono_salud.svg'
import iconSuscriptions from '../img/icono_suscripciones.svg'

const iconDicctionary = {
  saving: iconSave,
  food: iconFood,
  home: iconHome,
  others: iconExpense,
  free: iconFree,
  health: iconHealth,
  subscriptions: iconSuscriptions,
}


const Spent = ({ expen }) => {
  const { category, name, amount, id, date } = expen;
  return (
    <div className='border-2 '>
      <div className=' flex items-center'>
        <div>
          <p>{category}</p>
          <p>{name}</p>
          <p>Added in: {formatDate(date)}</p>
        </div>
        <div className=''>
          <img className='w-[30px]' src={iconDicctionary[category]} alt="icon expense" />
        </div>


      </div>
      <p>${amount}</p>
    </div>
  )
}

export default Spent