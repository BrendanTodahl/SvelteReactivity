import ChildComponent from '../src/components/childComponent'

export default function App() {
  return (
    <div>
      <p class="purple">This paragraph is purple!</p>
      <ChildComponent number="100" />
    </div>
  );
}
