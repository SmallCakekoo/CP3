class ColorContainer extends HTMLElement {
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

         
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 14px;
          color: var(--text-color);
        }
        
        input, select {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius);
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          transition: all 0.3s ease;
          box-sizing: border-box;
          background-color: white;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
        }
        
        button {
          width: 100%;
          padding: 14px 32px;
          background: linear-gradient(45deg, var(--primary-color), #4895ef);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(67, 97, 238, 0.3);
        }
        
        button:active {
          transform: translateY(0);
        }
        
        button:disabled {
          background: #cccccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .error-message {
          color: var(--error-color);
          font-size: 14px;
          margin-top: 15px;
          text-align: center;
        }
       
      </style>

      <div class="container">
     <form>
     <div class="form-group">
            <label for="role">Selecciona una letra que te represente</label>
            <select id="role" required>
              <option value="#E5DF06">Amarillo</option>
              <option value="#0715E5">Azul</option>
              <option value="#E60901">Rojo</option>
              <option value="#E64D00">Naranja</option>
              <option value="#5BE607">Verde</option>
              <option value="#E67C07">Café</option>
              <option value="#A501E6">Morado</option>
              <option value="#000000">Negro</option>
              <option value="#FFFFFF">Blanco</option>
              <option value="#EB72A4">Rosado</option>
            </select>
          </div>

          <button type="submit">Continuar</button>
          
          <div class="error-message"></div>
     </form>
      </div>

      
    `;
  }
}

export default ColorContainer;
