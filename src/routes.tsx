import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 40px;
`

const Example = () => {
  return (
    <Wrapper>
      <h1>webpack Example</h1>
    </Wrapper>
  )
}

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Example} path="/" exact />
    </Switch>
  </BrowserRouter>
)
