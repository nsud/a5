const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
	$.getJSON(
		dataURL,
		function(data){
			console.log(data.text);
			handleData(data)
		}
	)
}

function handleData(data) {
	// кажется, какой-то из этих способов сработает
	//const var1 = $("input[name=var1]")[0].value
	////const var1 = $("input[name=var1]").value()
	const var1 = $("input[name=var1]")[0].value;
	const var2 = $("input[name=var2]")[0].value;
	const var3 = $("input[name=var3]")[0].value;
	const var4 = $("input[name=var4]")[0].value;
	const var5 = $("input[name=var5]")[0].value;
	const var6 = $("input[name=var6]")[0].value;
	const speach = $("input[name=speach]")[0].value;

	console.log(`${data.text}`,var1);

	// надо сделать так чтобы сообщения подменились на значения из формы
	const text = `<blockquote class="blockquote">
		<br>

		Жили-были ${var1} да ${var2}<br/>
		Была у них ${var3}<br/>
		Снесла ${var3} ${var4}, не простое - золотое<br/>
		- ${var1} бил, бил - не разбил<br/>
		- ${var2} била, била - не разбила<br/>
		${var5} бежала, ${var6} задела, ${var4} упало и разбилось.<br/>
		${var1} плачет, ${var2} плачет, а ${var3} кудахчет:<br/>
		${speach}<br/></blockquote>`;

	const $text = $(text);
	$text.appendTo("#result")
	//$("#result").appendTo(#result)
}
function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
