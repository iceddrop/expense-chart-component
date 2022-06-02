
let canvaElement = document.getElementById('expenseChart');
const expense = 
[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

let config = {
    type : 'bar',
    data : {
        labels : ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets : [{
            label : "Expense",
            data :[expense[0].amount, expense[1].amount, expense[2].amount, expense[3].amount, expense[4].amount, expense[5].amount, expense[6].amount],
            backgroundColor : [
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
            ],
            borderRadius:2,
        },
    ],
    },
};
let expenseChart = new Chart(canvaElement, config)