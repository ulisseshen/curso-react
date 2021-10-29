import './index.css'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/basicos/Primeiro';
import ComParametro from './componentes/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Componente com parâmetro"
        aluno="Fernando Pereira"
        nota={7.2}
        
        />
    </div>,
    document.getElementById('root')
)