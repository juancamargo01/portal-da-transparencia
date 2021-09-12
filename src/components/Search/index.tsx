import './style.css' ;


const Search = () => {
    return (
      
        <div className="py-5 text-center style-search" id="busca"	>
		<section className="text-white text-center pt-5 ">
			<div className="container">
				<div className="row">
					<div className="col-xl-9 mx-auto">
						<h2 className="mb-4">Não achou o que procura?</h2>
					</div>
					<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
						
						<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
							<div className="input-group mb-3">
								<input type="text" className="form-control" placeholder="Buscar no portal"
									aria-label="Buscar no portal" aria-describedby="button-addon2"/>
								<button className="btn btn-success" type="button" id="button-addon2"><i
										className="fas fa-search fa-flip-horizontal"></i></button>
							</div>
						</div>

					</div>	
				</div>
			</div>
		</section>
	</div>

    );
}

export default Search;