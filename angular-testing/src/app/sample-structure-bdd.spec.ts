/**
 * A função `describe` agrupa um conjunto de teste de um mesmo cenário.
 * No testes do Angular, geralmente, o cenário estará vinculado a uma
 * estrutura do Angular: um componente, service, pipe, etc.
 */
describe('Meu Cenario', () => {
    // system under test (unidade que será testada teste)
    let sut: any = null;

    /**
     * Método para configurarmos algo que será compartilhado
     * entre todos os testes.
     */
    beforeAll(() => {
        console.log('Roda apenas uma vez antes de todos os testes');
    });

    /**
     * Método para configurarmos os objetos que usaremos em cada teste.
     * É importante sempre iniciarlizar aqui para que sempre seja
     * resetado antes de cada teste, assim, evitando que um teste
     * influencie outro.
     */
    beforeEach(() => {
        console.log('Roda uma vez antes de cada teste');
        sut = {};
    });

    /**
     * Método de teste em si, dentro de um cenário BDD podemos ter vários testes
     * ou até mesmo outros cenários.
     * BDD recomenta que os testes sempre iniciem com `deveria` (traduzido de `should`).
     */
    it('should be true if true', () => {
        // Montagem do cenário
        sut.a = false;
        // Ação
        sut.a = true;
        // Asserção
        expect(sut.a).toBe(true);
    });

    /**
     * Método para limparmos algo depois de cada teste.
     */
    afterEach(() => {
      console.log('Roda uma vez depois de cada teste');
    });

    /**
     * Método para limparmos algo compartilhado entre todos os testes.
     */
    afterAll(() => {
      console.log('Roda apenas uma vez depois de todos os testes');
    });
});
