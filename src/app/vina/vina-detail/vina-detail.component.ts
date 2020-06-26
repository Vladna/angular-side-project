import { Component, OnInit } from '@angular/core';
import { Vina } from 'src/app/vino.model';
import { VinaService } from 'src/app/vino.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-vina-detail',
  templateUrl: './vina-detail.component.html',
  styleUrls: ['./vina-detail.component.css']
})
export class VinaDetailComponent implements OnInit {
  vina: Vina;
  id: number;

  constructor(private vinaService: VinaService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.vina = this.vinaService.getVino(this.id);
        }
      );
  }

  onEditVina() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteVina() {
    this.vinaService.deleteVino(this.id);
    this.router.navigate(['/vina']);
  }
  onAddVina(){
    this.vinaService.addShoppingCart(this.id);
    console.log('dodato vino'+this.vinaService.getVino(this.id).ime);
    this.router.navigate(['/vina']);
  }
}
