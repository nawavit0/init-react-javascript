import styled from 'styled-components'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCounter } from 'src/redux/slices/counterSlice'

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
`

const LandingPage = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state?.counter)

  const handleClick = () => {
    dispatch(increaseCounter())
  }

  return (
    <StyledButton type="primary" onClick={handleClick}>
      {count}
    </StyledButton>
  )
}

export default LandingPage
