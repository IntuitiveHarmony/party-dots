function Warning({ handleWarning }) {
  return (
    <>
      <div>Warning: Party Dots contains flashing images. </div>
      <button onClick={() => handleWarning()}>Take me to the dots!</button>
    </>
  );
}
export default Warning;
