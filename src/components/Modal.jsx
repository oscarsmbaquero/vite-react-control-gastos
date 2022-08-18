import React,{useState, useEffect} from 'react';
import CerrarModal from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({ setModal, animarModal,setAnimarModal,guardarGasto, gastoEditar}) => {

    const [nombre,setNombre] = useState('');
    const [cantidad,setCantidad] = useState('');
    const [categoria,setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0 ){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
    }
    }, [])
    


 const cerrarModal = () =>{   
        setAnimarModal(false);

    setTimeout(() => {
        setModal(false);
    }, 500);
 }

 const handleSubmit = (e) =>{
    e.preventDefault();
    
    if([nombre, cantidad, categoria].includes('')){
       setMensaje ('Campos Requeridos');

       setTimeout(() => {
         setMensaje('');
       }, 2000);
     return
    }
    guardarGasto({nombre,cantidad,categoria});
    setModal(false);
 }



  return (
    <div className="modal">
       <div className="cerrar-modal">
         <img
            src={CerrarModal}
            alt="cerrar modal"
            onClick={cerrarModal}
         />
       </div>
       <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`} >
          <legend>Nuevo Gasto</legend>
            {mensaje  && <Mensaje tipo ="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor='nombre'>Nombre del Gasto</label>
                    <input 
                        id="nombre"
                        type="text"
                        placeholder="Añade el Nombre del Gasto"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                    <input 
                        id="cantidad"
                        type="number"
                        placeholder="Cantidad del gasto"
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
            </div>
            <div className="campo">
                <label htmlFor='categoria'>Tipo de Gasto</label>
                <select
                
                id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option> 
                </select>
            </div>
            <input type="submit" value='Añadir'/>
       </form>
    </div>
  )
}

export default Modal