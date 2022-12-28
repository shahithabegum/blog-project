export const LoginStart=(userCredentials)=>({
    type:"LoginStart"
})
export const LoginSuccess=(user)=>({
    type:"LoginSuccess",
    payload:user,
})
export const LoginFailure=()=>({
    type:"LoginFailure"
})
export const UpdateStart=(userCredentials)=>({
    type:"UpdateStart"
})
export const UpdateSuccess=(user)=>({
    type:"UpdateSuccess",
    payload:user,
})
export const UpdateFailure=()=>({
    type:"UpdateFailure"
})

export const Logout=()=>({
    type:"Logout"
})
