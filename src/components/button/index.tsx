import * as React from 'react'

export type Props = {
  innerText: string
}

export const BasicButton = ({ innerText }: Props) => {
  return <button type="button">{innerText}</button>
}
