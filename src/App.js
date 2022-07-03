import PingDashboard from './components/PingDashboard';
import PingFooter from './components/PingFooter';
import PingHeader from './components/PingHeader';
import PingSubmit from './components/PingSubmit';
import './styles/App.css';

function App() {
  return (
    <main className="App">
        <PingHeader />
        <PingSubmit />
        <PingDashboard />
        <PingFooter />
    </main>
  );
}

export default App;
