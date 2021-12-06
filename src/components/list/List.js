import { html, css, LitElement } from 'lit'

class List extends LitElement {
  static styles = css`
    ul {
      padding:0;
      margin:0;
      list-style:none;
    }
  ` 

  static properties = {
    enableHover: { type: Boolean },
    enableSelect: { type: Boolean },
  }

  constructor() {
    super()
  }

  firstUpdated() {
    this.addEventListener('itemSelect', this.handleSelectDeselect)
    this.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(e) {
    const focusedItem = this.querySelector('s-list-item:focus')
    if(e.code === 'Enter') {
      focusedItem.click()
    }
    if(e.code === 'Space') {
      new CustomEvent('spacePress', {
        detail: { currentItem: focusedItem },
        bubbles: true,
        composed: true,
      })
    }
    if(e.code === 'ArrowDown') {
      focusedItem.nextElementSibling?.focus()
    }
    if(e.code === 'ArrowUp') {
      focusedItem.previousElementSibling?.focus()
    }
  }

  handleSelectDeselect(e) {
    e.target.setAttribute('selected', e.detail.checked)
    const selectedItems = this.querySelectorAll('s-list-item[selected="true"]')

    const detail = {
      currentItem: e.target || {},
      selectedItems: selectedItems || [],
      selected: selectedItems.length,
    }

    this.dispatchEvent(
      new CustomEvent('listSelect', {
        detail: detail,
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `
  }
}
customElements.define('s-list', List)
