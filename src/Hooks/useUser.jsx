import { useRecoilState } from 'recoil'

import { userAuthState } from '../Recoil/userAtom'

const useLogIn = () => {
  const [user, setUser] = useRecoilState(userAuthState)

  const signIn = (data) => setUser(data)

  const signOut = () => setUser({})

  return {
    user,
    signIn,
    signOut,
  }
}
export default useLogIn
