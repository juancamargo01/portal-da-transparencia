
import {library} from '@fortawesome/fontawesome-svg-core';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';


library.add(fas);
const NavBar = () => {
   
    return (
        <section className="py-5 bg-light" id="servicos">
		<div className="container mt-sm-5">



			<div className="row">
				<div className="col-12 col-sm-4 text-center mb-5 d-grip grap-2">
					<div className="d-grid">
						<button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#c1"
							aria-expanded="false" aria-controls="c1" >
							<h3>
								<div className="icon  text-primary mx-sm-3 mx-2">
                                <FontAwesomeIcon icon = "desktop"/>
                                </div>
								<p><strong>Gestão Contábil</strong></p>
							</h3>
						</button>
					</div>
					<div className="collapse" id="c1">
						<div className="card card-body">
							<p><a href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/comparativo-receita-prevista-com-arrecadada/"
									target="_blank">Receitas</a></p>
							<p><a href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-despesa-simplificado/"
									target="_blank">Despesas</a></p>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-4 text-center mb-5">
					<div className="d-grid">
						<button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#c2"
							aria-expanded="false" aria-controls="c2">
							<h3>
								
                                <div className="icon  text-primary mx-sm-3 mx-2">
                                <FontAwesomeIcon icon = "check"/>
                                </div>
								<p><strong>Gestão Pessoal</strong></p>
							</h3>
						</button>
					</div>
					<div className="collapse" id="c2">
						<div className="card card-body">
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"
									target="_blank">Concursos e Seleções</a></p>
							<p><a href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-diaria-passagem/"
									target="_blank">Diárias e Passagens</a></p>
							<p><a href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-folha-pagamento/"
									target="_blank">Folha de Pagamento</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/vagas%20por%20cargo.pdf"
									target="_blank">Relação de Vagas Legais por Cargos</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/gestaomunicipal/secretariaseorgaos/"
									target="_blank">Secretarias e Órgãos</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"
									target="_blank">Tabela Salarial de Cargos</a></p>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-4 text-center mb-5">
					<div className="d-grid">
						<button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#c3"
							aria-expanded="false" aria-controls="c3">
							<h3>								
                                <div className="icon  text-primary mx-sm-3 mx-2">
                                <FontAwesomeIcon icon = "clone"/>
                                </div>
								<p><strong>Gestão Orçamentária</strong></p>
							</h3>
						</button>
					</div>
					<div className="collapse" id="c3">
						<div className="card card-body">
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"
									target="_blank">Concursos e Seleções</a></p>
							<p><a href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-diaria-passagem/"
									target="_blank">Diárias e Passagens</a></p>
							<p><a href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-folha-pagamento/"
									target="_blank">Folha de Pagamento</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/vagas%20por%20cargo.pdf"
									target="_blank">Relação de Vagas Legais por Cargos</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/gestaomunicipal/secretariaseorgaos/"
									target="_blank">Secretarias e Órgãos</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"
									target="_blank">Tabela Salarial de Cargos</a></p>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-4 text-center mb-5">
					<div className="d-grid">
						<button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#c4"
							aria-expanded="false" aria-controls="c4">
							<h3>
                                <div className="icon  text-primary mx-sm-3 mx-2">
                                    <FontAwesomeIcon icon = "check-double"/>
                                </div>
								<p><strong>Licitação e Contratos</strong></p>
							</h3>
						</button>
					</div>
					<div className="collapse" id="c4">
						<div className="card card-body">
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"
									target="_blank">Concursos e Seleções</a></p>

							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"
									target="_blank">Tabela Salarial de Cargos</a></p>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-4 text-center mb-5">
					<div className="d-grid">
						<button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#c5"
							aria-expanded="false" aria-controls="c5">
							<h3>
                                <div className="icon  text-primary mx-sm-3 mx-2">
                                    <FontAwesomeIcon icon = "clipboard-list"/>
                                </div>
								<p><strong>Controle Social</strong></p>
							</h3>
						</button>
					</div>
					<div className="collapse" id="c5">
						<div className="card card-body">
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"
									target="_blank">Concursos e Seleções</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"
									target="_blank">Tabela Salarial de Cargos</a></p>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-4 text-center mb-5">
					<div className="d-grid">
						<button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#c6"
							aria-expanded="false" aria-controls="c6">
							<h3>
                                <div className="icon  text-primary mx-sm-3 mx-2">
                                    <FontAwesomeIcon icon = "desktop"/>
                                </div>
								<p><strong>Outras Consultas</strong></p>
							</h3>
						</button>
					</div>
					<div className="collapse" id="c6">
						<div className="card card-body">
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"
									target="_blank">Concursos e Seleções</a></p>
							<p><a href="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"
									target="_blank">Tabela Salarial de Cargos</a></p>
						</div>
					</div>
				</div>

			</div>
			
		</div>
	</section>
        
    );
}

export default NavBar;