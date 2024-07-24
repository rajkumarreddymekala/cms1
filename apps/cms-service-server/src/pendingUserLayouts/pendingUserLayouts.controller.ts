import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PendingUserLayoutsService } from "./pendingUserLayouts.service";
import { PendingUserLayoutsControllerBase } from "./base/pendingUserLayouts.controller.base";

@swagger.ApiTags("pendingUserLayouts")
@common.Controller("pendingUserLayouts")
export class PendingUserLayoutsController extends PendingUserLayoutsControllerBase {
  constructor(protected readonly service: PendingUserLayoutsService) {
    super(service);
  }
}
