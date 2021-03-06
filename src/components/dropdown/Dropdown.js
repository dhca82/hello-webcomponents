import { LitElement, html, css } from 'lit'
import './DropdownItem'
import '../button/Button'

class Dropdown extends LitElement {
  static styles = css`
    div {
      position:absolute;
    }
  `
  static properties = {
    _show: { state: true, type: Boolean },
    name: { type: String },
    updates: { type: Boolean },
  }

  constructor() {
    super()
    this._show = false
    this._id = String(Date.now()) + Math.floor(Math.random() * 10000)
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('select', ({ detail }) => {
      this._show = false
    })
  }

  render() {
    const content = html`
      <div id="${this._id}">
        <ul>
          <slot></slot>
        </ul>
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
    this._show = !this._show
  }
}
customElements.define('s-dropdown', Dropdown)
