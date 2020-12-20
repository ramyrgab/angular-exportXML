import { Component } from "@angular/core";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: "Russia",
    flag: "f/f3/Flag_of_Russia.svg",
    area: 17075200,
    population: 146989754
  },
  {
    name: "Canada",
    flag: "c/cf/Flag_of_Canada.svg",
    area: 9976140,
    population: 36624199
  },
  {
    name: "United States",
    flag: "a/a4/Flag_of_the_United_States.svg",
    area: 9629091,
    population: 324459463
  },
  {
    name: "China",
    flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: "ngbd-table-basic",
  templateUrl: "./table-basic.html"
})
export class NgbdTableBasic {
  countries = COUNTRIES;

  exportToXML() {
    var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Classes>';
    var tritem = document.getElementById("tableC").getElementsByTagName("tr");
    for (let i = 0; i < tritem.length; i++) {
      var celldata = tritem[i];
      if (celldata.cells.length > 0) {
        xml += "<Class name='" + celldata.cells[0].textContent + "'>\n";
        for (var m = 1; m < celldata.cells.length; ++m) {
          xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
        }
        xml += "</Class >\n";
      }
    }
    xml += "</Classes></Root>";
    //window.alert(xml);
    this.download("test.xml", xml);
    //window.open("data:text/xml," + xml);
    //here you can rewrite the xmlstring to a new document
    //or use the hide control to store the xml text, call the text in code behind.
    //also, you can call ajax to excuet codebehind and sava the xml file
    // window.open('data:text/xml,' + xml);
  }
  download(filename, text) {
    // let elem = document.createElement("a");
    // elem.setAttribute(
    //   "href",
    //   "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    // );
    // elem.setAttribute("download", filename);
    // elem.click();

    let mywin = window.open(
      "text/xml",
      "",
      "menubar=1,scrollbars=2,resizeable=1"
    );
    mywin.document.open;
    mywin.opener = self;
    //let XML_txt = '<tool attrib="now">text inside XML "tool" tag</tool>';
    mywin.document.write(text);
  }
}
