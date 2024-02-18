import axios from "axios";


export default class Api{
    baseUrl: string = 'http://127.0.0.1:9000/api/';
    api;
    config;
    token;
    constructor()
    {
        this.api = axios.create({
            baseURL: this.baseUrl,
            headers: { Accept:'application/json',
            'Content-Type': 'multipart/form-data',
               }
        });
    }
    setToken(token:string)
    {
      this.token = token;
    }
    // async getPassageiro(id:number){
    //     try{
    //         const response = await this.api.get(`/passageiros/${id}`)
            
    //         return response.data
            
    //       }catch(err){
    //         return "Email ou senha incorretos!"
    //       }
    //     }
      async perfil(token)
      {
        const response = await this.api.get('/auth/perfil', { headers: {'Authorization': `Bearer ${token}`}})
        return response.data
      }
      async login(cpf:string, password:string)
      {
        let form = new FormData();
        form.append("cpfPassageiro", cpf);
        form.append("password", password);
        
         const response = await this.api.post('/auth/login', form)
        
        //  }).catch(error => console.log(error.message))
        // const response = await this.api.get(`/bilhetes/1` )
        // console.log(response.data)
        // return response.data

        console.log(response.data)
        this.setToken(response.data.token_de_acesso)
        return response.data
      }
      async getByCpf(cpf:string){
        let form = new FormData();
        form.append("cpfPassageiro",cpf);
        const response = await this.api.post('/auth/cadastro', form);
        return response.data;
      }
      async requireCod(forma:string, dado:string){
        if(forma == "email"){
          let form = new FormData();
          form.append("emailPassageiro", dado);
          const response = await this.api.post('/auth/requireCod', form);

          return response.data.message == 'sucesso ao enviar email'
            
          
        }
        
      }
      async verCod(id:number, codigo:string)
      {
        let form = new FormData();
        form.append("codigo", codigo);
        const response = await this.api.post(`/auth/verCod/${id}`, form);
        console.log(response.data)
        return response.data.message == 'autorizado';
      }
      async register(id:number, password:string)
      {
        let form = new FormData();
        
        form.append("password", password);
        const response = await this.api.post(`/auth/register/${id}`, form);
        
        return response.data.message == "Sucesso ao cadastrar!";

      }
    }
