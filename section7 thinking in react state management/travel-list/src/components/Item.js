export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* this is better than starting with checking item.packed &&
          put the style first  */}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
