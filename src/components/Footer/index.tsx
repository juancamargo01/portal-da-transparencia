import styled from 'styled-components';
import imgBrasao from'../../assets/img/BANDEIRABRASAO250px-PNG.png'




const Footer = () => {  
    const DivStyle = styled.div`
        position: relative; 
        height: auto;
    
    `
    const DivStyle2 = styled.div`
    position: absolute; 
    width: 100%; 
    top: 70%; 
    background-color: #ddd;
` 
    return (
        <DivStyle className="mt-5 " >
            <DivStyle2 className="pt-5 " >
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 text-center pb-4">
                            <a href="https://www.aparecida.go.gov.br" target="_blank">
                                <img src={imgBrasao} className="img-fluid mx-auto d-block h-75"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-lg-6 pb-4 d-flex justify-content-center align-items-center">
                            <p className=" text-center small"> Rua Gervásio Pinheiro, APM Residencial Solar Central Park<br/> CEP:
                                74.968-500
                                <br/> Horário de Funcionamento:<br/> 08h as 11h30 - 13h as 17h30<br/> Telefone: (62) 3545-5800 /
                                3545-5801
                            </p>
                        </div>
                    </div>
                </div>
            </DivStyle2>
	    </DivStyle>
    );
}

export default Footer;