export default function UserTools({
  handleClickEdit,
  handleSubmit,
  handleClickLink,
  status
}) {

  function Status(){
    if(status)
    return (
      <button onClick={handleClickEdit}>Mark as resolved</button>

    )
    return(
      <div></div>
    )
  }
  return (
    <div className="user-tools">
      <Status />
      <button onClick={handleSubmit}>Delete</button>
      <button onClick={handleClickLink}>Link to an organisation</button>
    </div>
  );
}
