import { html, css, LitElement } from 'lit'
import { connect } from 'pwa-helpers'
import store from '../../state/store.js'
import { setTheme } from '../../state/userSlice'
import '../../components/dropdown/Dropdown.js'

class UserSettings extends connect(store)(LitElement) {
  static styles = css`
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
  `
  static properties = {
    theme: { state: true },
  }
  constructor() {
    super()
  }
  stateChanged(state) {
    this.theme = state.user.theme
  }
  render() {
    return html`
      <div>
        <s-dropdown name="${this.theme}">
          <s-dropdown-item value="light" @select="${this.handleSelect}"
            >Light</s-dropdown-item
          >
          <s-dropdown-item value="dark" @select="${this.handleSelect}"
            >Dark</s-dropdown-item
          >
        </s-dropdown>
      </div>
    `
  }
  handleSelect({ detail }) {
    store.dispatch(setTheme(detail.value))
  }
}
customElements.define('s-user-settings', UserSettings)
