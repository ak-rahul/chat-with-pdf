import Scrollbars from 'react-custom-scrollbars-2'
import './App.css'

function App() {
  return (
    <Scrollbars>
    <iframe
      src="http://localhost:8501"
      style={{ width: '100%', height: '100%', border: 'none' }}
    ></iframe>
    </Scrollbars>
  )
}

export default App
