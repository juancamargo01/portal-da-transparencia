import imgLogo from '../../assets/img/logo-barra.png';
import {library} from '@fortawesome/fontawesome-svg-core';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import './style.css'; 

library.add(fas);


const Header = () => {
   
  
    return (
        <>
        <div className="container">
		<div className="style-header">
			<a className="navbar-brand" href="https://www.aparecida.go.gov.br">
				<img src={imgLogo} className="img-fluid w-75 mt-2"/>
			</a>
		</div>
	</div>
	
	<header className="masthead text-white text-center">
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-xl-9 mx-auto">
					<h1 className="mb-5">Portal da Transparência de Aparecida de Goiânia</h1>
				</div>

				
				<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="Buscar no portal" aria-label="Buscar no portal"
							aria-describedby="button-addon2"/>
						<button className="btn btn-success" type="button" id="button-addon2">
							
                            <FontAwesomeIcon icon = "search"/>
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>

    </>
        
    );
}

export default Header;