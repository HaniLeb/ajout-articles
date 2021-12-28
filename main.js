
$('form').on('submit', (event) => {
    event.preventDefault();

    $('#result').append(`
        <div class="col-lg-4 mt-5">
            <div class="card">
                <img src="${$('input:eq(0)').val()}" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">${$('input:eq(1)').val()}</h5>
                    <p class="card-text">${$('textarea').val()}</p>

                    ${$('input:eq(2)').val() ? `<a href="${$('input:eq(2)').val()}" 
                    target="_blank" class="btn btn-primary">Référence</a>` : ""}
                </div>
            </div>
        </div>
    `);

});