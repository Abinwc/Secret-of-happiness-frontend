<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>

<p id="demo"></p>
<script>
const records= [{
    family: 3,
    fun: 3, 
    friends:3, 
    field: 2,
    finance: 5,
    faith: 3, 
    fitness: 4,
    date: '22-08-2022'
},
{
    family: 4,
    fun: 4, 
    friends:4, 
    field: 3,
    finance: 6,
    faith: 4, 
    fitness: 5,
    date: '22-09-2022'
},
];
const homepage=document.getElementById("demo");
records.forEach(record => {
          let newRow =document.createElement("tr");
          object.values(record).ForEach(value) =>{
          let cell = document.createElement("td");
          cell.innerText =Value;
          newRow.appendendChild(cell);
          })
          homepage.appendendChild(newRow);
          });
</script>

</body>
</html>


    