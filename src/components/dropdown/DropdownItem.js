import { LitElement, html } from 'lit'

class DropdownItem extends LitElement {
  static properties = {
    value: { attribute: true },
  }
  constructor() {
    super()
  }
  render() {
    return html`
      <li>
        <button @click="${this.handleClick}" role="menuitem">
          <slot></slot>
        </button>
      </li>
    `
  }
  handleClick(e) {
    const detail = {
      name: this.innerText,
      value: this.value,
    }
    this.dispatchEvent(
      new CustomEvent('select', {
        detail: detail,
        bubbles: true,
        composed: true,
      })
    )
    // this.setAttribute('aria-selected', true)
  }
}
customElements.define('s-dropdown-item', DropdownItem)
