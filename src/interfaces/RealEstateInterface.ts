interface RealEstateInterface{
    id: number
    preco: number
    cidade: string
    bairro: string
    rua: string
    numero: string
    descricao: string
    metrosQuadrados: number
    userId: number
    imagens: string //link para o firebase
    isActive: boolean
}

export default RealEstateInterface;