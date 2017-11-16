const template = document.createElement('template')
template.innerHTML = `
  <style>#foobar {background: #5cadad; color: white; padding: 1em;}</style>
  <h1 id="foobar">I am the &lt;foo-bar&gt; web component</h1>
  <slot></slot>
`

customElements.define('foo-bar', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})
