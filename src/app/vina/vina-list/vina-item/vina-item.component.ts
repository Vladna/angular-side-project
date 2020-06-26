import { Component, OnInit, Input } from '@angular/core';
import { VinaService } from 'src/app/vino.service';
import { Vina } from 'src/app/vino.model';

@Component({
  selector: 'app-vina-item',
  templateUrl: './vina-item.component.html',
  styleUrls: ['./vina-item.component.css']
})
export class VinaItemComponent implements OnInit {

  @Input() vina: Vina;
  @Input() index: number;
  constructor(private vinaService: VinaService) { }

  ngOnInit() {
  }

}
