async function addUser (params){
    const {
        auth,
        email,
        password,
        diplayName
    }=params;

    const user = await auth.createUser({
        email,
        password,
        displayName

    });

    return user;
}

async function getUser(){
    const{auth, email}=params;

    const user = await auth.getUserByEmail(email);

    return user;
}

async function updateUser(){

    const {auth, displayName, password}=params;

    const user = await auth.updateUser(diplayName, password);

    return user;
}
module.exports = {
    addUser,
    getUser,
    updateUser
}