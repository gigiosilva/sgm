import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  filePath: string;
  fileContent: Object[];
  fileHeader: Object[];

  ngOnInit() {
    this.loadCache();
  }

  loadCache() {
    if(localStorage.getItem("content") !== undefined) {
      this.fileContent = JSON.parse(localStorage.getItem("content"));
      this.fileHeader = JSON.parse(localStorage.getItem("header"));
    }
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
}