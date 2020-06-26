import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { VinaService } from './vino.service';
import { Vina } from './vino.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private vinoService: VinaService) { }

    storeVina() {
        const vina = this.vinoService.getVina();
        this.http
            .put(
                'https://prodavnica-50625.firebaseio.com/vina.json',
                vina
            )
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchVina() {
        return this.http
            .get<Vina[]>(
                'https://prodavnica-50625.firebaseio.com/vina.json'
            )
            .pipe(
                map(vina => {
                    return vina.map(vino => {
                        return {
                            ...vino

                        };
                    });
                }),
                tap(vina => {
                    this.vinoService.setVina(vina);
                })
            )
    }
}
