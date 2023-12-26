const App = () => {
  const Hello = (props) => {
    return (
      <div>
        <p>Hello World1 {props.name}</p>
      </div>
    );
  };
  console.log('Hello from the component');
  return <Hello name="George" />;
};

export default App;
