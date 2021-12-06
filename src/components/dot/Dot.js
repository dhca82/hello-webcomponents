import { css, html, LitElement } from 'lit'

class Dot extends LitElement {
  static styles = css`
    .dot {
      display: block;
      width: 8px;
      height: 8px;
      border-radius:4px;
    }
    .dot--green {
      background: var(--color-green-500);
    }
  `
  static properties = {
    color: {},
    label: {},
  }

  constructor() {
    super()
    this.color = 'green'
  }

  render() {
    return html`
      <span class="dot dot--${this.color}" aria-label="${this.label}"></span>
    `
  }
}

customElements.define('s-dot', Dot)
