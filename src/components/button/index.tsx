import * as React from 'react'
import { Button } from 'react-bootstrap'

export type Props = {
  innerText: string
}

export const BasicButton = ({ innerText }: Props) => {
  return <Button variant="primary">{innerText}</Button>
}
