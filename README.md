## Issues

1.  In the title of the header, it displays `5 orders` but there are `6 orders` in the table. We want to display the `total` number of `orders` in the header title

2.  In the table order submitted date is missing, we have timestamp data included in the `src\assets\timeStamps.json` with the corresponding ids, please combine that with the order data and make sure the order submitted date is being displayed in the table

3.  Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard

4.  Can you please add search feature on the order IDs with the search bar given in the header

5.  Please clear the console errors and warnings.

6.  When user selects an order, can you populate the Card on top of the listing component as shown in the image

## Brief of Changes done in the codes

1. For first issue change `5 orders` to `${mockData.results.length} orders`.

2. Pass timestamps data to List as prop and also add a function `searchTimeStamps` which search the index where id matches.

3. Pass currency as a prop to List which changes values of Volume cell according to choice in the dropdown.

4. At first send seachText to List as a prop. In List at first I write code where output is visible if user write whole customer id which is not convenient. After that I use filter to where output is visible after every keypress.
   
5. Done automatically when done with above parts.
   
6. For this I made a handleClick function which pass data to selectedorder.

**Changes done in these files**

<a href="https://github.com/SumitKumarCSE/assignment-question-1/blob/main/src/pages/Dashboard.jsx" target="_blank"> Dashboard </a>

<a href="https://github.com/SumitKumarCSE/assignment-question-1/blob/main/src/component/list/List.jsx" target="_blank"> List </a>
