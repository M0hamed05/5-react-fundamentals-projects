export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list pick 🚀</em>
      </footer>
    );
  }

  const itemsCount = items.length;
  const itemsPackedCount = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPackedCount / itemsCount) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Ready to go ✈"
          : `💼 You have ${itemsCount} item(s) in your list, and you already packed ${itemsPackedCount} (${percentage}%)`}
      </em>
    </footer>
  );
}