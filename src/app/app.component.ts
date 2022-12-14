import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, map, Observable, shareReplay, skip, startWith, switchMap, switchMapTo, tap, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { GolfService } from './golf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {
  @ViewChild(MatPaginator) paginator: any;

  /** Loading indicator */
  public loading$ = new BehaviorSubject(false);

  /** Reload */
  protected readonly reload$ = new Subject();

  /** Show form */
  public showForm = true;

  /** Show table */
  public showTable = false;
  
  /** Show details */
  public showDetails = false;

  /** Paged list of items */
  public partidos$?: Observable<any>;

  public golpesTotalA = 0;
  public golpesTotalB = 0;
  public golpesTotalC = 0;

  constructor(
    readonly fb: FormBuilder,
    public readonly golfService: GolfService,
  ) {
    this.form = this.createForm(fb);

    this.partidos$ = this.reload$.pipe(
      startWith(null),
      switchMap(() => {
        this.form.value;
        return this.golfService.generate(
          this.form.value
        );
      }
      ),
      map(p => {
        this.golpesTotalA = p.golpesTotalA
        this.golpesTotalB = p.golpesTotalB
        this.golpesTotalC = p.golpesTotalC
        const tableData = new MatTableDataSource<any>(p.partidos)
        tableData.paginator = this.paginator;
        return tableData;
      }),
      onMessageOrFailed(() => this.loading$.next(false)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
    }
  /**
   * Table columns definitions.
   */
  public readonly displayedColumnsPartidos: string[] = ['nro', 'golpesTotalPartidoA', 'golpesTotalPartidoB', 'golpesTotalPartidoC', 'ganadorPartido'];
  displayedColumnsPartidosWithExpand = [ ...this.displayedColumnsPartidos, 'expand']

  public readonly displayedColumnsSet: string[] = ['nro', 'golpesTotalSetA', 'golpesTotalSetB', 'golpesTotalSetC', 'ganadorSet'];
  displayedColumnsSetWithExpand = [ ...this.displayedColumnsSet , 'expand']

  public readonly displayedColumnsHoyo: string[] = ['nro', 'rndMuchoviento', 'vientoHoyoSet', 'rndNumeroGolpesA', 'numeroGolpesA', 'rndNumeroGolpesB', 'numeroGolpesB', 'rndNumeroGolpesC', 'numeroGolpesC'];

  expandedElement: any
  expandedElementSet: any

  /**
   * Form.
   */
  public readonly form: FormGroup;

  private createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      probPocoVientoA_1: [0.01, Validators.required],
      probPocoVientoA_2: [0.06, Validators.required],
      probPocoVientoA_3: [0.18, Validators.required],
      probPocoVientoA_4: [0.33, Validators.required],
      probPocoVientoA_5: [0.23, Validators.required],
      probPocoVientoA_6: [0.12, Validators.required],
      probPocoVientoA_7: [0.05, Validators.required],
      probPocoVientoA_8: [0.02, Validators.required],
      probPocoVientoA_9: [0, Validators.required],

      probMuchoVientoA_1: [0, Validators.required],
      probMuchoVientoA_2: [0.02, Validators.required],
      probMuchoVientoA_3: [0.12, Validators.required],
      probMuchoVientoA_4: [0.28, Validators.required],
      probMuchoVientoA_5: [0.29, Validators.required],
      probMuchoVientoA_6: [0.15, Validators.required],
      probMuchoVientoA_7: [0.08, Validators.required],
      probMuchoVientoA_8: [0.04, Validators.required],
      probMuchoVientoA_9: [0.02, Validators.required],

      probPocoVientoB_1: [0.005, Validators.required],
      probPocoVientoB_2: [0.05, Validators.required],
      probPocoVientoB_3: [0.25, Validators.required],
      probPocoVientoB_4: [0.44, Validators.required],
      probPocoVientoB_5: [0.15, Validators.required],
      probPocoVientoB_6: [0.08, Validators.required],
      probPocoVientoB_7: [0.02, Validators.required],
      probPocoVientoB_8: [0.005, Validators.required],
      probPocoVientoB_9: [0, Validators.required],

      probMuchoVientoB_1: [0.005, Validators.required],
      probMuchoVientoB_2: [0.05, Validators.required],
      probMuchoVientoB_3: [0.25, Validators.required],
      probMuchoVientoB_4: [0.44, Validators.required],
      probMuchoVientoB_5: [0.15, Validators.required],
      probMuchoVientoB_6: [0.08, Validators.required],
      probMuchoVientoB_7: [0.02, Validators.required],
      probMuchoVientoB_8: [0.005, Validators.required],
      probMuchoVientoB_9: [0, Validators.required],
      
      probPocoVientoC_1: [0, Validators.required],
      probPocoVientoC_2: [0.02, Validators.required],
      probPocoVientoC_3: [0.06, Validators.required],
      probPocoVientoC_4: [0.48, Validators.required],
      probPocoVientoC_5: [0.3, Validators.required],
      probPocoVientoC_6: [0.12, Validators.required],
      probPocoVientoC_7: [0.02, Validators.required],
      probPocoVientoC_8: [0, Validators.required],
      probPocoVientoC_9: [0, Validators.required],

      probMuchoVientoC_1: [0, Validators.required],
      probMuchoVientoC_2: [0.02, Validators.required],
      probMuchoVientoC_3: [0.06, Validators.required],
      probMuchoVientoC_4: [0.4, Validators.required],
      probMuchoVientoC_5: [0.3, Validators.required],
      probMuchoVientoC_6: [0.14, Validators.required],
      probMuchoVientoC_7: [0.05, Validators.required],
      probMuchoVientoC_8: [0.02, Validators.required],
      probMuchoVientoC_9: [0.01, Validators.required],

      probMuchoVientoH_1: [0.6, Validators.required],
      probMuchoVientoH_2: [0.6, Validators.required],
      probMuchoVientoH_3: [0.6, Validators.required],
      probMuchoVientoH_4: [0.6, Validators.required],
      probMuchoVientoH_5: [0.4, Validators.required],
      probMuchoVientoH_6: [0.4, Validators.required],
      probMuchoVientoH_7: [0.4, Validators.required],
      probMuchoVientoH_8: [0.4, Validators.required],
      probMuchoVientoH_9: [0.4, Validators.required],
      probMuchoVientoH_10: [0.4, Validators.required],
      probMuchoVientoH_11: [0.6, Validators.required],
      probMuchoVientoH_12: [0.6, Validators.required],
      probMuchoVientoH_13: [0.6, Validators.required],
      probMuchoVientoH_14: [0.6, Validators.required],
      probMuchoVientoH_15: [0.4, Validators.required],
      probMuchoVientoH_16: [0.4, Validators.required],
      probMuchoVientoH_17: [0.4, Validators.required],
      probMuchoVientoH_18: [0.4, Validators.required],

      cantSet: [4, Validators.required],
      cantidadSimulaciones: [10, Validators.required]
    });
  }

  /**
   * On form submit.
   */
  public onFormSubmit(): void {
    this.reload$.next(null);
    this.partidos$?.subscribe(console.log)
    this.showForm = false;
    this.showTable = true;
    this.showDetails = false;
  }

  public getGanador(a: number, b: number, c: number) {
    return a > b ? b > c ? 'C' : 'B' : a > c ? 'C' : 'A';
  }
}


const onMessageOrFailed = <T>(callback: () => any) =>
  (source$: Observable<T>) => source$
    .pipe(
      tap(() => callback()),
      catchError(e => {
        callback();
        return throwError(e);
      }),
    );
