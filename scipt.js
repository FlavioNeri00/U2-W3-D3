const rowBooks = document.getElementById("row-book");

window.onload = () => {
  const fetchingBook = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/books");
      if (resp.ok) {
        const book = await resp.json();

        book.forEach(
          (elem) =>
            (rowBooks.innerHTML += `
         <div class="col-sm-12 col-md-4 col-lg-3">
              <div class="card">
            <img src=${elem.img} class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title">${elem.title}</h5>
              <p class="card-text">${elem.price}</p>
              <p class="fw-bold">${elem.category}<p>
            </div>
          </div>
         </div>
          `)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  fetchingBook();
};
