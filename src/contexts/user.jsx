import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => undefined
})
export const useUser = () => useContext(UserContext);

// eslint-disable-next-line
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
