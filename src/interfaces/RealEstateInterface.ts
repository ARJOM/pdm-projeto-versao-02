interface RealEstateInterface{
    id: number,
    cidade: string
    bairro: string
    rua: string
    numero: string
    descricao: string
    metrosQuadrados: number
    imagens: string //link para o firebase
    isActive: boolean
}

export default RealEstateInterface;