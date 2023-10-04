import NomeSimples from '../../shared/NomeSimples';
import Duracao from '../../shared/Duracao';
import Entidade from '../../shared/Entidade';

export interface CursoProps {
    id?: string
    nome?: string
    duracao?: number
}

export default class Curso extends Entidade {
    readonly nome: NomeSimples
    readonly duracao: Duracao


    constructor(props: CursoProps) {
        super(props.id!)
        this.nome = new NomeSimples(props.nome!, 4, 115)
        this.duracao = new Duracao(props.duracao!)
    }
}