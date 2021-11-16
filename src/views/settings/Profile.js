import { html, LitElement } from 'lit'
import { connect } from 'pwa-helpers'
import store from '../../state/store.js'
import { setTheme } from '../../state/userSlice'
import '../../components/dropdown/Dropdown.js'

class UserSettings extends connect(store)(LitElement) {
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
      Theme:
      <s-dropdown name="${this.theme}">
        <s-dropdown-item value="light" @select="${this.handleSelect}"
          >Light</s-dropdown-item
        >
        <s-dropdown-item value="dark" @select="${this.handleSelect}"
          >Dark</s-dropdown-item
        >
      </s-dropdown>
    `
  }
  handleSelect({ detail }) {
    store.dispatch(setTheme(detail.value))
  }
}
customElements.define('s-user-settings', UserSettings)
