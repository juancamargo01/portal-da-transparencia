


const Questions = () => {
    return (
        <section className="py-5">
		<div className="container py-5">
			<div className="row">
				<div className="col-sm-8 offset-sm-2 col-12">
					<h2 className="text-center">Perguntas Frequentes</h2>
					<hr/>
					<div id="faq">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button collapsed btn-success" type="button"
										data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
										aria-controls="collapseOne">
										O que é o Portal da Transparência?
									</button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>O Portal da Transparência é uma ferramenta que visa promover o amplo acesso aos dados
											referentes à aplicação dos recursos públicos pela Prefeitura. Por meio do Portal,
											qualquer cidadão
											pode acompanhar as ações da administração direta e indireta e a gestão das finanças
											municipais.
											Dessa
											forma, propicia o controle social e auxilia o combate à corrupção por diversos setores
											da
											sociedade,
											imprensa e pesquisadores.</p>
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h2 className="accordion-header" id="headingTwo">
									<button className="accordion-button collapsed btn-success" type="button"
										data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
										aria-controls="collapseTwo">
										É necessário justificar o pedido de informações?
									</button>
								</h2>
								<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Nos termos do Art. 10 da Lei de Acesso à Informação, qualquer interessado poderá
											apresentar pedido de acesso a informações aos órgãos e entidades referidos no art. 1º
											desta Lei,
											por
											qualquer meio legítimo, devendo o pedido conter a identificação do requerente e a
											especificação da
											informação requerida. São vedadas quaisquer exigências relativas aos motivos
											determinantes da
											solicitação de informações de interesse público.</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
									<button className="accordion-button collapsed btn-success" type="button"
										data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
										aria-controls="collapseThree">
										Como posso solicitar uma informação?
									</button>
								</h2>
								<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Solicitações de acesso à informação podem ser requeridas pelos seguintes meios: </p>
										<p>- Através de requerimento online pelo e-SIC;</p>
										<p>
											- No SIC Físico, localizado na sede da Secretaria Municipal
											de Transparência, Fiscalização e Controle, situado na Rua Benedito Batista de Toledo,
											Setor
											Central
											(próximo à Igreja Matriz).</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>

    );
}

export default Questions;