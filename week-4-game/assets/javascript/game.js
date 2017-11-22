$(document).ready(function(){
	var attack;
	var isSelected = true; 

	if(isSelected == true){
   	
		var the_action = function(type) {
		   	switch(type) {
		        case 'sherrif':
		            $("#rick").html("");
					$("#rick").removeClass('col-sm-2');
					$("#choice").html('<img src="assets/images/sherrif.jpg" style="width: 200px" id="sherrif">');
					isSelected = false;
		            break;
		        case 'daryl':
		            $("#darylClass").html("");
					$("#darylClass").removeClass('col-sm-2');
					$("#choice").html('<img src="assets/images/daryl.jpg" style="width: 210px" id ="daryl">');
					isSelected = false;
		            break;
		        case 'michonne':
		            $("#michonneClass").html("");
					$("#michonneClass").removeClass('col-sm-2');
					$("#choice").html('<img src="assets/images/michonne.jpg" style="width: 210px" id ="michonne">');
					isSelected = false;
		            break;
		        case 'negan':
		            $("#neganClass").html("");
					$("#neganClass").removeClass('col-sm-2');
					$("#choice").html('<img src="assets/images/negan.png" style="width: 177px" id="negan">');
					isSelected = false;
		            break;
		    }
		};

		$('.choice').click(function() {
	    if($('#sherrif').data('clicked') == true) {
	        the_action('sherrif');
	    	} else if ($('#daryl').data('clicked') == true){
	        the_action('daryl');
	    	} else if ($('#michonne').data('clicked') == true){
	        the_action('michonne');
	    	} else {
	    		the_action('negan');
	    	}
		})
	    
		$("#sherrif").click(function(){
			$(this).data('clicked', true);
		})

		//how do i break out of the function, so they cant click multiple images
		$("#daryl").click(function(){
			$(this).data('clicked', true);
		})
		$("#michonne").click(function(){
			$(this).data('clicked', true);
		})
		$("#negan").click(function(){
			$(this).data('clicked', true);
		})
	}
	isSelected = false;
})