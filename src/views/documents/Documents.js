import { html, css, LitElement } from 'lit'
import '../../components/list/List.js'
import '../../components/list/ListItem.js'
import '../../components/panel/Panel.js'
import '../../components/checkbox/Checkbox.js'
import '../../components/user-img/UserImg.js'
import '../../components/popup/Popup.js'

class Documents extends LitElement {
  static styles = css`
    .documents__list {
      max-width: 1400px;
      margin: 30px auto;
    }
  `
  static properties = {
    selected: {},
    showSlug: {},
  }
  constructor() {
    super()
    this.selected = 0
    this.showSlug = true
  }
  render() {
    return html`
      <div>
        ${this.selected} documents selected
        <s-panel name="Foo" @change="${this.handleViewChange}">
          <s-checkbox
            label="Slug"
            checked="${this.showSlug}"
            data-for="showSlug"
          ></s-checkbox>
        </s-panel>
      </div>

      <div class="documents__list">
        <s-list
          @listSelect="${this.handleListSelect}"
          @itemClick="${this.handleItemClick}"
        >
          <s-list-item role="listitem">
            <span>Lorem ipsum dolor</span>
            <div slot="col2">${this.showSlug ? '/lorem-ipsum-dolor' : ''}</div>
            <div slot="col4">
              <s-user-img src="https://i.pravatar.cc/150?img=7" name="" size="small"></s-user-img>
              <s-popup>
                <s-button slot="trigger">Trigger</s-button>
                <div>apa</div>
              </s-popup>
            </div>
          </s-list-item>
          <s-list-item role="listitem">Bar</s-list-item>
        </s-list>
      </div>
    `
  }
  handleListSelect({ detail }) {
    console.log(detail)
    this.selected = detail.selected
  }
  handleItemClick({ detail }) {
    console.log(detail)
  }
  handleViewChange(e) {
    console.log(e.target.dataset.for)
    this[e.target.dataset.for] = !this[e.target.dataset.for]
  }
}
customElements.define('s-documents', Documents)
