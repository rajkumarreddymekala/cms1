import { Module } from "@nestjs/common";
import { LayoutsModuleBase } from "./base/layouts.module.base";
import { LayoutsService } from "./layouts.service";
import { LayoutsController } from "./layouts.controller";
import { LayoutsResolver } from "./layouts.resolver";

@Module({
  imports: [LayoutsModuleBase],
  controllers: [LayoutsController],
  providers: [LayoutsService, LayoutsResolver],
  exports: [LayoutsService],
})
export class LayoutsModule {}
