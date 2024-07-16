// import { Component } from "react";
// import Profile from "./profile";

// class ProfileClass extends Component {
//   constructor(props) {
//     super(props);
//     console.log("parent-constructor");
//     this.state = {
//       count: 0,
//     };
//   }

//   async componentDidMount() {
//     console.log("parent-didmount");
//     const data = await fetch("https://api.github.com/users/MagupalliKarlayya");
//     const jsondata = data.json();
//     jsondata.then((respone) => {
//       console.log(respone?.name);
//     });
//   }

//   componentDidUpdate(prevState) {
//     if (this.state !== this.prevState) {
//       console.log("parent-componentDidUpdate");
//     }
//   }
//   componentWillUnmount() {
//     console.log("parent-didummount");
//   }
//   render() {
//     console.log("parent-render");
//     return (
//       <>
//         <h1>PofileClassComponents </h1>
//         <button
//           onClick={() => {
//             this.setState((prevState) => ({
//               count: prevState.count + 1,
//             }));
//           }}
//         >
//           buttons
//         </button>
//         <Profile />
//       </>
//     );
//   }
// }
// export default ProfileClass;
