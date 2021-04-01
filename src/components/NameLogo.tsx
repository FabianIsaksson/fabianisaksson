import styled from 'styled-components'
import { ReactComponent as Name } from '../assets/svg/name.svg'
import { THEME } from '../theme/theme'

export const NameLogo = styled(Name)`
  fill: ${({ theme }) => (theme.type === THEME.LIGHT ? '#000' : '#fff')};
  transition: fill 500ms ease;
`
