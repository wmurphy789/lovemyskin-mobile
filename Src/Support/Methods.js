// place where we will store common methods for all app

const navigate = (navigation, path) => {
    navigation.navigate(path)
}
const goBack = (navigation) => {
    navigation.goBack()
}
export default Methods = {
    navigate,
    goBack
}