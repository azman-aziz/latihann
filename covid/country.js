$.ajax({
	url : 'https://api.covid19api.com/summary',
	type : 'get',
	dataType : 'json',
	success : function(hasil){
		
		let data = hasil.Countries;
		let source = hasil.length;
		
		

		$.each( data , function(i, data){
			$('.row').append(`
					<div class="col-md-3 mt-3 pagi">
						<div class="card mb-3 border-primary">
						  
						  <div class="card-body">
						    <h5 class="card-title text-center">`+data.Country+`</h5>
						    <hr class="bg-primary">
						    <h6 class="card-subtitle mb-2 "> New Confrimed : `+data.NewConfirmed+`</h6>
						    <h6 class="card-subtitle mb-2 "> New Deaths : `+data.NewDeaths+`</h6>
						    <h6 class="card-subtitle mb-2 "> New Recovered : `+data.NewRecovered+`</h6>

						    <h6 class="card-subtitle mb-2 "> Total Confrimed : `+data.TotalConfirmed+`</h6>
						    <h6 class="card-subtitle mb-2 "> Total Deaths : `+data.TotalDeaths+`</h6>
						    <h6 class="card-subtitle mb-2 "> Total Recovered : `+data.TotalRecovered+`</h6>
						    <h6 class="card-subtitle mb-2 "> Date : `+data.Date+`</h6>
						  </div>
						</div>
					</div>
				`);
			
		});

		let numberitem = $('.container .pagi').length;
		let limitperpage = 9;

		$('.container .pagi:gt(' + (limitperpage - 1) + ')').hide();
		let totalPages = Math.round(numberitem / limitperpage);

		$(".pagination").append(`
			<li class='current-page active'><a href='javascript:void(0)'>` + 1 + `</a></li>
			`);

		for (let i = 2; i <= totalPages; i++) {
	 $(".pagination").append(`<li class="page-item "><a  href="javascript:void(0)">`+ i +`</a></li>`); // Insert page number into pagination tabs
		}

		$(".pagination").append(`<li class="page-item" id="next-page"><a class="page-link"  href="#">Next</a></li>`)

		$(".pagination li.page-item").on("click", function() {
		  // Check if page number that was clicked on is the current page that is being displayed
		  if ($(this).hasClass('active')) {
		    return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
		  } 
		  else {
		    let currentPage = $(this).index(); // Get the current page number
		    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
		    $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
		    $(".row .pagi").hide(); // Hide all items in loop, this case, all the list groups
		    let grandTotal = limitperpage * currentPage; // Get the total number of items up to the page number that was clicked on

		    // Loop through total items, selecting a new set of items based on page number
		    let i = data;

		    for (let i = grandTotal - limitperpage; i < grandTotal; i++) {
		     
		      $(` .row .pagi:eq(`+ i +`) `).show(); // Show items from the new page that was selected
		    }
		  }
		 		
			});
		



}
});

