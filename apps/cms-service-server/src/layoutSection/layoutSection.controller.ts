import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LayoutSectionService } from "./layoutSection.service";
import { LayoutSectionControllerBase } from "./base/layoutSection.controller.base";

@swagger.ApiTags("layoutSections")
@common.Controller("layoutSections")
export class LayoutSectionController extends LayoutSectionControllerBase {
  constructor(protected readonly service: LayoutSectionService) {
    super(service);
  }
}
