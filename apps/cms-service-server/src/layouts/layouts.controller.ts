import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LayoutsService } from "./layouts.service";
import { LayoutsControllerBase } from "./base/layouts.controller.base";

@swagger.ApiTags("layouts")
@common.Controller("layouts")
export class LayoutsController extends LayoutsControllerBase {
  constructor(protected readonly service: LayoutsService) {
    super(service);
  }
}
