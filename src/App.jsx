import react from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="card-container">
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Card Image 1"
            className="card-image"
          />
          <div className="card-content">
            <h3>First Title </h3>
            <p>This is some text for the first card. It describes the content.</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Card Image 2"
            className="card-image"
          />
          <div className="card-content">
            <h3>Card Title 2</h3>
            <p>This is some text for card 2. It describes the content.</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Card Image 3"
            className="card-image"
          />
          <div className="card-content">
            <h3>Card Title 3</h3>
            <p>This is some text for card 3. It describes the content.</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Card Image 4"
            className="card-image"
          />
          <div className="card-content">
            <h3>Card Title 4</h3>
            <p>This is some text for card 4. It describes the content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
