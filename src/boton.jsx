//componente que devuelve el boton de cada trabajador
export const BorrarComponente = ({ id,onClick }) => {  
    return (     
    
     <button type='button' className='delete-btn' data-id={id} onClick={onClick} >
      <img src='./src/trash.png' />
    </button>
    
    );

   }

  

 
        