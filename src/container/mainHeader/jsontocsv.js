const { Parser } = require('json2csv');


export const makecsv = (numrows , items ) =>  {
    const downloadFile = ({ data, fileName, fileType }) => {
        const blob = new Blob([data], { type: fileType })
      
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
      }
    let fields = []
    fields = items.map(item => {
         return item.fieldName
    })
    let mydata = []
    while(mydata.length < numrows)
    {
        let data = {}
        items.forEach(item =>{
          let param1 = String(item.staticData1 ? item.staticData1.staticInput? item.staticData1.staticValue?item.staticData1.staticValue:"" :item.staticData1.staticValue?item.staticData1.staticValue:""+String(item.staticData1.countStart + mydata.length):"") 
          let param2 = String(item.staticData2 ? item.staticData2.staticInput? item.staticData1.staticValue?item.staticData1.staticValue:"" :item.staticData1.staticValue?item.staticData1.staticValue:""+String(item.staticData2.countStart + mydata.length):"")
          let param3 = String(item.staticDate3 ? item.staticData3.staticInput? item.staticData1.staticValue?item.staticData1.staticValue:"" :item.staticData1.staticValue?item.staticData1.staticValue:""+String(item.staticData3.countStart + mydata.length):"")
          data[item.fieldName] = param1 + param2 + param3;  
        }) 
        mydata.push(data)
    }
   
    // console.log("mydata",mydata, "fileds", fields)
    const opts = { fields };

    try {
    const parser = new Parser(opts);
    const csv = parser.parse(mydata);
    downloadFile({
        data:csv,
        fileName: 'users.csv',
        fileType: 'text/csv',
      })
    // console.log(csv);
    } catch (err) {
    console.error(err);

    }


   

}

