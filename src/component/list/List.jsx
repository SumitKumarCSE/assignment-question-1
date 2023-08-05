import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, cols, changecurrency, changesearchText, selectedOrder }) => {
  const searchTimeStamps = id => {
    const matchindex = cols.find((item) => item["&id"] === id);
    return matchindex;
  }

  const filtersearch = rows.filter((row) =>
    row["&id"].toLowerCase().includes(changesearchText.toLowerCase())
  );
  
  const handleClick = (row) => {
    const orderDetails = {
      id: row["&id"],
      buySellIndicator: row.executionDetails.buySellIndicator,
      orderStatus: row.executionDetails.orderStatus,
    };
    
    const timestamps = searchTimeStamps(row["&id"]);
    const timestamps1 = {
      orderReceived: timestamps.timestamps.orderReceived,
      orderStatusUpdated: timestamps.timestamps.orderStatusUpdated,
      orderSubmitted: timestamps.timestamps.orderSubmitted,
    };
    selectedOrder(orderDetails, timestamps1);
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {changecurrency}</ListHeaderCell>{/* replace 'USD' with currency which is a value choosen by user from dropdown */}
        </ListHeader>
      </thead>
      <tbody>

        {/* this is the first way to make searchText working here user have to type complete value. */}
        {/* {rows.map((row) => ((row["&id"] === changesearchText) || (changesearchText === "")) ? (
          <ListRow>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{searchTimeStamps(row["&id"])}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume{changecurrency}}</ListRowCell>
          </ListRow>
        ): null)} */}

        {/* the second and user friendly way is to user filter here user don't have to write the whole order ID */}
        {filtersearch.map((row, index) => (
          <ListRow key={index} onClick={()=>handleClick(row)}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{searchTimeStamps(row["&id"]).timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[changecurrency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
