import React from 'react'
import ReactDOM from 'react-dom'
import MarkdownEditor from '../MarkdownEditor'

const Example = () => (
  <div>
    <MarkdownEditor
      wrapInTheme
      title="Foo"
      code="# Fancy markdown editor!"
    />
  </div>
)

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
