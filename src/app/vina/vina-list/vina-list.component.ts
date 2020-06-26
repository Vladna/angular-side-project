import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vina } from 'src/app/vino.model';
import { Subscription } from 'rxjs';
import { VinaService } from 'src/app/vino.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vina-list',
  templateUrl: './vina-list.component.html',
  styleUrls: ['./vina-list.component.css']
})
export class VinaListComponent implements OnInit,OnDestroy {

  vina: Vina[];
  subscription: Subscription;

  constructor(private vinaService: VinaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.vinaService.vinaChanged
      .subscribe(
        (vina: Vina[]) => {
          this.vina = vina;
        }
      );
    this.vina = this.vinaService.getVina();
  }

  onNewVina() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
