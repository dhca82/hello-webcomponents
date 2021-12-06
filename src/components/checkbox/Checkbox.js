import { html, css, LitElement } from 'lit'

class Checkbox extends LitElement {
  static styles = css`
    .checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 17px;
      width: 17px;
      border-radius: 3px;
      border: 1px solid var(--border-color);
    }
    .checkbox[aria-checked='true'] {
      background: var(--color-branding-1);
      border-color: var(--color-branding-1);
    }
    .checkbox:focus,
    .checkbox:active {
      border-color:transparent;
      box-shadow: 0 0 0 1px var(--background-color),
        0 0 0 3px var(--color-branding-1);
      outline: none;
    }
    svg {
      fill: #ffffff;
      width: 65%;
      height: 65%;
    }
  `

  static get properties() {
    return {
      label: {},
      value: {},
      disabled: {},
      checked: { reflect: true },
    }
  }

  constructor() {
    super()
    this.value = ''
    this.disabled = false
    this.checked = false
    this._id = String(Date.now()) + Math.floor(Math.random() * 10000)
  }

  handleClick(e) {
    this.checked = !this.checked
    const eventOptions = {
      bubbles: true,
      composed: true,
    }
    this.dispatchEvent(new CustomEvent('click', eventOptions))
    this.dispatchEvent(new CustomEvent('change', eventOptions))
  }

  handleKeypress(e) {
    if (e.key !== ' ') return
    e.preventDefault()
    this.checked = !this.checked
    const eventOptions = {
      bubbles: true,
      composed: true,
    }
    this.dispatchEvent(new CustomEvent('keypress', eventOptions))
    this.dispatchEvent(new CustomEvent('change', eventOptions))
  }

  render() {
    const check = html`
      <svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.09027 1.09662C9.38316 1.38952 9.38316 1.86439 9.09027 2.15728L4.34427 6.90328C4.05142 7.19613 3.57663 7.19618 3.28372 6.90339L0.909723 4.53039C0.616768 4.23756 0.616668 3.76269 0.9095 3.46973C1.20233 3.17678 1.6772 3.17668 1.97016 3.46951L3.81383 5.3124L8.02961 1.09662C8.3225 0.80373 8.79738 0.80373 9.09027 1.09662Z"
        />
      </svg>
    `

    return html`
      <label id="${this._id}">${this.label}</label>
      <span
        class="checkbox"
        role="checkbox"
        tabindex="0"
        aria-checked="${this.checked}"
        aria-labelledby="${this._id}"
        @click="${this.handleClick}"
        @keypress="${this.handleKeypress}"
      >
        ${this.checked ? check : ''}
      </span>
    `
  }
}
customElements.define('s-checkbox', Checkbox)
