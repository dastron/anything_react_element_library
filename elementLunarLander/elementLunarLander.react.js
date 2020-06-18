// @flow
import React from 'react'
import { Container } from 'semantic-ui-react'
import type { typeCoreElementLunarLander } from "./elementLunarLander.type";
import ReactDOM from 'react-dom';


const CoreElementLunarLander = (props: typeCoreElementLunarLander) => {
  // var iframe = document.getElementById('something');
  // var iframeEvent = new Event('iframe-keypress');

  // document.addEventListener('keypress', function (e) {
  //     iframe.dispatchEvent(iframeEvent);
  // });

  // iframe.addEventListener('iframe-keypress', function (e) {
  //     console.log(e);
  // });
  return (
     <div onKeyPress={(e) => {console.log(e)}}>
        <iframe id='something' style={{width: '100%', height:'75vh'}} src='/lunar_lander.min.html'></iframe>
    </div>
  )
}

export default CoreElementLunarLander