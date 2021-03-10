import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
  SearchIcon,
  AccessTimeIcon,
  HelpOutlineIcon,
} from './Header.style'

function Header() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            onClick={() => auth.signOut()}
            alt={user?.displayName}
            src={user?.photoURL}
          />
          <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="Search ..." />
        </HeaderSearch>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </div>
  )
}

export default Header
