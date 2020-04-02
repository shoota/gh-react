import * as React from 'react'
import styled from '@emotion/styled'

export type Props = {
  innerText: string
}

const StyledButton = styled.button`
  color: #e22e22;
`

export const BasicButton = ({ innerText }: Props) => {
  return <StyledButton type="button">{innerText}</StyledButton>
}
