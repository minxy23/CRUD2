
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
    
    
    
    $(function() {
      
      $("form[name='registration']").validate({
        rules: {
          firstname: "required",
          lastname: "required",
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        
        messages: {
          firstname: "Por favor digite seu primeiro nome...",
          lastname: "Por favor digite seu último nome...",
          password: {
            required: "Por favor crie uma senha...",
            minlength: "Sua senha deve ter pelo menos 5 caracteres!"
          },
          email: "Por favor insira o seu email..."
        },
      
      });
    });
    