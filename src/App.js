import ExpenceItem from "./ExpenceItem";
import ED from "./ExpenseDetails";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenceItem
        title={ED[0].title}
        amount={ED[0].amount}
        date={ED[0].date}
      />
      <ExpenceItem
        title={ED[1].title}
        amount={ED[1].amount}
        date={ED[1].date}
      />
      <ExpenceItem
        title={ED[2].title}
        amount={ED[2].amount}
        date={ED[2].date}
      />
    </div>
  );
}

export default App;
