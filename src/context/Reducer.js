export const Reducer=(state,action)=>{
    switch(action.type){
        case "LoginStart":
            return{
            user:null,
           isFetching:true,
           erorr:false
        }
        case "LoginSuccess":
            return{
            user:action.payload,
           isFetching:false,
           erorr:false
        }
        case "LoginFailure":
            return{
            user:null,
           isFetching:false,
           erorr:true
        }
        case "UpdateStart":
            return{
            ...state,
           isFetching:true,
           erorr:false
        }
        case "UpdateSuccess":
            return{
            user:action.payload,
           isFetching:false,
           erorr:false
        }
        case "UpdateFailure":
            return{
            user:null,
           isFetching:false,
           erorr:true
        }
        
        case "Logout":
            return{
            user:null,
           isFetching:false,
           erorr:false
        }
        default:{
            return state;
        }
    }
}