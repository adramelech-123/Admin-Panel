# **PROJECT 1: CUSTOMER DASHBOARD APP**

## **Description**

This project is a CRUD application to handle customer data for a company. The project consists of 3 functionalities:

- A Modal Form to enter customer data
- Filterable search
- Sidebar with Toggle

## **Technologies Used**

1. HTML
2. CSS
3. [Bulma CSS Framework](https://bulma.io/) - I chose Bulma because it is a CSS only framework, allowing me to write my own Javascript for practice.
4. Javascript

## **Example**

The app looks almost similar to the example images below:

![Dashboard Example 1](https://s3.envato.com/files/265027682/Screenshot/05.png)


## **Experience**

1. Challenges

    The major challenges i have encountered from creating this project were Creating a scrollable responsive table using the bulma frame work and Autoupdating table row indexes when adding or deleting rows. When creating the table i realized that i should place the table inside a div with the table-container class, however making sure that the section which container that table-container has an overflow-x: scroll; style as well otherwise the table wouldn't scroll. As for the autoupdating of the table row index numbers, i created a function to generate an array of rows that exist in the table. This function is invoked everytime the user deletes a row and then by accessing the table rowIndex property, i ensure that every cell containing the row index is updated to match the value of the rowIndex property using a for loop to iterate over the array of rows.

### Snippets of the autoupdate Javascript code


```
function generateRows () {
    let tableRows = document.querySelectorAll('.row')
    arrayofRows = Array.from(tableRows) //Change nodelist tableRows to array
}
```

Invoking the generateRows function and iterating over the array of rows to update the Row index values
```
generateRows()
        
        for (i=0; i<arrayofRows.length; i++) {
            
            arrayofRows[i].firstElementChild.textContent = arrayofRows[i].rowIndex
            console.log(arrayofRows[i]);
        }
```



