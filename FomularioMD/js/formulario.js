(function(){
	var formulario=document.formulario_registro,
		elementos=formulario.elements;

		//Functions 
		var enviar = function(e)
		{
			if( !validarImputs() ){
				console.log('Falto Validar Inputs');
				e.preventDefault();
			}else if( !validarRadios()){
				console.log('Falto Validar Radios');
				e.preventDefault();
			}else if( !validarCheckbox())
			{
				console.log('Falto Validar checkBox');
				e.preventDefault();
			}else{
				console.log('envia Correctamente los datos')
				//e.preventDefault(); 
			}
		};

		//Funciones 
		var focusInput= function(){
			this.parentElement.children[1].className ="label active"
			this.parentElement.children[0].className= this.parentElement.children[0].className.replace("error","");
		};

		var blurInput = function(){
			if(this.value <= 0)
			{
				this.parentElement.children[1].className ="label"
				this.parentElement.children[0].className= this.parentElement.children[0].className +" error";
			}
		};

		// Events
		formulario.addEventListener("Submit",enviar)

		for (var i =0; i < elementos.length; i++) 
		{
			if(elementos[i].type == 'text' || elementos[i].type == 'email' || elementos[i].type == 'password'){
				elementos[i].addEventListener("focus",focusInput);
				elementos[i].addEventListener("blur",blurInput);
			}
			
		}
}())