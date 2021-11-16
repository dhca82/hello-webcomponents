import { LitElement, html } from 'lit'
import './views/settings/Profile.js'

class SApp extends LitElement {
  render() {
    return html`<s-user-settings></s-user-settings>`
  }
}

customElements.define('s-app', SApp)
