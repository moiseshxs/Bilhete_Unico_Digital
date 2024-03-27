import Api from "../Services/api/Api";


class AuthPassageiro extends Api{

//chamada para verificar se o cpf existe no banco 
async getByCpf(cpf:string)
{
    let form = new FormData();
    form.append("cpfPassageiro",cpf);
    try{
        const response = await this.api.post('/auth/cadastro', form);
        return response.data;
    }catch(e){
        return false
    }
}

//chamada para enviar o codigo para o email
async requireCodEmail(forma:string, dado:string)
{
    
      let form = new FormData();
      form.append("emailPassageiro", dado);
      try{
        const response = await this.api.post('/auth/requireCod', form);
        return response.data.message == 'sucesso ao enviar email'
      }catch(e){
        return false
      }
  }

async verCod(id:number, codigo:string)
{
    let form = new FormData();
    form.append("codigo", codigo);

    try{
        const response = await this.api.post(`/auth/verCod/${id}`, form);
        return response.data.message
    }catch(e){
        return false
    }
}

async register(id:number, password:string)
{
        let form = new FormData();
        
        form.append("password", password);
        try{
            const response = await this.api.post(`/auth/register/${id}`, form);
            return response.data.message
        }catch(e){
            return false
        }
}

async login(cpf:string, password:string)
{
        let form = new FormData();
        form.append("cpfPassageiro", cpf);
        form.append("password", password);
        
        try{
        const response = await this.api.post('/auth/login', form)
        return response.data
        }catch(e){
            return false
        }
       

       
}

}


export default AuthPassageiro;