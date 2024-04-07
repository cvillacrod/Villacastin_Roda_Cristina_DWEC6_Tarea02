//componente que devuelve los datos del trabajador
export const TrabajadorComponente = ({ id,name,email, phone }) => {  

   return (              
          
            <div>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
      
     );
   }
  
