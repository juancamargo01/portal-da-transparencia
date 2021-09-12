import imgBrasao from'../../assets/img/BANDEIRABRASAO250px-PNG.png'


const About = () => {
    return (
        <section className="testimonials bg-light">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 mt-0">
					<h2 className="mb-4">O Portal da Transparência</h2>
					<p className="lead">O Portal da Transparência é uma importante ferramenta de divulgação da utilização dos
						recursos
						públicos pela Prefeitura, propiciando a participação popular, o aperfeiçoamento da gestão e o
						fortalecimento
						da democracia.</p>
				</div>
				<div className="col-lg-3"><img src={imgBrasao} alt="" className="img-fluid mx-auto d-block"/>
				</div>
			</div>
		</div>
	</section>

    );
}

export default About;