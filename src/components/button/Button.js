import { html, css, LitElement } from 'lit'

class Button extends LitElement {
  static styles = css`
    button {
      background:none;
      appearance:none;
      color:var(--text-color);
      border:1px solid var(--border-color);
      border-radius:8px;
      padding:1em;
      font-size:18px;
    }
  `
  constructor() {
    super()
  }
  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `
  }
}
customElements.define('s-button', Button)
