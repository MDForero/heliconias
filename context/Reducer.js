export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newItem = action.payload;
            const itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart ? {
                ...state,
                cart: [...state.cart.map(item => item.id === newItem.id? {...item, cantidad: item.cantidad + 1}: item)],
                total: state.total + action.payload.precio,
                cantidad: state.cantidad + 1
            } : {
                cart: [...state.cart, { ...newItem, cantidad:  1 }],
                total: state.total + action.payload.precio,
                cantidad: state.cantidad + 1
            }

        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.precio * action.payload.cantidad,
                cantidad: state.cantidad - action.payload.cantidad
            };
        case "REMOVE_ONE":
            const itemInCart2 = state.cart.find(item => item.id === action.payload.id);
            console.log(itemInCart2)
            return itemInCart2 ? itemInCart2.cantidad > 1 ? {
                ...state,       
                cart: [...state.cart.map(item => item.id === action.payload.id? {...item, cantidad: item.cantidad - 1}: item)],
                total: state.total - action.payload.precio,
                cantidad: state.cantidad - 1
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.precio,
                cantidad: state.cantidad - 1
            } : state   ;
            

        case "CLEAR":
            return {
                ...state,
                cart: [],
                total: 0,
                cantidad: 0
            };

        default:
            return state;
    }
};

export const initialState = {
    cart: [],
    total: 0,
    cantidad: 0
};
