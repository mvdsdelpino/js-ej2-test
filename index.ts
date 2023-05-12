import { ComboBox } from '@syncfusion/ej2-dropdowns';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

//initiates the component
let customers: ComboBox = new ComboBox({
  //bind the DataManager instance to dataSource property
  dataSource: new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
  }),
  //bind the Query instance to query property
  query: new Query()
    .from('Products')
    .select(['ProductName', 'ProductID'])
    .take(1),
  //map the appropriate columns to fields property
  fields: { text: 'ProductName', value: 'ProductID' },
  //set the placeholder to DropDownList input
  placeholder: 'Select a product',
  //sort the resulted items
  sortOrder: 'Ascending',
});

//render the component
customers.appendTo('#ddlelement');

customers.value = 3;
customers.value = 5;
