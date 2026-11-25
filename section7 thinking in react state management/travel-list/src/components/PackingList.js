import { useState } from "react";
import Item from './Item'

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let SortedItems;
  if (sortBy === "input") SortedItems = items;
  else if (sortBy === "description")
    SortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else SortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {SortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}