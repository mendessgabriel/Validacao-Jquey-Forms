$( document ).ready(function() {
    $("<style type='text/css'> .validation{ outline: none!important; border: 1px solid red!important; width: 386px!important; } </style>").appendTo("head");

    $("<style type='text/css'> .color-red{ color: red!important; } </style>").appendTo("head");
    
    var pai = $("#nomeCliente");
    var inputNome = pai.find("input");

    inputNome.on('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9 ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
                inputNome.removeClass().addClass('validation');
                pai.children('span .ms-metadata').addClass('color-red');
                event.preventDefault();
                return false;
        } else {
            inputNome.removeClass().addClass('ms-long ms-spellcheck-true');
            pai.children('span .ms-metadata').removeClass('color-red').addClass("ms-metadata");
        }
    });
});