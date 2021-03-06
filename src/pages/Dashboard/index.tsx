import BarChart from "components/Header";
import DataTable from "components/About";
import DonutChart from "components/NaveBar";
import Footer from "components/Footer";
import NavBar from "components/Questions";

const Dashboard = () => {
    return (
        <>
        <NavBar />
        <div className="container">
          <div className="text-primary py-3">
            <h1> Gráficos de Vendas</h1>
            <div className="row px-3">
              <div className="col-sm-6">
                <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                <BarChart />
              </div>
              <div className="col-sm-6">
                <h5 className="text-center text-secondary">Todas Vendas</h5>
                <DonutChart />
              </div>
            </div>
  
            <div className="py-3 ">
              <h2 className="text-primary"> Todas Vendas</h2>
            </div>
            <DataTable />
  
  
          </div>
        </div>
        <Footer />
      </>

    );
}

export default Dashboard;