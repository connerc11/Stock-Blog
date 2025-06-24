// function CommentSection() {
//   const [comments, setComments] = React.useState(() => {
//     const saved = localStorage.getItem('comments');
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [newComment, setNewComment] = React.useState('');
//   const username = localStorage.getItem('username') || 'Guest';

//   React.useEffect(() => {
//     localStorage.setItem('comments', JSON.stringify(comments));
//   }, [comments]);

//   const handleAdd = () => {
//     if (!newComment.trim()) return;
//     const newEntry = {
//       id: Date.now(),
//       text: newComment,
//       author: username,
//       date: new Date().toLocaleString()
//     };
//     setComments([...comments, newEntry]);
//     setNewComment('');
//   };

//   const handleDelete = (id) => {
//     setComments(comments.filter(comment => comment.id !== id));
//   };

//   const handleEdit = (id, updatedText) => {
//     setComments(comments.map(comment =>
//       comment.id === id ? { ...comment, text: updatedText } : comment
//     ));
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <textarea
//         className="w-full p-2 border rounded text-black mb-2"
//         placeholder="Write a comment..."
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//       />
//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         onClick={handleAdd}
//       >
//         Add Comment
//       </button>

//       <div className="mt-6">
//         {comments.map(comment => (
//           <CommentItem
//             key={comment.id}
//             id={comment.id}
//             text={comment.text}
//             author={comment.author}
//             date={comment.date}
//             currentUser={username}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
