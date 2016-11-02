/*******************************************************
SIMPLIFICAÇÕES:
    ss      = stores
    s       = store
    ps      = products
    p       = product
    btn     = button
    ctn     = container
    elem    = element
    t       = this
    w       = width
    h       = height
*******************************************************/
$(function(){
    btn_expand = $(".product_expand");

    $(".product_middle").css("height", "0");


    $(document).on("click", ".product_expand", function(){
        var t = $(this),
            p = $(findAncestor(this, ".product")),
            ss_ctn,
            ss_ctn_w,
            ss,
            ss_total_w;

        var p_middle = $(p.find(".product_middle"));

        p_middle.data("originalHeight", (p_middle.prop('scrollHeight')) + "px");
        
        if(t.data("expanded") == "yes"){
            t.data("expanded", "no");
            t.html('<i class="material-icons">&#xE5CF;</i>');
            p_middle.animate({
                height: "0px"
            });
        } else {
            t.data("expanded", "yes");
            t.html('<i class="material-icons">&#xE5CE;</i>');
            p_middle.css({
                height: p_middle.data("originalHeight")
            });
        }

        ss_ctn = $(p_middle.find(".stores"));
        ss_ctn_w = ss_ctn.outerWidth();
        ss = ss_ctn.find(".store"),
        ss_total_w = 0;
        
        ss.each(function(){
            var w, marginRight;
            w = parseInt($(this).outerWidth());
            marginRight = parseInt($(this).css("marginRight"));

            ss_total_w += (w + marginRight);
        });
        
        if(ss_ctn_w < ss_total_w){
            ss_ctn.css("overflow-x", "scroll");
        }

    });

    function findAncestor(elem, target){
        return $(elem).closest(target);
    }

    $(document).click(function(event){
        var elem = $(event.target);
    });
});