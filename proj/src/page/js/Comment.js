// function CommentItem({ id, text, author, date, currentUser, onEdit, onDelete }) {
//   const isOwner = currentUser === author;
//   const [isEditing, setIsEditing] = React.useState(false);
//   const [editedText, setEditedText] = React.useState(text);

//   const handleSave = () => {
//     onEdit(id, editedText);
//     setIsEditing(false);
//   };

//   return (
//     <div className="mt-2 p-3 bg-gray-100 rounded shadow">
//       {isEditing ? (
//         <textarea
//           className="w-full p-2 border rounded text-black"
//           value={editedText}
//           onChange={(e) => setEditedText(e.target.value)}
//         />
//       ) : (
//         <p className="text-black whitespace-pre-wrap">{text}</p>
//       )}
//       <p className="text-gray-600 text-sm mt-1">By {author} on {date}</p>
//       {isOwner && (
//         <div className="mt-2 space-x-2">
//           {isEditing ? (
//             <button className="text-blue-600 text-sm" onClick={handleSave}>Save</button>
//           ) : (
//             <button className="text-blue-600 text-sm" onClick={() => setIsEditing(true)}>Edit</button>
//           )}
//           <button className="text-red-600 text-sm" onClick={() => onDelete(id)}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// }
