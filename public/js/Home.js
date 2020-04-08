$(document).ready(function () {

    //localStorage
    if (localStorage.getItem("username") === null) {

        window.location.href = "login.html";

    } else {

        $("#userName").html(localStorage.getItem("username"));
        getData();
        $("#SaveData").click(function () { // Recuperation des valeurs

            var name = $("#name").val();
            var Description = $("#Description").val();
            var Status = $("#Status").val();

            if (name != "" && Description != "" && Status != "") { // check les valeurs 
                $.ajax({
                    url: '/AddTask',
                    type: 'post',
                    data: {
                        name,
                        Description,
                        Status
                    },
                    success: function (response) {
                        if (response.request) {
                            //send fetched
                            getData(response);
                            $("#name").val('');
                            $("#Description").val('');
                            $("#Status").val('');
                        }
                    }

                });
            }
        });

    }
});


function getData(fetched) {
    if (fetched === undefined) {
        $.ajax({
            url: '/Tache',
            type: 'get',
            success: function (response) {
                if (response.request) {

                    // data correc
                    AddCards(response.data);

                }
            },
        });
    } else {
        AddCards(fetched.data);
    }
}


function AddCards(data) {

    var tache_Data = '';
    $("#Tache").html(tache_Data);
    $.each(data, function (index, value) {

        tache_Data += '<div class="col-md-4">';
        tache_Data += '<div class="card-box">';
        tache_Data += '<div class="card-title">';
        tache_Data += '<h2>' + value.name + '</h2>';
        tache_Data += '<p>' + value.Description + '</p><br/>';
        tache_Data += '<h5>' + value.Status + '</h5>';
        tache_Data += '</div>';
        tache_Data += ' <div class="card-link">';
        tache_Data += `<button type="button" data-toggle="modal" data-target="#UpdatePopUp" data-uid="1" onclick="show(${index},'${value.name}','${value.Description}','${value.Status}')" class="update btn btn-warning btn-sm"><span class="fa fa-pencil"></span></button>`;
        tache_Data += ' <button type="button" data-toggle="modal" data-target="#DeletePopUp" data-uid="1" onclick="show(' + index +')"  class="update btn btn-warning btn-sm"><span class="fa fa-trash"></span></button>';
        tache_Data += '</div>';
        tache_Data += '</div>';
        tache_Data += '</div>';
    });
    $("#Tache").append(tache_Data);


}

function show(index,name,Description,Status) {
    localStorage.setItem("id", index);
    $("#nameUpdate").val(name);
    $("#DescriptionUpdate").val(Description);
    $("#StatusUpdate").val(Status);
}