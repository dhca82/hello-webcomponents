import { css, html, LitElement } from 'lit'
import '../button/Button.js'

class Panel extends LitElement {
  static styles = css`
    div {
      position: absolute;
    }
  `

  constructor() {
    super()
    this._show = false
    this._id = String(Date.now()) + Math.floor(Math.random() * 10000)
  }

  static properties = {
    _show: { state: true, type: Boolean },
    name: { type: String },
  }

  render() {
    const content = html`
      <div id="${this._id}">
        <slot></slot>
      </div>
    `
    return html`
      <s-button
        @click="${this.handleClick}"
        aria-haspopup="true"
        aria-expanded="${this._show}"
        aria-controls="${this._id}"
      >
        ${this.name}
      </s-button>
      ${this._show ? content : ''}
    `
  }

  handleClick() {
    console.log('foo')
    this._show = !this._show
  }
}
customElements.define('s-panel', Panel)
