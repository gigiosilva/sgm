import { Directive, ElementRef, Input,HostListener,AfterViewInit } from '@angular/core';
declare const jQuery :  any;

@Directive({ selector: '[printDirective]' })

export class PrintDirective implements AfterViewInit { 

constructor(public e:ElementRef){}
@Input() printelement: string;

button = this.e.nativeElement;

ngAfterViewInit(){

    let self = this;
    jQuery(this.button).on("click", function(){ 

       var html = jQuery("#"+self.printelement).prop('outerHTML');

        let sheets = document.styleSheets;
        let array = [];
        for(var c = 0; c < sheets.length; c++) {

            array.push(sheets[c].href);

        }

        let printStyles:any="";

        console.log(array)

        array.forEach(function(value:any,index:any){
            if(value !== null) {
              var res = value.substring(value.indexOf(":") + 1);
              printStyles = "<link rel='stylesheet' type='text/css'  href="+value+" media='print'>\n"+printStyles ;
            }
        });

        let printContents =  html;

        let  popupWin;

        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        <html>
            <head>
            <title>Print tab</title>

            ${printStyles}

            </head>
            <body onload="window.print();window.close()">${printContents}</body>
        </html>`
        );
        popupWin.document.close();


        }

)}; 
 }