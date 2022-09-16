import React, { useRef } from "react";
import "./Print.scss";
import ReactToPrint from "react-to-print";
import { addLogs, getLogs } from "../../api/logs";

export class Print extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    getLogs().then(logs => {
      this.setState({count: logs.length});
    });
  }
  
  render() {

    const getData = () => {
      const Data = new Date();
      const Year = Data.getFullYear();
      const Month = Data.getMonth();
      const Day = Data.getDate();
      let fMonth;

      switch (Month)
      {
        case 0: fMonth="січня"; break;
        case 1: fMonth="лютого"; break;
        case 2: fMonth="березня"; break;
        case 3: fMonth="квітня"; break;
        case 4: fMonth="травня"; break;
        case 5: fMonth="червня"; break;
        case 6: fMonth="липня"; break;
        case 7: fMonth="серпня"; break;
        case 8: fMonth="вересня"; break;
        case 9: fMonth="жовтня"; break;
        case 10: fMonth="листопада"; break;
        case 11: fMonth="грудня"; break;
        default: break;
      }

      return Day + " " + fMonth + " " + Year;
    };

    const { from, to, thing, unit } = this.props.data;

    return (
      <div className="main">
        <div ref={el => (this.componentRef = el)} className="print">
          <p>СЛУЖБА УКРАЇНИ</p>
          <p className="print__unit">Відділ у {unit} області</p>
          <p>Акт прийому-передачі матеріальних цінностей працівникові</p>
          <p>№{this.state.count + 1} від {getData()} року</p>
          
          <div className="print__main">
            <p>{`${from.split(',')[0]} ${from.split(',')[1]} передав, а ${to.split(',')[0]} ${to.split(',')[1]} прийняв такі матеріальні цінності:`}</p>
            <li>{`${thing.split(',')[0]} серійний номер № ${thing.split(',')[1]}, інвентарний номер № ${thing.split(',')[2]}`}</li>
            <p>для виконання своїх посадових обов'язків.</p>
          </div>

          <div className="print__flex">
            <span>{from.split(',')[1]}</span>
            <span>______________________</span>
          </div>
          
          <div className="print__flex">
            <span>{to.split(',')[1]}</span>
            <span>______________________</span>
          </div>
        </div>

        <ReactToPrint
          trigger={() => {
            return <button className="print__btn">Друк</button>;
          }}
          content={() => this.componentRef}
          onAfterPrint={() => addLogs({
            from,
            to,
            unit,
            thing,
            data: getData(),
          })}
        />
      </div>
    );
  }
}