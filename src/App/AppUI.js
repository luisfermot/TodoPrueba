import { Item } from '../Item';
import { Search } from '../Search';
import { ItemList } from '../ItemList';
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from "../CreateTodoButton"
import { Loading } from '../Loading';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

const AppUI = () => {
  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
      <div className="App">
        <div className='header'>
          <TodoCounter  />
        </div>
        <div className='option'>
          {/* 
            SE PUEDEN USAR LAS PROPS GLOBALES CON EL CONSUMER O CON EL HOOK USECONTEX.
            */}
          <TodoContext.Consumer>
            {
              (
                {
                  searchTodo,
                  completeTodo,
                  deletedTodo,
                  loading,
                  error,
                }
              )=>(
                <>
                  <Search />
                  <ItemList>
                    {loading && 
                      <>
                        <Loading />
                        <Loading />
                        <Loading />
                      </>
                    }
                    {error && <p>Desesperata, hubo un error!!</p>}
                    {
                      (!loading && searchTodo.length === 0 ) && 
                      <p>Crea tu primer Todo!!</p>
                    }
                    {
                    searchTodo.map((item)=> (
                    <Item 
                        key={item.text} 
                        text={item.text} 
                        completed={item.completed} 
                        onCompleted={()=>(completeTodo(item.text))}
                        onDeleted={()=>(deletedTodo(item.text))}
                    />

                    ))}
                  </ItemList>
                </>
              )
            }
          </TodoContext.Consumer>

  
          <CreateTodoButton  action={()=>(setOpenModal(!openModal))}/>
          {openModal &&
            <Modal>
              <TodoForm/>  
            </Modal>
          }
        </div>
        <div className='footer'>
          <h2>footer</h2>
        </div>
      </div>
    );
}

export { AppUI };