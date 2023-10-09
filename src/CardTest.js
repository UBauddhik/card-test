import { html, css, LitElement } from 'lit';

export class CardTest extends LitElement {
  static styles = css`
  
    .card {
    display: inline-block;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.card img {
    max-width: 100%;
    height: auto;
    width: 100%;
    max-height: 200px;
}

.btn-wrapper {
    margin-top: 16px;
}

.btn-wrapper button {
    background-color: #0074D9;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover,
button:focus {
    background-color: #0056b3;
}

.hidden {
    display: none;
}

.light-mode {
    background-color: #ffffff;
    color: #000000;
}

.dark-mode {
    background-color: #000000;
    color: #ffffff;
}

@media (max-width: 800px) {
    .btn-wrapper button {
        display: none;
    }
}
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <button>Button</button>
      <div class="all">
          <button id="backgroundColor">Background Color</button>
          <button id="changeText">Change Text</button>
          <button id="delete">Delete Last Card</button>
          <div class="card">
              <img src="https://www.dalycollege.org/images/slider-1.jpg" >
              <h1>Card</h1>
              <p id="description" style="display: none;">
                  The Daly College is a group of institutions in Indore, India that includes a co-educational boarding school, a junior school, an undergraduate management school, and a postgraduate business school.
              </p>
              <button id="detailsButton">Details</button>
          </div>
      </div>
    `;
  }
}
