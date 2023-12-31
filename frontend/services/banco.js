import axios from "axios";

class ApiBanco{
  constructor(){
    this.server = axios.create({
      baseURL: 'http://localhost:4000'
    })
  }
  listarBancos = async ()=>{
    try {
      const response = await this.server.get('banks')
      return response.data
    } catch (error) {
      throw error
    }
  }

  criarBanco = async (name, balance)=>{
    try {
      const response = await this.server.post('/bank', {name, balance})
      return response.data
    } catch (error) {
      throw error.response.data.Error
    }
  }

  deletarBanco = async (id)=>{
    try {
      const response = await this.server.delete(`/bank/${id}`)
      return response
    } catch (error) {
      throw error
    }
  }
}

export default ApiBanco