import React,{useEffect, useState} from 'react'
import './profile.css'




function Profile() {
    const [data, setData ] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [firstName, setFN] = useState('');
    const [lastName, setLN] = useState('');
    const [email, setEmail] = useState('');




    useEffect(() => {
        fetch("https://reqres.in/api/users/2")
          .then(response => response.json())
          .then(data => {
            setAvatarUrl(data.data.avatar)
            setFN(data.data.first_name)
            setLN(data.data.last_name)
            setEmail(data.data.email)
          })
          .catch(err => console.log(err))
          
          
       
      }, []);
      
    

  return (
    <div className='User'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src= {avatarUrl} height="100px" width="100px"/>
            </div>
        </div>
        <div className="lower-container">

            <div className='details'>        
            <p>
            <h3>
                {firstName+' '+lastName}
            </h3>
            </p>
            <p>
            
                {email}
            
            </p>
                <button>Connect</button>
                <button>Messasge</button>  
            </div>   

        </div>

   
    </div>    
  )
}

export default Profile