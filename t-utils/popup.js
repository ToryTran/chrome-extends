console.log("This is a popup!")
window.addEventListener("load", function(){
    let utcTimeElement = document.getElementById("utc-value");
    this.setInterval(() => {
        utcTimeElement.innerText = (new Date()).toUTCString()
        // console.log(`Test ${new Date()}`);
    }, 1000)

    let btn_currency_rate = this.document.getElementById("get-crv");

    btn_currency_rate.addEventListener("click", async () => {
        this.document.getElementById("cc-last-update-time").innerText = Date();
        let currency_rate_el = document.getElementById("currency_rate_layout")
        
        let html_content = await fetch("https://chogia.vn/get-live-price.php?k=8fgY0d9s%25238g023j5lagu9%25248G72935jsaf987DF2935%255EuflskaB%2540j9873Y5&t=currencynames", {
            method: "GET",
            // "Content-Type": "text/plain"
        });
        html_data = await  html_content.text();
        console.log(html_data);
        currency_rate_el.style.display = ''
        currency_rate_el.innerHTML = currency_rate_el.outerHTML + " " +  html_data.split("<tr>").slice(0,6).join("<tr>");
    });

    let date=new Date(); // creates a new date object with the current date and time
        let year=date.getFullYear(); // gets the current year
        let month=date.getMonth(); // gets the current month (index based, 0-11)
        
        const day=document.querySelector(".calendar-dates"); // selects the element with class "calendar-dates"
        const currdate=document.querySelector(".calendar-current-date"); // selects the element with class "calendar-current-date"
        const prenexIcons=document.querySelectorAll(".calendar-navigation span"); // selects all elements with class "calendar-navigation span"
        
        const months=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"]; // array of month names
        
        // function to generate the calendar
        const manipulate=()=> {
            // get the first day of the month
            let dayone=new Date(year, month, 1).getDay();
        
            // get the last date of the month
            let lastdate=new Date(year, month + 1, 0).getDate();
        
            // get the day of the last date of the month
            let dayend=new Date(year, month, lastdate).getDay();
        
            // get the last date of the previous month
            let monthlastdate=new Date(year, month, 0).getDate();
        
            let lit=""; // variable to store the generated calendar HTML
        
            // loop to add the last dates of the previous month
            for (let i=dayone; i > 0; i--) {
        lit+=`<li class="inactive">${monthlastdate - i + 1}</li>`;
            }
        
            // loop to add the dates of the current month
            for (let i=1; i <=lastdate; i++) {
        // check if the current date is today
        let isToday=i===date.getDate() && month===new Date().getMonth() && year===new Date().getFullYear() ? "active": "";
        lit+=`<li class="${isToday}">${i}</li>`;
            }
        
            // loop to add the first dates of the next month
            for (let i=dayend; i < 6; i++) {
        lit+=`<li class="inactive">${i - dayend + 1}</li>`
            }
        
            // update the text of the current date element with the formatted current month and year
            currdate.innerText=`${months[month]} ${year}`;
        
            // update the HTML of the dates element with the generated calendar
            day.innerHTML=lit;
        }
        
        manipulate();
        
        // Attach a click event listener to each icon
        prenexIcons.forEach(icon=> {
        
        // When an icon is clicked
        icon.addEventListener("click", ()=> {
                // Check if the icon is "calendar-prev" or "calendar-next"
                month=icon.id==="calendar-prev" ? month - 1 : month + 1;
        
                // Check if the month is out of range
                if (month < 0 || month > 11) {
                    // Set the date to the first day of the month with the new year
                    date=new Date(year, month, new Date().getDate());
                    // Set the year to the new year
                    year=date.getFullYear();
                    // Set the month to the new month
                    month=date.getMonth();
                }
        
                else {
                    // Set the date to the current date
                    date=new Date();
                }
        
                // Call the manipulate function to update the calendar display
                manipulate();
            });
            });

            
});
