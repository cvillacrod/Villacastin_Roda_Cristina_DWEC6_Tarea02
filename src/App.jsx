import { useState,useEffect } from 'react'
import './App.css'
import { TituloComponente } from './titulo.jsx';
import { TrabajadorComponente } from './trabajador.jsx';
import { ImagenTrabajadorComponente } from './imagen.jsx';
import { BorrarComponente } from './boton.jsx';


function App() {

  //estado para users, que primero esta vacio y con serUsers actuliza el estado
  const [users, setUsers] = useState([]);

  //se renderiza al principio y cada vez que se cambia
  useEffect(() => {    
    //función asíncrona que realiza la solicitud a la API 
    const fetchUsers = async () => {      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) 
        {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();

        setUsers(data);  //para actualizar el estado con los datos obtenidos
      
      } catch (error) 
      {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();  //llama a la funcion la primera vez
  }, []);

  //console.log(users);

  //función para eliminar un usuario por el ID
  const handleDeleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <main>
      <section className="container">

        <TituloComponente titulo={`Tenemos una plantilla de ${users.length} trabajadores`} />
        
            {users.map(user => (
              <article className="person" key={user.id}>
                <ImagenTrabajadorComponente id={user.id} name={user.name}></ImagenTrabajadorComponente>

                <TrabajadorComponente
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                />

                <BorrarComponente id={user.id} onClick={() => handleDeleteUser(user.id)} />
          
              </article>
            ))}

        
      </section>
    </main>



  )
}

export default App



          
          
