import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
  render () {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

const a = <MyComponent id="a" class="c">
  <div>abc</div>
  <div></div>
  <div></div>
</MyComponent>

render(a, document.body);