import guardrail from '../9-try';  // Adjust the path based on your project structure
import divideFunction from '../8-try';  // Adjust the path based on your project structure

test('guardrail captures successful function execution', () => {
  expect(guardrail(() => divideFunction(10, 2))).toEqual([5, 'Guardrail was processed']);
});

test('guardrail captures function throwing an error', () => {
  expect(guardrail(() => divideFunction(10, 0))).toEqual(['cannot divide by 0', 'Guardrail was processed']);
});
