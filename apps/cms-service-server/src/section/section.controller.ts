import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SectionService } from "./section.service";
import { SectionControllerBase } from "./base/section.controller.base";

@swagger.ApiTags("sections")
@common.Controller("sections")
export class SectionController extends SectionControllerBase {
  constructor(protected readonly service: SectionService) {
    super(service);
  }
}
