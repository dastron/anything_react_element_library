import React, { Component } from 'react'
import { Form, Item, Segment, Button } from 'semantic-ui-react'

import type { typeElementLibrary } from "../../elements/enumElements";
import { ELEMENT_LIBRARY } from "../../elements/enumElements";


type state = {
    input: ?string,
    embed_data: any
}
type props = {
  input: string,
  onChange: (doc_id:string) => {}
}

class ElementFormulaInput extends Component<props, state> {
    state = {
        input: this.props.input,
        embed_data:null
    }
loadEmbedData = (e: any) => {
      e.preventDefault();
      // let { name, value } = e.currentTarget;
      console.log(this.state.input)
      fetch('http://api.wolframalpha.com/v2/query?input=' + this.state.input+'&appid='+appid)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Wolfram doesn't currently support client side requests, this will need to run on the backend.
            
            });

    }

onChange = (e: any) => {
    let { name, value } = e.currentTarget;
    this.props.onChange(e);
    this.setState({input: value});
        
}
render(){
    const { embed_data } = this.state;
 return( 
     <div>
        <Form.Field>
          <label>Link to webpage</label>
          <input defaultValue={this.props.input} onChange={this.onChange} name="input" label="Link to webpage" placeholder='Paste the input to the page you want to embed' />
          <Button onClick={this.loadEmbedData}> Enter Mathematica Formula </Button>
        </Form.Field>
        {embed_data && ( <Segment>
        
        <Item.Group>
        <Item>
      <Item.Image size='medium' src={embed_data.screenshot.input} />

      <Item.Content>
        <Item.Header>{embed_data.title}</Item.Header>
        <Item.Meta>
          <span className='price'>{embed_data.author}</span>
          <span className='stay'>{embed_data.publisher}</span>
        </Item.Meta>
        <Item.Description>{embed_data.description}</Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    </Segment>
    )}

        </div>
        )}
}

export default ElementFormulaInput;