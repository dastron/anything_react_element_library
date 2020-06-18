// @flow
import React from 'react'
import { Image } from 'semantic-ui-react'
import type { typeCoreElementImage } from "./elementImage.type";
import ReactMarkdown from 'react-markdown';

const CoreElementImage = (props: typeCoreElementImage) => {
  return (
    <div>
      { props.images && props.images.length > 0 &&
      (<Image.Group size='small'>
      { props.images.map((image, index) => <Image key={index} src={image.src} />)}
      </Image.Group>)}
    </div>
  )
}

export default CoreElementImage