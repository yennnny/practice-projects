import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Header from './components/Header';
import ResultTable from './components/ResultTable';

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    setResults(userInput);
  };

  const yearlyData = [];

  if (results) {
    let currentSavings = +results['current-savings'];
    const yearlyContribution = +results['yearly-contribution'];
    const expectedReturn = +results['expected-return'] / 100;
    const duration = +results['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <CalculatorForm onCalculate={calculateHandler} />

      {!results && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          No investment calculated yet.
        </p>
      )}
      {results && (
        <ResultTable
          data={yearlyData}
          initialInvestment={results['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
