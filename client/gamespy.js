		var keys = {};
		var widgetShown = false;
		var widgetTimeout = false;

		$(document).ready(function() {
			//initialize the voice widget
			$("#voice-widget-body").hide();

			//logic to show/hide the widget when pressing Ctrl+V
			$(document).keydown(function(){
				keys[event.which] = true;

				if(keys[17] && keys[86])
				{
					//alert("ctrl+V!");
					if(!widgetTimeout)
					{
						if(widgetShown)
						{
							$("#voice-widget-body").slideUp();
							widgetShown = false;
						}
						else
						{
							$("#voice-widget-body").slideDown();
							widgetShown = true;
						}
						widgetTimeout = true;
					}
				}
			});

			$(document).keyup(function(){
				keys[event.which] = false;
				if(!keys[86])
				{
					widgetTimeout = false;
				}
			});
			
			//sort the user list
			(function($) {

				$.fn.reOrder = function() {

					var array = new Array();

					$(this).children().each(function()
					{
						array.push($(this).attr('id'));
					});

					array.sort();

			  	return this.each(function() {

						for(var i=0; i < array.length; i++)
							array[i] = $('#' + array[i]);
						$(this).empty();  
						for(var i=0; i < array.length; i++)
							$(this).append(array[i]);      
					});    
				}
			})(jQuery);

			$('#voice-widget-users').reOrder();
		
		});
