import React , { useRef ,useState , useContext}from 'react';
import context from '../../context';
const index = () => {
    const {user} = useContext(context)
    
    return (
        <div className='page'>
           { user.length > 0 ? (   user.map((users)=>{
                 return <div className="card shadow bg-danger w-50  m-3 ">
                    item
                    <div>
                    {users.id}   {users.title} {users.completed} 
                    </div>
                 </div>
            })
            ):(
            <h1>Loading..</h1>) 
           }
           console.log(users);
        </div>
    );
};

export default index;