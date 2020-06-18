// @flow
import React from 'react'
import { Container } from 'semantic-ui-react'
import type { typeCoreElementCard } from "./elementCard.type";

const CoreElementCard = (props: typeCoreElementCard) => {
  return (
     <div>{props.content}</div>
  )
}

export default CoreElementCard