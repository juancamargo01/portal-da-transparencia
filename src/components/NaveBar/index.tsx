

import IconComponer from 'components/IconComponer';



const NavBar = () => {
   
    return (
        <section className="py-5 bg-light" id="servicos">
		<div className="container mt-sm-5">
			<div className="row">

				<IconComponer icon="desktop"
						 text="Gestão Contábil"
						 databstarget="#c1"
						 id="c1"						 
						 link1="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/comparativo-receita-prevista-com-arrecadada/"name1="Receitas"
						 link2="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-despesa-simplificado/"name2="Despesas"		
				/>

				<IconComponer icon="check"
						 text="Gestão Pessoal"
						 databstarget="#c2"
						 id="c2"						 
						 link1="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"name1="Concursos e Seleções"
						 link2="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-diaria-passagem/"name2="Diárias e Passagens"
						 link3="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-folha-pagamento/"name3="Folha de Pagamento"
						 link4="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/vagas%20por%20cargo.pdf"name4="Relação de Vagas Legais por Cargos"	
						 link5="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/gestaomunicipal/secretariaseorgaos/"name5="Secretarias e Órgãos"	
						 link6="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"name6="Tabela Salarial de Cargos"		
				/>

				<IconComponer icon="check"
						 text="Gestão Orçamentária"
						 databstarget="#c3"
						 id="c3"						 
						 link1="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/gestaoorcamentaria/ppa/"name1="Plano PluriAnual"
						 link2="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/gestaoorcamentaria/ldo/"name2="Leis e Diretrizes Orçamentárias"
						 link3="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/gestaoorcamentaria/loa/"name3="Lei Orçamentária Anual"
						 link4="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/gestaoorcamentaria/lrf/"name4="LRF - Relatórios"	
						 link5="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/gestaoorcamentaria/balancos/"name5="Balanço"	
				/>

				<IconComponer icon="check-double"
						 text="Licitação e Contratos"
						 databstarget="#c4"
						 id="c4"						 
						 link1="http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/concursoseselecoes/"name1="Concursos e Seleções"
						 link2="http://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf"name2="Tabela Salarial de Cargos"		
				/>

				<IconComponer icon="clipboard-list"
						 text="Controle Social"
						 databstarget="#c5"
						 id="c5"						 
						 link1="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/controlesocial/cmt/"name1="Conselho Municipal de Transparência"
						 link2="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/controlesocial/ceg/"name2="Conselho de Eficácia de Gestão"		
				/>

				<IconComponer icon="plus-square"
						 text="Outras Consultas"
						 databstarget="#c6"
						 id="c6"						 
						 link1="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/cartilhasemanuais/" name1="Cartilhas e Manuais"
						 link2="https://doe.aparecida.go.gov.br/"name2="Diário Oficial"	
						 link3="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/participacaopopular/"name3="Participação Popular"
						 link4="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/faq/"name4="Perguntas Frequentes"	
						 link5="http://transparencia.aparecida.go.gov.br/portal-transparencia/p/services/funerarias/"name5="Rodízio de Funerárias"	
				/>

				

			</div>
		</div>
	</section>
        
    );
}

export default NavBar;