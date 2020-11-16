
$(document).ready(function(){
	$('#btn').on('click',function(){
		let rdr=$('#rdr').val();
		let asc=$('#asc').val();
		let long_boot=$('#long_boot').val();
		let long_top=$('#long_top').val();
		let stack=$('#stack').val();
		let per=$('#per').val();
		let arr = [];
if (per == '') {
	arr[0] = 'Введіть довжину перехідника!';
	
}
if (stack == '') {
	arr[0] = 'Введіть довжину для стакана!';
	
}
if (long_top == '') {
	arr[0] = 'Введіть довжину кронштейна!';
	
}
if (long_boot == '') {
	arr[0] = 'Введіть висоту кронштейна!';
	
}
if (asc == '') {
	arr[0] = 'Введіть кут кронштейну!';
	
}
if (rdr == '') {
	arr[0] = 'Введіть радіус дуги кронштейну!';
	
}

if (arr.length == 0) {
	$('#error').text(" ");

		rdr=parseFloat(rdr);
		asc=parseFloat(asc);
		long_boot=parseFloat(long_boot);
		long_top=parseFloat(long_top);
		stack=parseFloat(stack);
		per=parseFloat(per);


if (rdr < 0) {
	rdr = rdr * -1;
}
if (asc < 0) {
	asc = asc * -1;
}
if (long_boot < 0) {
	long_boot = long_boot * -1;
}
if (long_top < 0) {
	long_top = long_top * -1;
}
if (stack < 0) {
	stack = stack * -1;
}
if (per < 0) {
	per = per * -1;
}

		let asc_r = (180-asc);
		
		function toRadians (angle) {
  		return angle * (Math.PI / 180);
				}

		let mas = [];
		let long_arc = (Math.PI*rdr*asc_r)/180;

		let small = rdr * Math.cos(toRadians(asc_r));

		let big = rdr - small;

		let height = rdr * Math.sin(toRadians(asc_r))

		let long_td = (long_top - big)/(Math.cos(toRadians(asc-90)));

		let HEIGHT = (Math.sin(toRadians(asc-90))) * long_td;

		let shot = long_boot - (HEIGHT + height);



		if (shot < 150) {
			mas[0] = "Надто малі розміри:" + " " + " нижня частина кронштейну = " + '<b>' + shot.toFixed() + '</b>';
			$('#result').text(" ");
		}
		if (long_td < 150) {
			mas[1] = "Надто малі розміри:" + " " + " верхня частина кронштейну = " + '<b>' + long_td.toFixed() + '</b>';
			$('#result').text(" ");
		}

		if (mas.indexOf( "Надто малі розміри:" + " " + " нижня частина кронштейну = " + '<b>' + shot.toFixed() + '</b>' ) == -1 ) {
			mas[0] = ' ';
		}

		if (mas.indexOf( "Надто малі розміри:" + " " + " верхня частина кронштейну = " + '<b>' + long_td.toFixed() + '</b>' ) == -1 ) {
			mas[1] = ' ';
		}


		if (mas[0] == ' ' && mas[1] == ' ') {
			$('#text').html("<br>Розміри нормальні!");
			let result = (shot + long_arc + long_td).toFixed();
			let result_stack = ((shot + long_arc + long_td) + (stack - per)).toFixed();
			$('#result').html("Результуюча довжина кронштейну:" + '<b>' + result + '</b>' + '<br>' + "Довжина зі стаканом і перехідником:" + '<b>' + result_stack + '</b>' );
		}
		else{
			$('#error').html(mas[0] + "<p>" + mas[1] + "</p>");
		}
}
else{
	$('#text').text(" ");
	$('#result').text(" ");
	$('#error').text(arr[0]);
}


	});
});


