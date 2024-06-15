export default function ClickCounter({ value, onUpdate }) {
  return <button onClick={onUpdate}>Current: {value}</button>;
}
