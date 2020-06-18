// @flow
import React from 'react'
import { Segment, Embed } from 'semantic-ui-react'
import type { typeCoreElementEmbed } from "./elementEmbed.type";
import ReactMarkdown from 'react-markdown';
import { Placeholder } from 'semantic-ui-react';

const CoreElementEmbed = (props: typeCoreElementEmbed) => {
  let placholder = null;
  let url = null;
    if(props.embed){
      placholder = props.embed.placeholder;
      url = props.embed.url;
    }else if(props.embedData){
      placholder = props.embedData.screenshot.url;
      url = props.url;
    }
  return (
    <div className="display-linebreak">
    { url && (
        <Embed
        icon='right circle arrow'
        placeholder={placholder}
        url={url}
        />
      )
    }
      
      
    </div>
  )
}

export default CoreElementEmbed