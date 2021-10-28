import './index.css'
import ReactDOM from 'react-dom'


const olaMundo = <strong> Olá mundo com React!</strong>;
ReactDOM.render(
    <div>
        { olaMundo }
    </div>,
    document.getElementById('root')
)