import { LitElement, html } from 'lit'
import './DropdownItem'

class Dropdown extends LitElement {
  static properties = {
    _show: { state: true, type: Boolean },
    name: { type: String },
    updates: { type: Boolean}
  }

  constructor() {
    super()
    this._show = false
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('select', ({ detail }) => {
      this._show = false
    })
  }

  render() {
    const content = html`
      <div>
        <slot></slot>
      </div>
    `
    return html`
      <button @click="${this.handleClick}">${this.name}</button>
      ${this._show ? content : ''}
    `
  }

  handleClick() {
    this._show = !this._show
  }
}
customElements.define('s-dropdown', Dropdown)

