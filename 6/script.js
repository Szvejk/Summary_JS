const form = document.querySelector('#form')

const data=[
    {name: 'imie', label: 'Imie klienta', type: 'text'},
    {name: 'nazw', label: 'Imie nazw', type: 'nazw'},
    {name: 'wiek', label: 'Wiek klienta', type: 'number'}
]
data.forEach((el)=> {
    form.innerHTML+=`
    <div>
    <label> ${el.label}</label>
    <input type='${el.type}' name=${el.name}/> 
    </div>
    ` 
})
// regexpy
