export default function UserTools({
  handleClickEdit,
  handleSubmit,
  handleClickLink,
}) {
  return (
    <div className="user-tools">
      <button onClick={handleClickEdit}>Edit</button>
      <button onClick={handleSubmit}>Delete</button>
      <button onClick={handleClickLink}>Link to an organisation</button>
    </div>
  );
}