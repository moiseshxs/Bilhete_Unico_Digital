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
        console.log(response, "da api")
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
            return e
        }
       

       
}
async updateSenhaPassageiro(id:number,password:string) {

    let formData = new FormData();
    formData.append("password", password);
    try {
    const response = await this.api.post(`/auth/putPassword/${id}`, formData)
    return response.data
    } catch (error) {
        console.log(error, "erro ao atualizar a senha do usuario")
        return error;
    }
}

async updateEmailPassageiro(id:number,emailPassageiro:string) {

    let formData = new FormData();
    formData.append("emailPassageiro", emailPassageiro);
    try {
    const response = await this.api.post(`/auth/putEmail/${id}`, formData)
    return response.data
    } catch (error) {
        console.log(error, "erro ao atualizar o email do usuario")
        return error;
    }
}
async updateTelefonePassageiro(id:number,telefonePassageiro:string) {

    let formData = new FormData();
    formData.append("numTelPassageiro", telefonePassageiro);
    try {
    const response = await this.api.post(`/auth/putTelefone/${id}`, formData)
    return response.data
    } catch (error) {
        console.log(error, "erro ao atualizar o telefone do usuario")
        return error;
    }
}
async getByCpfRecuperar(cpf:string)
{
    let form = new FormData();
    form.append("cpfPassageiro",cpf);
    try{
        const response = await this.api.post('/auth/recuperar', form);
        return response.data;
    }catch(e){
        return false
    }
}
async requireCodEmailRecuperar(forma:string,dado:string) 
{
    
    
      let form = new FormData();

      
      console.log(dado, "retorno do typescript dado")
      form.append("emailPassageiro", dado);
      console.log(form, "retorno do typescript form")
      try{
        const response = await this.api.post('/auth/requireCodRecuperar', form);
        return response.data.message == 'sucesso ao enviar email'
      }catch(e){
        return false
      }
  }

  async colocaImagem(arquivo:string, id:number)
  {
    console.log(arquivo);
      const filename = arquivo.substring(arquivo.lastIndexOf('/') + 1, arquivo.length);
      
      const tipoArquivo = filename.split('.')[1];
      
      let form = new FormData();
      
      form.append('file', JSON.parse(JSON.stringify({
          name: filename,
          uri: arquivo,
          type: 'image/' +tipoArquivo
      })));

      try {
        const reponse = await this.api.post(`/insertFoto/${id}`, form, {headers: {'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'}});
        console.log(reponse.data);
        return reponse.data.passageiro
      } catch(e) {
        console.log(e.response)
       return  e.response.data.message
       
      }
      
  }
}


export default AuthPassageiro;