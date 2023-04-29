
$(function() {
    $(".modal_search").each(function() {
        var textModal = $('#textModal_' + this.id),
            html = textModal.html();
        $(this).on("keyup", function() {
            var reg = new RegExp($(this).val() || "&fakeEntity;", 'gi');
            textModal.html(html.replace(reg, function(str, index) {
                var t = html.slice(0, index+1),
                    lastLt = t.lastIndexOf("<"),
                    lastGt = t.lastIndexOf(">"),
                    lastAmp = t.lastIndexOf("&"),
                    lastSemi = t.lastIndexOf(";");
                //console.log(index, t, lastLt, lastGt, lastAmp, lastSemi);
                if(lastLt > lastGt) return str; // inside a tag
                if(lastAmp > lastSemi) return str; // inside an entity
                return "<span class='highlight'>" + str + "</span>";
            }));
        });
    })
})