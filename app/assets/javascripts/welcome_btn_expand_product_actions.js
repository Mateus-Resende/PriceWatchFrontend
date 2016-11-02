/*******************************************************
SIMPLIFICAÇÕES:
    attr    = atributo
    aft     = after
    bef     = before
    btn     = button
    ctn     = container
    elem    = elemento
    obj     = objeto
    w       = width
*******************************************************/
$(function() {
    var expand_btns = $(".product_expand"),
        stores_cnt = $(".product_found_stores");

    /*******************************************************
    Controla as animações de um elemento, recebendo o
    elemento que será animado, o atributo alvo e os estilos
    em formato de um objeto, para serem aplicados ao css.
    *******************************************************/
    function animateThis(elem, target, attr_aft, attr_bef){
        var style = elem.prop("style");
        
        if (attr_aft[target] == style[target])
            elem.css(attr_bef);
        else
            elem.css(attr_aft);
    }

    expand_btns.click(function() {
        /*******************************************************
        Controle de mudança do icone do botão expandir.
        Coloca inicialmente uma classe "plus" ao botão expandir
        clicado, que servirá de controle para saber se o produto
        está expandido ou contraído.
        *******************************************************/
        if ($(this).hasClass("plus")) {
            $(this).removeClass("plus");
            $(this).html('<i class="material-icons">&#xE5CF;</i>');
        } else {
            $(this).addClass("plus");
            $(this).html('<i class="material-icons">&#xE5CE;</i>');
        }

        var cnt_parent_btn = $(this).parent(this),
            stores_cnt = cnt_parent_btn.parent(cnt_parent_btn).siblings(this),
            stores_cnt_w = stores_cnt.outerWidth(),
            stores = stores_cnt.find(".store"),
            stores_total_w = 0;
            
            /*******************************************************
            Para cada div ".store" encontrada
            (dentro do container do produto que será expandido),
            acumula à variável "stores_total_w" a soma dos atributos
            width e marginRight de cada uma.
            *******************************************************/
            stores.each(function(){
                var w, marginRight;
                w = parseInt($(this).outerWidth());
                marginRight = parseInt($(this).css("marginRight"));

                stores_total_w += (w + marginRight);
            });


        var rol_btn_cnt = stores_cnt.find(".rol_stores_buttons");

        /********************************************************
        Compara se o tamanho do container das lojas comporta o
        tamanho total do somatório de cada div "store". Se não
        comporta, exibe o container com os botões de rolagem
        horizontal; se comporta, então oculta-os.
        ********************************************************/
        if(stores_cnt_w < stores_total_w){
            rol_btn_cnt.show();
            //rol_right = rol_btn_cnt.find(".rol_right");
            //rol_right.hide();
        } else
            rol_btn_cnt.hide();

        animateThis(
            stores_cnt,
            "height",
            { height: "auto" },
            { height: "0px" }
        );
    });
});