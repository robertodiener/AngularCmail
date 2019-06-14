export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataDeEnvio = '';

    get introducaoDoConteudo() {
        return this.conteudo.substr(0,10) + '...';
    }

    constructor(
        { destinatario, assunto, conteudo, dataDeEnvio}:
            { destinatario: string, assunto: string, conteudo: string, dataDeEnvio: string}
    ) {
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataDeEnvio = dataDeEnvio;
    }

}
