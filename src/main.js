import { LitElement, html } from 'lit'
import './views/settings/Profile.js'
import './views/documents/Documents.js'
import { connect } from 'pwa-helpers'
import store from './state/store.js'
import './styles/main.css'

class SApp extends connect(store)(LitElement) {
  constructor() {
    super()
    const initialState = store.getState()
    this.setTheme(initialState.user.theme)
  }

  setTheme(theme) {
    if (theme === 'auto') {
      document.body.dataset.theme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light'
    } else {
      document.body.dataset.theme = theme
    }
  }

  stateChanged(state) {
    this.setTheme(state.user.theme)
  }

  render() {
    return html`<s-documents></s-documents>`
  }
  createRenderRoot() {
    return this
  }
}

customElements.define('s-app', SApp)
