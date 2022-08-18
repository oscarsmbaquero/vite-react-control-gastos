import React,{useEffect,useState} from 'react'

const ControlPresupesto = ({presupuesto,gastos}) => {

  const [disponible,setDisponible]=useState(0);
  const [gastado,setGastado]=useState(0);

 useEffect(() => {
   
 const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0
 )

 const totalDisponible = presupuesto-totalGastado;
 setDisponible(totalDisponible);


 setGastado(totalGastado) 
 }, [gastos])

 const efectivo = () =>{

 }
 

  const formatCantidad = (cantidad) => {
    return cantidad.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
     })
}

        
      
  
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
          <p>Grafica</p>
        </div>
        <div className='contenido-presupuesto'>
          <p>
            <span>Presupuesto:</span> {formatCantidad(presupuesto)}
          </p>
          <p>
            <span>Disponible:</span> {formatCantidad(disponible)}
          </p>
          <p>
            <span>Gastado:</span> {formatCantidad(gastado)}
          </p>

        </div>
    
    </div>
  )
}

export default ControlPresupesto