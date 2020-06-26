import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { VinaService } from 'src/app/vino.service';

@Component({
  selector: 'app-vina-edit',
  templateUrl: './vina-edit.component.html',
  styleUrls: ['./vina-edit.component.css']
})
export class VinaEditComponent implements OnInit {

  id: number;
  editMode = false;
  vinaForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private vinaService: VinaService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {

    if (this.editMode) {
      this.vinaService.updateVino(this.id, this.vinaForm.value);
    } else {
      this.vinaService.addVino(this.vinaForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {

    let ime = '';
    let vrsta = '';
    let kolicina = '';
    let opis = '';
    let cena = '';
    let imageUrl = '';


    if (this.editMode) {
      const vina = this.vinaService.getVino(this.id);

      ime = vina.ime;
      vrsta = vina.vrsta;
      kolicina = vina.kolicina;
      opis = vina.opis;
      cena = vina.cena;
      imageUrl = vina.imageUrl;

    }
    this.vinaForm = new FormGroup({
      'ime': new FormControl(ime, Validators.required),
      'vrsta': new FormControl(vrsta, Validators.required),
      'kolicina': new FormControl(kolicina, Validators.required),
      'opis': new FormControl(opis, Validators.required),
      'cena': new FormControl(cena, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),

    });
  }
}
