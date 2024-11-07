function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta, resposta)


    let flshcard = documet.getElementById('flashcard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML = `
          <div class="cartao__conteudo">

                    <h3>${item}</h3>

                    
                    <div class="cartao__conteudo__pergunta">
                        </p>
                            ${pergunta}
                        <p>
                            
                    </div>

                    <div class="cartao__conteudo__resposta">
                        <p>
                           ${resposta}
                        
                        </p>

                    </div>
                    
                    
            </div>


    `
    let respostaEstaVisivel = false;

    function viraCartão () {
        respostaEstaVisivel = !variavelEstaVisivel;
        cartao.classList.toggle('active', viraCartão);

    }

    cartao.addEventListener('click', viraCartão)



    flashcard.appendChield(cartao);

}

