import { html, css, LitElement } from 'lit'

class UserImg extends LitElement {
  static styles = css`
    img {
      border-radius: 50%;
      height: 100%;
      width: auto;
    }
    .small {
      width:25px;
      height:25px;
    }
  `
  static properties = {
    src: {},
    name: {},
    badge: {},
    status: {},
    size: {}
  }
  render() {
    return html`
      <img class="${this.size}" src="${this.src}" alt="${this.name}" />
    `
  }
}
customElements.define('s-user-img', UserImg)