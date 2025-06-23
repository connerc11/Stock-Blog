function Comment({ text, author, date }) {
  return (
    <div className="mt-2 p-2 bg-gray-50 rounded">
      <p className="text-black">{text}</p>
      <p className="text-gray-600 text-sm">By {author} on {date}</p>
    </div>
  );
}