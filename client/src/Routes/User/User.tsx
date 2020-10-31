import React from "react"
import { useParams } from "react-router-dom"
import WindowTitle from "../../UI/WindowTitle"
import UserQuery from "./UserQuery"

interface IUserParams {
  id: string
}

const User: React.FC = () => {
  const { id } = useParams<IUserParams>()

  return (
    <UserQuery id={id}>
      {({ data: { user } }) => (
        <>
          <WindowTitle title={user.name} />
          <h1>{user.name}</h1>
        </>
      )}
    </UserQuery>
  )
}

export default User
