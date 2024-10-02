const withPermission = (Component, user) => {
  return function WithPermission(props) {
    if(!user.userRoles.includes('admin')){
      return <h1>Non Admin View</h1>
    }
    return <Component {...props} />;
  };
};

export default withPermission;
