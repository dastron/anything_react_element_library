# Anything React Element Library
The core interactive elements for the Anything React platform. These components enable interactive learning experiences, simulation, and exploration.


There are 3 base components required to build a new element for Anything React.

1. Create a flow type to document the data specific to your implementation.
2. Build out an interface to populate the data need for your element.
3. Define the React component to render your element.



### For the Flow Type definition you will need to define a data model

For example, The text interfaces use "element.context" to store the markdown string that will be rendered by the component, the definition for that looks like:

```JSX
export type typeCoreElementText = {
  ...typeCoreElement,
  content: string,
}

export const initCoreElementText:typeCoreElementText = {
  ...initElement,
  content: "",
};

```

This creates a type definition that includes "element.context" as a type of string, and by default, has an empty value of "".


### For the input interface:
Define the fields that will be exposed to the creator, if you are using standard form interfaces, use the name="" field for the data model's key (i.e. - 'context') and pass the updated value via the Onchange prop. This will automatically capture changes, and when the creator saves changes, those values will be stored on the backend. 

With the text interface, we parse the text to markdown to create a preview as the creator types. Other elements like the Link or Embed use an API call to scrape the webpage and a custom onChange event to update the form so that the additional fields can be saved to the backend.

Here is the onChange event for the Text Element:

```JSX
onChange = (e: any) => {
    const { name, value } = e.currentTarget;
    this.onSubmit(value); // Parse Markdown to preview
    this.setState({
        content: value,
    });

    this.props.onChange(e);
}
```

An example from the Text Element, the creator enters markdown into the text area:
```JSX
<div>
    <Header size='tiny'> { label || 'Content' } </Header>
    <Segment basic>
        <Form.TextArea onChange={this.onChange} rows={15} name={name || "content"}  placeholder='Use markdown to create the text content you want shown on this card.'  defaultValue={this.props.content}/>
    </Segment>
</div>
```


### Creating the React Component that will be rendered:
Create a React Component that will render your interactive interface.


```JSX
const CoreElementText = (props: typeCoreElementText) => {
  return (
    <div className="display-linebreak">
      <ElementMarkdown content={props.content} />
    </div>
  )
}

export default CoreElementText
```



### Final Step - Update the ENUM with the new element:
Now that you've created the data model, an input and the rendered componenet. Update the ENUM in 'enumElement.js' to include:
1. The new element as a value in the frozen object `ELEMENT_LIBRARY`:
```JSX
export const ELEMENT_LIBRARY = Object.freeze({
++  TEXT: 'coreElementText',
    ...
});
```
2. Include the new ENUM in `LibraryElementEnum` as an active option:
```JSX
export const LibraryElementEnum: typeElementLibrary[] = [
++  ELEMENT_LIBRARY.TEXT,
    ...
];
```
 
3. then add both the input and React component to `ElementLibraryUtil` and `ElementLibraryInputUtil`:

```JSX
export function ElementLibraryInputUtil(
  element_type: typeElementLibrary,
  element: typeCoreElement | any,
  onChange: typeEventOnChange
) {
  const key = getElementLibrary({ type: element_type })

  switch (key) {
++    case ELEMENT_LIBRARY.TEXT:
++      return <CoreElementText {...element} />
      ...
```    

Then create a pull request. Once your changes are approved, the new element will be live on the site!