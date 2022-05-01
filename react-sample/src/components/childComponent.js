export default function ChildComponent(props) {
  return (
    <div>
      <p>This paragraph is not purple.</p>
      <span>The value of number is: {props.number || 0}</span>
    </div>
  );
}
