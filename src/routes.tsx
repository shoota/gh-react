import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

const Wrapper = styled.div`
  margin: 40px;
`

const Example = () => {
  return (
    <Wrapper>
      <h1>webpack Example</h1>
      <Button variant="success">Hello React Bootstrap</Button>
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
