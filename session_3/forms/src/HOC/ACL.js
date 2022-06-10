const user = {
  id: 1,
  username: "Amin",
  permissions: ["ADD_TASK", "EDIT_TASK", "DELETE_TASK", "VIEW_TASK"],
};

/**
 * in ye function mamulie, dastresi be mafhum props ke tu react hast nadare,
 * niaz hast zamineo tahie konim ke be props dastresi dashte bashim
 *
 * HOC > High Order Component, vaghti mikhay props haye ye component asli dastkari konim, modiriat
 */
export default function ACL(Component) {
  //   return Component;
  return class MyACL extends React.Component {
    render() {
      console.log(this.props); // props o darim, ama bayad dobare bedimesh be component
      return (
        (!this.props.permission ||
          user.permissions.includes(this.props.permission)) && (
          <Component {...this.props} />
        )
      );
    }
  };
}

// export default class ACL extends Component {
//   render() {
//     return <div>ACL</div>;
//   }
// }
