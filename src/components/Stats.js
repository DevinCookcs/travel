export default function Stats({ items }) {
  // conditional early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some items to get started</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {/* conditional rendering to change message once everything is packed */}
        {percentage === 100
          ? "You've packed everything!  Enjoy your trip!"
          : `You have ${numItems} ${
              numItems === 1 ? " item" : " items"
            } on your list.
        You've packed ${numPacked}
        ${numPacked === 1 ? " item" : " items"} (${percentage}%).`}
      </em>
    </footer>
  );
}
