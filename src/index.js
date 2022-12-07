import ReactDOM from "react-dom/client";
import App from './App'
import './index.css'

export default function Website() {
    return (
        <App/>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />);