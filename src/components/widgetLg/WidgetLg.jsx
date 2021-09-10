import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png"
              alt="user avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Vaidas Anikas</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">€ 99.80</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.snaphome.asia/uploads2/avatar5.png"
              alt="user avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Lina Vingaite</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">€ 58.70</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
              alt="user avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Benas Masiotas</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">€ 111.80</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt="user avatar"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Siga Vingiene</span>
          </td>
          <td className="widgetLgDate">3 Jun 2021</td>
          <td className="widgetLgAmount">€ 56.65</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
