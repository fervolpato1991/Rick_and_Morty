const {users} = require("../utils/users");

const login = (req, res) => {
    const {email, password} = req.query;

    if(!email || !password){
        return res.status(500).json({message: "Missing email or password"});
    }
   
    const user = users.find(user => user.email === email && user.password === password);
    
    if(user) return res.status(200).json({access: true});
     return res.status(404).json({access: false});
    
}

module.exports = {login};