class TickerTape extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._text = document.createElement('div')
      this._shadowRoot.appendChild(this._text)
      this._text.innerHTML = this.innerHTML
    }
    connectedCallback() {
      this._timer = setInterval(() => {
        let st = this._text.innerHTML
        st = st.slice(1) + st[0]
        this._text.innerHTML = st
      }, 500)
    }
    disconnectedCallback() {
      clearInterval(this._timer)
    }
  }
  
  customElements.define('ticker-tape', TickerTape)