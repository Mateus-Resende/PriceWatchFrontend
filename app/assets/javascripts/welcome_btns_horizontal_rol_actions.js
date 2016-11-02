/*******************************************************
SIMPLIFICAÇÕES:
    btn     = button 
    calc    = calculation
    dirct   = direction
    elem    = element
    rol     = scroll
*******************************************************/
$(function() {
    var rol_left = $(".rol_left"),
        rol_right = $(".rol_right");

    /*******************************************************
    Chamadas, via clique, da ação dos botões que fazem
    as divs ".store" rolarem quando o espaço do container
    não é suficiente (visivelmente) para comportar todas.
    *******************************************************/
    rol_left.click(function(){ rolbtns(this, "left"); });
    rol_right.click(function(){ rolbtns(this, "right"); });

    function rolbtns(btn, dirct){
        var prefix = "",
            store = $(btn).parent().parent().find(".store")[0];
        if(dirct == "left")
            prefix = "-";

        if(store != null){
            var calc = calcMovement(store, prefix);
            $(store).css({ marginLeft: calc });
        }
    }

    /*******************************************************
    Como há infinitos produtos, para verificar quantas vezes
    o usuário clicou em um dos botões de rolagem horizontal
    das divs ".store", é feito um cálculo com base nas
    posições atuais da primeira div ".store".
    Com base nesse total de cliques anterios e com o prefixo
    do botão clicado, determinado por:
        rol_left    => prefixo negativo 
        rol_right   => prefixo positivo
    Podemos então incrementar ou decrementar a margem da
    primeira div ".store".
    *******************************************************/
    function calcMovement(elem, prefix){
        var store_margin_left = parseInt($(elem).css("marginLeft")),
            store_margin_right = parseInt($(elem).css("marginRight")),
            store_width = $(elem).outerWidth(),
            total = store_width + store_margin_right,
            clicks = (store_margin_left / total);
        
        if(prefix == "-")
            return total * (clicks - 1);
        else
            return total * (clicks + 1);
    }
});
