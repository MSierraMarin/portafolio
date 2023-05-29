
function encryptText() {
			var textarea = document.querySelector('.areatexto');
			var message = textarea.value;
			var encryptedMessage = '';

			//for (var i = 0; i < message.length; i++) {
				//var charCode = message.charCodeAt(i);
				//encryptedMessage += String.fromCharCode(charCode + 1);
			//}
		const longitud = message.length;
         var crip=[];
         var inicio=0;
         while (inicio < longitud) {
            var prueba = message.charCodeAt(inicio);
            var prueba2 = Math.round((prueba**0.5)*1000);
            crip[inicio]= prueba2;
            inicio = inicio + 1;
         }
			var areamensaje = document.querySelector('.areamensaje');
			areamensaje.value = crip;
		}


		function decryptText() {
			var textarea = document.querySelector('.areatexto');
			var message = textarea.value;
			var decryptedMessage = '';

			//for (var i = 0; i < encryptedMessage.length; i++) {
				//var charCode = encryptedMessage.charCodeAt(i);
				//decryptedMessage += String.fromCharCode(charCode - 1);
			//}

		 let array = message.split(',');
         const long = array.length;
         var decryp=[];
         var inicio=0;
         while (inicio < long) {
            //var prueba = message.charCodeAt(inicio);
            var prueba = Math.round(((array[inicio])/1000)**2);
			var prueba2 = String.fromCharCode(prueba);
            decryp[inicio] = prueba2;
            inicio = inicio + 1;
         }

			let texto = decryp.join('');
			var textarea = document.querySelector('.areamensaje');
			textarea.value = texto;
		}

		function copyText() {
			var areamensaje = document.querySelector('.areamensaje');
			areamensaje.select();
			document.execCommand('copy');
			alert('Copied to clipboard!');
		}