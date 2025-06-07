class BoardPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
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
        
        .menu-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h1 {
          color: var(--text-color);
          margin-bottom: 20px;
          font-weight: 600;
        }

        .error-message {
          color: var(--accent-color);
          margin: 10px 0;
          text-align: center;
        }

        .user-actions {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          justify-content: flex-end;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .btn-logout {
          background: var(--secondary-color);
          color: white;
        }

        .btn-logout:hover {
          background: var(--secondary-hover);
          transform: translateY(-1px);
        }

        .btn-delete {
          background: var(--accent-color);
          color: white;
        }

        .btn-delete:hover {
          background: #e01e6f;
          transform: translateY(-1px);
        }

        .btn:active {
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .user-actions {
            flex-direction: column;
            align-items: stretch;
          }
          
          .btn {
            width: 100%;
            text-align: center;
          }
        }
      </style>
      
      <div class="menu-page">
        <h1>Se supone que aquí iba el canvas :(</h1>
        <div class="error-message"></div>
      </div>
    `;
  }
}

export default BoardPage;
