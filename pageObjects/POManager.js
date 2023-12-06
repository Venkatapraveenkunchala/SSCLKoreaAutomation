const { LoginPage } = require("./LoginPage");
const { WarrantyDetailsPage } = require("./WarrantyDetailsPage");
class POManager {
    
    constructor() {
        this.login= new LoginPage();
        this.WarrantyDetailsPage=new WarrantyDetailsPage();
    }

    getLoginPage() {

        return{login:this.login};
        
    }
    getWarrantyDetailsPage(){
       return{WarrantyDetailsPage:this.WarrantyDetailsPage};
    }
}
module.exports ={POManager}