import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { BlockHomeDto } from '../../../dtos/block/home/block-home.dto';

export class BlockHomeGetForm {
  static submit(shopId: number): Observable<BlockHomeDto> {
    return WiziApiService.get<BlockHomeDto>(`/shops/${shopId}/block-home`);
  }
}
