import {Navbar, Welcome, Footer, Services, Transactions, About} from './components';
import { TransactionProvider } from './context/Transaction-Context';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
          <Navbar />
          <TransactionProvider>
          <Welcome />
          </TransactionProvider>
      </div>
      <About />
      {/*use transaction provider to wrap transactions component so it can destructure values coming from transaction context without any problem*/}
      <div className="gradient-bg-welcome">
      <TransactionProvider> 
        <Transactions />
      </TransactionProvider>
      </div>

      <Services />
      
      
      
      <Footer />
    </div>
  )
}

export default App;
