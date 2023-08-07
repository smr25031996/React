ReactDOM.render(<h1>Hello, All!</h1>, document.getElementById("root"));
ReactDOM.render(<h1>My Name is Shubham</h1>, document.getElementById("name"));

ReactDOM.render(
  <ul>
    <li>Mango</li>
    <li>apple</li>
  </ul>,
  document.getElementById("fruits")
);

function FirstComponent() {
  return (
  <p>Hi I am firstComponent</p>)
}

ReactDOM.render(
    <div>
<FirstComponent />
<SecondComp />
<SecondComp />

    </div>,document.getElementById("component")
)

function SecondComp(){
    return(
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae voluptatem corrupti omnis in ad qui quaerat! Amet autem earum officia! Sint ad unde dolorum excepturi blanditiis nostrum. Asperiores, ab?</p>
    )
}

