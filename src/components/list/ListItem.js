import { html, css, LitElement } from 'lit'
import '../checkbox/Checkbox.js'
import '../dot/Dot.js'

class ListItem extends LitElement {
  static styles = css`
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 52px;
      padding: 0 30px;
      position:relative;
      border-bottom: 1px solid var(--border-color);
    }
    .row:hover:not(:focus),
    .row--active {
      background: var(--color-list-item--active);
    }
    :host {
      display:block;
      position:relative;
    }
    :host(:focus) {
      box-shadow: 0 0 0 2px var(--color-branding-1);
      outline: none; 
      border-radius:3px;
      z-index:1;
    }
    .row__col {
      display: flex;
      align-items: center;
    }
    .row__col > * {
      margin-right: 10px;
    }
  `

  static properties = {
    selected: {},
    _active: { state: true },
  }

  constructor() {
    super()
    this._active = false
    this.tabIndex = 0
    this.addEventListener('click', this.handleItemClick)
  }

  render() {
    return html`
      <div
        class="row${this._active ? ' row--active' : ''}"
      >
        <div class="row__col">
          <s-checkbox
            ${this.selected ? 'checked="true"' : ''}
            @change="${this.handleChange}"
          ></s-checkbox>
          <s-dot color="green" label="Published"></s-dot>
          <slot></slot>
        </div>
        <div class="row__col">
          <slot name="col2"></slot>
        </div>
        <div class="row__col" name="col3">
          <slot name="col3"></slot>
        </div>
        <div class="row__col" name="col4">
          <slot name="col4"></slot>
        </div>
      </div>
    `
  }

  handleItemClick(e) {
    if (e.target.matches('s-checkbox')) return
    const eventOptions = {
      detail: { currentItem: this },
      bubbles: true,
      composed: true,
    }
    this.dispatchEvent(new CustomEvent('itemClick', eventOptions))
  }

  handleChange(e) {
    this._active = e.target.checked
    const eventOptions = {
      detail: { checked: e.target.checked },
      bubbles: true,
      composed: true,
    }
    this.dispatchEvent(new CustomEvent('itemSelect', eventOptions))
  }
}
customElements.define('s-list-item', ListItem)
