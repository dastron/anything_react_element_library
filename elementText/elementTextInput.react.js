// @flow
import React, { Component } from 'react'
import { Form, Item, Segment, Header, Grid } from 'semantic-ui-react';
import type { typeEventOnChange } from "../../data/typeEventOnChange";
import type { typeCoreElement} from "../libraryData/typeCoreElement";
import type { typeElementLibrary } from "../../elements/enumElements";
import { ELEMENT_LIBRARY } from "../../elements/enumElements";
import remark from 'remark';
import visit from 'unist-util-visit';

type state = {
    content: ?string,
    embed_data: any,
    numberKeywords: number,
    numberLinks: number,
}

type props = {
  ...typeCoreElement,
  content: string,
  name?: string,
  label?: string,
  onChange: (typeEventOnChange) => void
}

class ElementTextInput extends Component<props, state> {
    state = {
        content: this.props.content,
        embed_data:null,
        numberKeywords: this.props.numberKeywords,
        numberLinks: this.props.numberLinks,
    }

    onSubmit = (content: string) => {
            let keywords = [];
            let links = [];
            remark()
                .use(function () {
                    return transformer
                    function transformer(tree) {
                        //Link W/o URL
                        visit(tree, { type: 'linkReference' },function(node) {
                            keywords.push(node.identifier)
                        })
                       
                    }
                })
                .use(function () {
                    return transformer
                        function transformer(tree) {
                            // Link with URL
                            visit(tree, { type: 'link' },function(node) {
                                links.push(node.url)
                                
                            })
                        }
                })
                .processSync(content)
                this.setState((prevState) => {
                    const numberKeywords = keywords.length;
                    const numberLinks = links.length;

                    if (prevState.numberKeywords != numberKeywords){
                        this.props.onChange({
                            currentTarget: {
                                name: 'numberKeywords',
                                value: numberKeywords
                            }
                        })
                        
                    }

                    if (keywords.length){
                            keywords = [...new Set(keywords)];
                            // console.log(keywords)
                                this.props.onChange({
                                    currentTarget: {
                                        name: 'keywords',
                                        value: keywords
                                }
                            })
                        }

                    if (prevState.numberLinks != numberLinks){
                        this.props.onChange({
                            currentTarget: {
                                name: 'numberLinks',
                                value: numberLinks
                            }
                        })
                         
                    }

                    if (links.length){
                            links = [...new Set(links)];
                            this.props.onChange({
                                currentTarget: {
                                    name: 'links',
                                    value: links
                                }
                            })
                        }
                    return {
                        numberKeywords: numberKeywords,
                        numberLinks: numberLinks,
                    }
                })
                    

                 
               
        
    }

    onChange = (e: any) => {
        let { name, value } = e.currentTarget;
        this.onSubmit(value);
        this.setState(prevState => {
        return{
            content: value,
        }
        });
        this.props.onChange(e);
        
    }
        

    render(){
        const { embed_data, numberKeywords, numberLinks } = this.state;
        const { name, label } = this.props;
    return( 
        <div>
            <Header size='tiny'> { label || 'Content' } </Header>
            <Segment basic>
                <Grid columns='equal'><Grid.Column>Keywords: {numberKeywords}</Grid.Column><Grid.Column>Links: {numberLinks}</Grid.Column></Grid>
                <Form.TextArea onChange={this.onChange} rows={15} name={name || "content"}  placeholder='Tell us more about would like us to pickup... List each item on a new line'  defaultValue={this.props.content}/>
            </Segment>
        </div>
            )}
    
}

export default ElementTextInput