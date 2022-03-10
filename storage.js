const getFunction = (idname) => {
    const getId = document.getElementById(idname);
    const value = getId.value;
    return value;
}

const addLocalStorage = () => {
    const key = getFunction('localStorage-id');
    const value = getFunction('localStorage-value');
    localStorage.setItem(key, value);
}

const addSessionStorage = () => {
    const key = getFunction('SessionStorage-id');
    const value = getFunction('SessionStorage-value');
    sessionStorage.setItem(key, value);
}

// const clearAll = () => {
//     localStorage.clear();
//     sessionStorage.clear();
// }