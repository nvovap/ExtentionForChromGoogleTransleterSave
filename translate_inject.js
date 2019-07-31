(function (){	// обернем все в безымянную функцию, чтобы не создавать глобальных переменных - просто хороший тон
	//var observer = new MutationObserver(listModified);	// создаем объект observer -> вызывает listModified при каждом изменении DOM


    id = "jdhjochelcgbdfbcjdiehajdkbobpkol"

    save = false;

    console.log('mutations');

   
	//var footer = document.getElementsByClassName('source-footer-wrap source-or-target-footer');	// список изначальной музыки на нашей странице
    
    var footer = document.querySelector('div.source-footer-wrap');
    if (footer)
	{

        
		
		var link = document.createElement('a');
		link.className = 'downloadLink';	// добавим css класс 'downloadLink' для нашей ссылки
		link.textContent = "Скачать";
		//link.setAttribute('download', titleNode.textContent + '.mp3');	// имя файла для загрузки
		link.setAttribute('href', "/");
		link.addEventListener('click', function(event){	// при клике на нашу ссылку, отменим запуск проигрывателя
            //event.stopPropagation();
            event.preventDefault();
            if (save) {
                save = false;
                chrome.runtime.sendMessage(id,"stopCapture");
                chrome.runtime.sendMessage(id,"encodingComplete");
            } else {
                save = true;
                chrome.runtime.sendMessage(id,"startCapture");
            }
		});
		footer.appendChild(link);
    }
    
   

	
})();