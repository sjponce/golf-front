import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/**
 * Voyage service.
 */
@Injectable({
  providedIn: 'root',
})
export class GolfService {
  constructor(
    private readonly http: HttpClient) { }

  /**
   * Generate stream.
   * @param data Data.
   * @returns Stream.
   */
  public generate(
    data: any
    ): Observable<any> {
    return this.http.get<any>('http://localhost:5000/generate', {
      params: {
        ...data
        /* probPocoVientoA_1: data.probPocoVientoA_1,
        probPocoVientoA_2: data.probPocoVientoA_2,
        probPocoVientoA_3: data.probPocoVientoA_3,
        probPocoVientoA_4: data.probPocoVientoA_4,
        probPocoVientoA_5: data.probPocoVientoA_5,
        probPocoVientoA_6: data.probPocoVientoA_6,
        probPocoVientoA_7: data.probPocoVientoA_7,
        probPocoVientoA_8: data.probPocoVientoA_8,
        probPocoVientoA_9: data.probPocoVientoA_9,

        probMuchoVientoA_1: data.probMuchoVientoA_1,
        probMuchoVientoA_2: data.probMuchoVientoA_2,
        probMuchoVientoA_3: data.probMuchoVientoA_3,
        probMuchoVientoA_4: data.probMuchoVientoA_4,
        probMuchoVientoA_5: data.probMuchoVientoA_5,
        probMuchoVientoA_6: data.probMuchoVientoA_6,
        probMuchoVientoA_7: data.probMuchoVientoA_7,
        probMuchoVientoA_8: data.probMuchoVientoA_8,
        probMuchoVientoA_9: data.probMuchoVientoA_9,

        probPocoVientoB_1: data.probPocoVientoB_1,
        probPocoVientoB_2: data.probPocoVientoB_2,
        probPocoVientoB_3: data.probPocoVientoB_3,
        probPocoVientoB_4: data.probPocoVientoB_4,
        probPocoVientoB_5: data.probPocoVientoB_5,
        probPocoVientoB_6: data.probPocoVientoB_6,
        probPocoVientoB_7: data.probPocoVientoB_7,
        probPocoVientoB_8: data.probPocoVientoB_8,
        probPocoVientoB_9: data.probPocoVientoB_9,

        probMuchoVientoB_1: data.probMuchoVientoB_1,
        probMuchoVientoB_2: data.probMuchoVientoB_2,
        probMuchoVientoB_3: data.probMuchoVientoB_3,
        probMuchoVientoB_4: data.probMuchoVientoB_4,
        probMuchoVientoB_5: data.probMuchoVientoB_5,
        probMuchoVientoB_6: data.probMuchoVientoB_6,
        probMuchoVientoB_7: data.probMuchoVientoB_7,
        probMuchoVientoB_8: data.probMuchoVientoB_8,
        probMuchoVientoB_9: data.probMuchoVientoB_9,

        probPocoVientoC_1: data.probPocoVientoC_1,
        probPocoVientoC_2: data.probPocoVientoC_2,
        probPocoVientoC_3: data.probPocoVientoC_3,
        probPocoVientoC_4: data.probPocoVientoC_4,
        probPocoVientoC_5: data.probPocoVientoC_5,
        probPocoVientoC_6: data.probPocoVientoC_6,
        probPocoVientoC_7: data.probPocoVientoC_7,
        probPocoVientoC_8: data.probPocoVientoC_8,
        probPocoVientoC_9: data.probPocoVientoC_9,

        probMuchoVientoC_1: data.probMuchoVientoC_1,
        probMuchoVientoC_2: data.probMuchoVientoC_2,
        probMuchoVientoC_3: data.probMuchoVientoC_3,
        probMuchoVientoC_4: data.probMuchoVientoC_4,
        probMuchoVientoC_5: data.probMuchoVientoC_5,
        probMuchoVientoC_6: data.probMuchoVientoC_6,
        probMuchoVientoC_7: data.probMuchoVientoC_7,
        probMuchoVientoC_8: data.probMuchoVientoC_8,
        probMuchoVientoC_9: data.probMuchoVientoC_9,

        probMuchoVientoH_1: data.probMuchoVientoH_1,
        probMuchoVientoH_2: data.probMuchoVientoH_2,
        probMuchoVientoH_3: data.probMuchoVientoH_3,
        probMuchoVientoH_4: data.probMuchoVientoH_4,
        probMuchoVientoH_5: data.probMuchoVientoH_5,
        probMuchoVientoH_6: data.probMuchoVientoH_6,
        probMuchoVientoH_7: data.probMuchoVientoH_7,
        probMuchoVientoH_8: data.probMuchoVientoH_8,
        probMuchoVientoH_9: data.probMuchoVientoH_9,
        probMuchoVientoH_10: data.probMuchoVientoH_10,
        probMuchoVientoH_11: data.probMuchoVientoH_11,
        probMuchoVientoH_12: data.probMuchoVientoH_12,
        probMuchoVientoH_13: data.probMuchoVientoH_13,
        probMuchoVientoH_14: data.probMuchoVientoH_14,
        probMuchoVientoH_15: data.probMuchoVientoH_15,
        probMuchoVientoH_16: data.probMuchoVientoH_16,
        probMuchoVientoH_17: data.probMuchoVientoH_17,
        probMuchoVientoH_18: data.probMuchoVientoH_18,

        cantSet: data.cantSet,
        cantidadSimulaciones: data.cantidadSimulaciones */
    }
  })
  }
}
