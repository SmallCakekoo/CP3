class BackBtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        
        :host {
          display: block;
          font-family: 'Montserrat', sans-serif;
          --primary-color: #4361ee;
          --primary-hover: #3a56d4;
          --primary-light: #eef2ff;
          --secondary-color: #3f3d56;
          --secondary-hover: #33313f;
          --accent-color: #f72585;
          --text-color: #2b2d42;
          --text-secondary: #64748b;
          --border-color: #e0e0e0;
          --background-color: #f9f9f9;
          --card-bg: #ffffff;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          --border-radius: 12px;
        }
       
          #back-btn {
          background: linear-gradient(45deg, var(--primary-color), #4895ef);
          color: white;
        }
        
        #back-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(67, 97, 238, 0.3);
        }
        
        #back-btn:active {
          transform: translateY(0);
        }
      </style>
      
        <button id="back-btn">Back</button>
    `;
  }
}

export default BackBtn;

//  const continueBtn = this.shadowroot.querySelector("#continue-btn");

//     continueBtn?.addEventListener("click", () => {
//       window.dispatchEvent(
//         new CustomEvent("navigate", {
//           detail: { path: "/color" },
//         })
//       );

//   }
