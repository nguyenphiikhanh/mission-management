import http from "../../httpCommon.js";

export default{
    async login(usernameOrEmail, password){
        await http.get('/sanctum/csrf-cookie');
        return http.post('/login',{
            usernameOrEmail: usernameOrEmail,
            password: password
        });
    },

}