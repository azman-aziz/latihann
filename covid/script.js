let settings = {
  "url": "https://api.covid19api.com/summary",
  "method": "GET",
  "timeout": 0,
};

let $pagination = $('.pagination-sm'),
Totalrecord = 0,
records = [].
displayrecords = [],
recperpage = 10 ,
page = 1,
totalpage = 0;

$.ajax(settings).done(function (response) {

  let settings = response.Countries;
  
  records = settings;
  console.log(records);
  Totalrecord = records.length;
  totalpage = Math.ceil(Totalrecord / recperpage);
  apply_pagination();


   $.each(settings, function(i , data){
					$('.row').append(`
					<div class="col-md-3 mt-3">
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

					// $('.pag').html('');
					// $('#paginationholder').html('<ul id="pagination" class="pagination-sm"></ul>');
					// $('#pagination').twbsPagination({
					//     startPage: data.page,
					//     totalPages: data.length,
					//     visiblePages: 5,
					// });

	});
});

function generate_table() {

      let tr;
      let displayrecords = [] ;
      $('.pag').html('');
      for (let i = 0; i < displayrecords.length; i++) {
            
      }
}

function apply_pagination() {

      $pagination.twbsPagination({
            totalpage: totalpage,
            visiblePages: 6,
            onPageClick: function (event, page) {
                  displayRecordsIndex = Math.max(page - 1, 0) * recperpage;
                  endRec = (displayRecordsIndex) + recperpage;
                 
                  displayRecords = records.slice(displayRecordsIndex, endRec);
                  generate_table();
            }
      });
}