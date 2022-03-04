import React from 'react'
import {useParams} from 'react-router-dom'

const UserDetails = () => {
    // Method 1
    // const params= useParams()
    // const userId= params.userId

    // Method 2
    const {userId}=useParams()

  return (
    <div>
        Details about User {userId}
    </div>
  )
}

export default UserDetails