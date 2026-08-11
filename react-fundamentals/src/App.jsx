import Card from "./components/Card";
import Counter from "./components/Counter";
import Events from "./components/Events";
import Rendering from "./Rendering";

function App() {
  return (
    <div className="parent">
      {/* <Card user="Hari" role="Intern" age={24} img="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsfGVufDB8fDB8fHww"/>
      <Card user="Raja" role="SDE" age={28} img="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
      {/* <Counter/> */}
      {/* <Events/> */}
      <Rendering/>
      </div>
  );
}

export default App;
