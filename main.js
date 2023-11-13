fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {

    const adat = data;
    let graph = document.querySelector(".bar-graph");

    adat.forEach((item, index) => {
      let day = item.day;
      let amount = item.amount;

      let container = document.createElement("div");
      container.classList.add("data-column");

      container.innerHTML = `
        <div class="tooltip">$${amount}</div>
        <div class="column"></div>
        <div class="days">${day}</div>`;

      graph.appendChild(container);

    //setting the height of columns
        let columnHeight = amount * 2.87; //150px / $52,36
        let columns = document.querySelectorAll(".column");
        let currentColumn = columns[index];
        currentColumn.style.height = `${columnHeight}px`;

    //coloring the column blue
        let daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let date = new Date().getDay();
        let today = daysOfTheWeek[date];

       let days = document.querySelectorAll(".days");
       let currentDay = days[index];

       if(currentDay.innerHTML == today) {
            currentColumn.style.backgroundColor = "hsl(186, 34%, 60%)";
       }

    });
  });
