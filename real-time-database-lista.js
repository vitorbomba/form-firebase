$(document).ready(function() {

//var e = document.getElementById('usersList');

firebase.database().ref('usuarios').on('value', function (snapshot){
    //usersList.innerHTML = '';
    $("#usersList").empty();

    snapshot.forEach(function(item){
          var listHtml = '<tr>';
            listHtml += '<th scope="row" class="id-column">'+item.key+'</th>';
            listHtml += '<td>'+ item.val().idade +'</td>';
            listHtml += '<td>'+ item.val().nome +'</td>';
            listHtml += '<td class="text-center action-column">';
            listHtml += '<button type="button" class="btn btn-link btn-warning text-warning"><i class="fa fa-pencil" aria-hidden="true"></i></button>';
            listHtml += '</td>';
            listHtml += '<td class="text-center action-column">';
            listHtml += '<button type="button" class="btn btn-link btn-danger text-danger"><i class="fa fa-times" aria-hidden="true"></i></button>';
            listHtml += '</td>';
            listHtml += '</tr>';

            //e.append(listHtml).innerHTML;
            $("#usersList").append(listHtml);


    })
})

})