import img1 from '../../assets/img/001.jpg'
import img2 from '../../assets/img/002.jpg'
import img3 from '../../assets/img/003.jpg'


const Banner = () => {
    return (
        <section className="py-5 ">
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-4">
					<div className=" mx-auto mb-5 mb-lg-0">
						<a href="">
							<img className="img-fluid img-thumbnail mb-3" src={img1} alt=""/>
						</a>
						<h5>e-SIC</h5>
						<p className="lead mb-0">Encaminhe pedidos de Acesso à Informação.</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="mx-auto mb-5 mb-lg-0">
						<a href="">
							<img className="img-fluid img-thumbnail mb-3" src={img2} alt=""/>
						</a>
						<h5>FAQ</h5>
						<p className="lead mb-0">Perguntas frequentes sobre o Portal da Transparência.</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="mx-auto mb-5 mb-lg-0">
						<a href="">
							<img className="img-fluid img-thumbnail mb-3" src={img3} alt=""/>
						</a>
						<h5>Participação Popular</h5>
						<p className="lead mb-0">Acompanhe por aqui alguns processos.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
      

    );
}

export default Banner;