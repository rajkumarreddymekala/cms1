import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserLayoutsService } from "./userLayouts.service";
import { UserLayoutsControllerBase } from "./base/userLayouts.controller.base";

@swagger.ApiTags("userLayouts")
@common.Controller("userLayouts")
export class UserLayoutsController extends UserLayoutsControllerBase {
  constructor(protected readonly service: UserLayoutsService) {
    super(service);
  }
}
