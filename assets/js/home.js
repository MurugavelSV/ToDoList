let categoryContainer = document.getElementsByClassName('category');
let paraText = document.querySelectorAll('.category > p');

// Setting background color for each card based on category

for(let i = 0;i < paraText.length;i++){
    let bgColor = "";

    switch(paraText[i].innerText.toLowerCase()){
        case "personal":
            bgColor = "#40487c";
            break;

        case "work":
            bgColor = "#9c00af";
            break;

        case "school":
            bgColor = "#f2a700";
            break;

        case "cleaning":
            bgColor = "#df5e5e";
            break;

        default:
            bgColor = "#64aa76";
            break;
    }
    categoryContainer[i].style.backgroundColor = bgColor;
}