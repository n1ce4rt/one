import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'



type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { 
    const [name, setName] = useState<string>('')
    
    const [error, setError] = useState<string>('') 

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setName(e.currentTarget.value)   
    }
    const addUser = () => {

        if( name.length === 0) {
            setError('тут пусто тупой ты !')
        } else {
            setError('')
            alert(`Hello  ${name}!`) 
            addUserCallback(name)
            setName('')
        }

       
        
    }

    const totalUsers = users.length 

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
