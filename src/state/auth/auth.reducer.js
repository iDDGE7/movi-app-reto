const initialstate = {
    dataRegister: {
        userInfo: null,
        userImages: { imageIneFrontal: "", imageIneReverso: "", imageSelfie: "" },
    },
};

const authReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case "@auth/setUserInfo":
            return { ...state, dataRegister: { ...state.dataRegister, userInfo: payload } };
        case "@auth/setUserImage":
            return {
                ...state,
                dataRegister: { ...state.dataRegister, userImages: {...state.dataRegister.userImages, ...payload} },
            };
        default:
            return state;
    }
};

export default authReducer;
