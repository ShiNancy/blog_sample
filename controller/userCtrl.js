

module.exports={
    getRegisterPage(req,res){
        res.render('./user/register');
    },
    getLoginPage(req,res){
        res.render('./user/login');
    }
}