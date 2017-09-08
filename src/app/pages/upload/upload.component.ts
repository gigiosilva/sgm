import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as FileSaver from 'file-saver';
declare var $: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  filePath: string;
  fileContent: Object[];
  fileHeader: Object[];
  data: Object[];

  constructor(private http:Http) {
    this.http.get('assets/sample.json').subscribe(res => this.data = res.json());
  }

  ngOnInit() {
    $('.tooltipped').tooltip({delay: 50});
    this.loadCache();
  }

  jsonToCsv() {
    const items = this.data
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(items[0])
    let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))
    csv.unshift(header.join(';'))

    return csv.join('\r\n');
  }

  loadCache() {
    if(localStorage.getItem("content") !== undefined) {
      this.fileContent = JSON.parse(localStorage.getItem("content"));
      this.fileHeader = JSON.parse(localStorage.getItem("header"));
    }
  }

  clearCache() {
    localStorage.clear();
    this.fileContent = [];
    this.fileHeader = [];
  }

  onFilesChange(event, method) {
    var text = [];
    var files: File;
    method == "drag" ? files = event[0] : files = event.srcElement.files[0]
    if(files.name.includes(".csv")) {
      var input = event.target;
      var reader = new FileReader();
      reader.readAsText(files);
      reader.onload = (e) => {
        let csvData = reader.result;
        let allTextLines = csvData.split(/\r\n|\n/).map(elem => elem.split(';'))
        this.fileHeader = allTextLines[0];
        allTextLines.splice(0,1);
        this.fileContent = allTextLines;
        localStorage.setItem("content", JSON.stringify(this.fileContent));
        localStorage.setItem("header", JSON.stringify(this.fileHeader));
      };
    }
  }

  downloadSample() {

    let blob = new Blob([this.jsonToCsv()], { type: 'text/csv' });
    FileSaver.saveAs(blob, "exemplo.csv");
  }
}