import axios from "axios";


export default class Api{
    baseUrl: string = 'http://127.0.0.1:9000/api';
    api;
    config;
    token;
    constructor()
    {
        this.api = axios.create({
            baseURL: this.baseUrl,
            headers: {'Authorization': `Bearer ${this.token}`}
        });
    }
    setToken(token:string)
    {
      this.token = token;
    }
    async getPassageiro(id:number){
        try{
            const response = await this.api.get(`/passageiros/${id}`)
            console.log(response)
            return response.data
            
          }catch(err){
            return "Email ou senha incorretos!"
          }
        }
      async login(cpf:string, password:string)
      {
        let form = new FormData();
        form.append("cpfPassageiro", cpf);
        form.append("password", password);
        const response = await this.api.post('/auth/login', form);
        this.setToken(response.data.token_de_acesso)
        return response.data
      }
    }
