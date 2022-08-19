import React from 'react';

import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupesto from './ControlPresupesto'

const Header = ({presupuesto,
                 setPresupuesto,
                 isValidPresupesto,
                 setIsValidPresupuesto,
                 gastos,
                 setGastos
                }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
         {isValidPresupesto?(
          <ControlPresupesto presupuesto={presupuesto} gastos={gastos} setGastos={setGastos} setPresupuesto={setPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/>
         ):(
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
        />
         )
         }
        
    </header>
  )
}

export default Header