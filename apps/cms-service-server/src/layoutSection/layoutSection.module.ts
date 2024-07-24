import { Module } from "@nestjs/common";
import { LayoutSectionModuleBase } from "./base/layoutSection.module.base";
import { LayoutSectionService } from "./layoutSection.service";
import { LayoutSectionController } from "./layoutSection.controller";
import { LayoutSectionResolver } from "./layoutSection.resolver";

@Module({
  imports: [LayoutSectionModuleBase],
  controllers: [LayoutSectionController],
  providers: [LayoutSectionService, LayoutSectionResolver],
  exports: [LayoutSectionService],
})
export class LayoutSectionModule {}
