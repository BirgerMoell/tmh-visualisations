
export function Fruit(props) {

    console.log("the props are", props)
    if (props.value === "banan") {
      return <p> We got the banana! </p>
    } else {
      return (
        <p>{props.whateverIwant}</p>
      )
    }
  
  }