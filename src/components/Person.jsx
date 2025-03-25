const Person = ({ name, age, hobby }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {hobby && <p>Hobby: {hobby}</p>}
    </div>
  );
};
export default Person;
