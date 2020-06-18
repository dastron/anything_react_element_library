import React, { Component } from 'react'
import { Form, Item, Segment, Button } from 'semantic-ui-react'

import type { typeElementLibrary } from "../../elements/enumElements";
import { ELEMENT_LIBRARY } from "../../elements/enumElements";

// console.log(ELEMENT_LIBRARY)

// const options = Object.values(ELEMENT_LIBRARY).map((element) => {

// return{ key: element, text: element, value: element };

// })
type state = {
    url: ?string,
    embed_data: any
}
type props = {
  url: string,
  onChange: (doc_id:string) => {}
}

class ElementEmbedInput extends Component<props, state> {
    state = {
        url: this.props.url,
        embed_data:null
    }
loadEmbedData = (e: any) => {
      e.preventDefault();
      // let { name, value } = e.currentTarget;
      console.log(this.state.url)
      fetch('https://api.microlink.io?screenshot&video&iframe&url=' + this.state.url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.status == 'success'){
            this.setState({ embed_data: data.data });

            const match = null
            if(data.data.ifram) match = data.data.iframe.html.match("src=(?:\"|\')(.*?)(?=(?:\"|\'))")
            if(match){
              console.log(match)
              const embed = {
              status:  data.status,
              placeholder: data.data.screenshot.url,
              url: match[0]
            }

            const target = {currentTarget:{name:'embed', value: embed}}
            this.props.onChange(target);
            }

            const load_data = data.data;
            let embed_data = {};
            embed_data.status = data.status;
            embed_data.author = load_data.author;
            embed_data.publisher = load_data.publisher;
            embed_data.date = load_data.date;
            embed_data.lang = load_data.lang;
            embed_data.description = load_data.description;
            // embed_data.xxx = load_data.xxx;
            // embed_data.xxx = load_data.xxx;
            // embed_data.xxx = load_data.xxx;
            // embed_data.xxx = load_data.xxx;

            if(load_data.video) embed_data.video = load_data.video;
            if(load_data.iframe) embed_data.iframe = load_data.iframe;

            embed_data.image = load_data.image;
            embed_data.screenshot = load_data.screenshot;
            embed_data.logo = load_data.logo;
            embed_data.title = load_data.title;
            embed_data.url = load_data.url;

            const target = {currentTarget:{name:'embedData', value: embed_data}}
            this.props.onChange(target);

            }else{
                console.log('no match')
            }
            
            });

    }

onChange = (e: any) => {
    let { name, value } = e.currentTarget;
    this.props.onChange(e);
    this.setState({url: value});
        
}
render(){
    const { embed_data } = this.state;
 return( 
     <div>
        <Form.Field>
          <label>Link to webpage</label>
          <input defaultValue={this.props.url} onChange={this.onChange} name="url" label="Link to webpage" placeholder='Paste the url to the page you want to embed' />
          <Button onClick={this.loadEmbedData}> Search for Embed</Button>
        </Form.Field>
        {embed_data && ( <Segment>
        
        <Item.Group>
        <Item>
      <Item.Image size='medium' src={embed_data.screenshot.url} />

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


 
 
//  <Form defaultValue={this.props.defaultValue} onChange={this.onChange} name="type" placeholder='Element Types' fluid selection options={options} />
}

export default ElementEmbedInput;