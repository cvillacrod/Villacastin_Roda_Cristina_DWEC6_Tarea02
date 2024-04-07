//componente que devuelve la iamgen del trabajador
export const ImagenTrabajadorComponente = ({ id,name }) => {  

  const imageUrl = `https://randomuser.me/api/portraits/men/${id - 1}.jpg`;

    return (              
          
             <img src={imageUrl} alt={name} />

     );
   }
  