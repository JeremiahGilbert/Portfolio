import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portfolio';
  scrollFactor = 0;

  ngOnInit(): void {
    var c = document.getElementById("content-viewport") as HTMLElement;
    c.addEventListener('scroll', () => {
      this.scrollFactor = c.scrollTop / (c.scrollHeight - c.offsetHeight);
      //console.log(c);
      //console.log((ev.target as Element).scrollTop);
      console.log(this.scrollFactor);
      this.redrawCanvas();

    })

    this.redrawCanvas();
  }
  
  private redrawCanvas() {
    var c = document.getElementById("bg-canvas") as HTMLCanvasElement;
    var ctx = c.getContext("2d");
    if (ctx == null) return;
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.beginPath();

    let minRadius = 20;
    let radiusDelta = 380;

    ctx.arc(c.width/2, c.height/2, this.scrollFactor * radiusDelta + minRadius, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("DRAW CIRCLE");
  }

}