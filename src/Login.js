function Login() {

    var usersList;

    function userExists(username) {
        return usersList.indexOf(username) >= 0;
    }

    function loadUsers(loadedUsers) {
        usersList = loadedUsers;
    }

    function deleteUsers() {
        usersList = null;
    }

    function userExistsPromise(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(usersList.indexOf(user) >= 0)
            }, 10);
        });
    }

    //para las funciones que no tienen return se usa esta parte.

    return {
        userExists,
        loadUsers,
        deleteUsers,
        userExistsPromise
    }
}

module.exports = Login();
