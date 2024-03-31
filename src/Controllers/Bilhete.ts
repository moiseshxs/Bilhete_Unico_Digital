import Api from "../Services/api/Api";

class Bilhete extends Api{


async getBilhetes(id:number, token:string)
{
        try{
            const response = await this.api.get(`/bilhetes/${id}` ,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return false
        } 
        
}
}


export default Bilhete