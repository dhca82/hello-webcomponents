import { html, css, LitElement } from 'lit'

class Popup extends LitElement {
  static styles = css`
    .popup__area {
      position:absolute;
    }
  `
  static properties = {
    _expanded: { state: true },
  }
  constructor() {
    super()
    this._expanded = false
    this._id = String(Date.now()) + Math.floor(Math.random() * 10000)
  }
  render() {
    const area = html`<slot id="${this._id}" class="popup__area"></slot>`

    return html`
      <slot
        class="popup__trigger"
        name="trigger"
        @click="${this.handleTriggerClick}"
        aria-haspopup="true"
        aria-expanded="${this._expanded}"
        aria-controls="${this._id}"
      >
      </slot>
      ${this._expanded ? area : ''}
    `
  }
  handleTriggerClick(e) {
    this._expanded = !this._expanded
  }
}
customElements.define('s-popup', Popup)
