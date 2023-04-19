import type { User } from 'component/types/user'
import { type ReactNode, useContext, useState, createContext } from 'react'

interface userType {
  user: User | undefined
  setUser: (user: User) => void
}

const userContextDefaultValues: userType = {
  user: {
    name: '',
    phone: '',
    balance: 0,
    birthday: null,
  },
  setUser: () => {},
}

const UserContext = createContext<userType>(userContextDefaultValues)

export function useUser() {
  return useContext(UserContext)
}

interface Props {
  children: ReactNode
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    name: '',
    phone: '',
    balance: 0,
    birthday: null,
  })

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
