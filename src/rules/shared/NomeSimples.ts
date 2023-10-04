export default Class NomeSimples {
    constructor(readonly completo: string,
        readonly min: number = 3,
        readonly max: number = 120
    ) {
        if (min > max) throw new Error("Tamanho mínimo nao pode ser maior que o máximo")
        if (!completo) throw new Error("Nome é obrigatorio")
        if (completo.length < min) throw new Error(`Nome deve ter no minimo ${min} caracteres.`)
        if (completo.length > max) throw new Error(`Nome deve ter no maximo ${max} caracteres.`)

        if (!completo.match(/^[a-zA-ZÀ-ú0-9\u00C0-\u017F ]+$/))
            throw new Error("O nome deve conter apenas letras")
    }

    parcial(qtde: number): string {
        return this.completo.substring(0, qtde) ?? ""
    }
}
