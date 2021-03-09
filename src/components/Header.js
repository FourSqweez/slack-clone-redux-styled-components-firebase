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
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
          // TODO: Add onclick
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
