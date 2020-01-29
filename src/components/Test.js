import React from 'react'
import { replaceMessage } from './Input'

const ReplaceWithComponent = ({ string }) => {
  return (<span>{string}</span>)
}

const message = 'This is {TESTTING} component'

const Test = () => {
  return <div>
    {replaceMessage(message, '{TESTTING}',
      <ReplaceWithComponent string="Demo" />)}</div>
}

export default Test
