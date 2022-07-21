const setUserInfo = (user) => {
    return (dispatch) => {
        dispatch({
            type: "@auth/setUserInfo",
            payload: user,
        });
    };
};

const setUserImage = (image) => {
    return (dispatch) => {
        dispatch({
            type: "@auth/setUserImage",
            payload: image,
        });
    };
};

export { setUserInfo, setUserImage };
