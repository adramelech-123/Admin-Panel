// MODAL FUNCTIONALITY

let addBtn = document.getElementById('addBtn')
let modal = document.getElementById('modal-form')
let modalCloseBtn = document.getElementById('modal-close')

addBtn.addEventListener('click', function () {
    modal.classList = 'modal is-active'
})

modalCloseBtn.addEventListener('click', function () {
    modal.classList = 'modal'
})


//HAMBURGER MENU TOGGLE
let burgerBtn = document.querySelector('.navbar-burger')
let asideMenu = document.querySelector('#aside-menu')

burgerBtn.addEventListener('click', function () {
    asideMenu.classList.toggle('is-hidden-touch')
}) 


//Create Array containing indexes of existing rows

function generateRows () {
    let tableRows = document.querySelectorAll('.row')
    arrayofRows = Array.from(tableRows) //Change nodelist tableRows to array
}




//ADD CUSTOMER
let cBtn = document.getElementById('customer-btn')
let tableBody = document.querySelector('.table_body') 

cBtn.addEventListener('click', addCustomer)

function addCustomer (e) {
    e.preventDefault()

    //Create new table row 
    let tr = document.createElement('tr')
    tr.className = 'row'
    tableBody.appendChild(tr)
    let rwIndex = tr.rowIndex //Access index of the newly created row

  
    let newObj = {
        cID: rwIndex,
        cName: document.getElementById('c_name').value,
        cEmail: document.getElementById('c_email').value,
        cPhone: document.getElementById('c_phone').value,
        cAddress: document.getElementById('c_address').value,
        cSub: document.getElementById('subs').value,
        cPay: document.getElementById('pay').value
    }

    let customerData =  `
                    <th>${newObj.cID}</th>
                    <td>${newObj.cName}</td>
                    <td>${newObj.cEmail}</td>
                    <td>${newObj.cPhone}</td>
                    <td>${newObj.cAddress}</td>
                    <td>${newObj.cSub}</td>
                    <td>${newObj.cPay}</td>
                    <td>
                        <button class="button is-success is-small edt"><i class="fa fa-pencil"></i></button>
                        <button class="button is-danger is-small del"><i class="fa fa-trash"></i></button>
                    </td>`

    tr.innerHTML = customerData
    modal.classList = 'modal'

    // Reset input fields after submit
    newObj.cName = ''
    newObj.cEmail = ''
    newObj.cPhone = ''
    newObj.cAddress = ''
}

 

//DELETE CUSTOMER

tableBody.addEventListener('click', deleteCustomer)

function deleteCustomer (e) {

    if(e.target.classList.contains('del')) {
        const row = e.target.parentElement.parentElement
        tableBody.removeChild(row)
        generateRows()
        
        for (i=0; i<arrayofRows.length; i++) {
            
            arrayofRows[i].firstElementChild.textContent = arrayofRows[i].rowIndex
            console.log(arrayofRows[i]);
        }
        
    }

    else if (e.target.classList.contains('fa-trash')) {
        const row = e.target.parentElement.parentElement.parentElement
        tableBody.removeChild(row)
        generateRows()

        for (i=0; i<arrayofRows.length; i++) {
            
            arrayofRows[i].firstElementChild.textContent = arrayofRows[i].rowIndex
            console.log(arrayofRows[i]);
        }
    
    }

}
