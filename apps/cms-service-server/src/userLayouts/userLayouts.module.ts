import { Module } from "@nestjs/common";
import { UserLayoutsModuleBase } from "./base/userLayouts.module.base";
import { UserLayoutsService } from "./userLayouts.service";
import { UserLayoutsController } from "./userLayouts.controller";
import { UserLayoutsResolver } from "./userLayouts.resolver";

@Module({
  imports: [UserLayoutsModuleBase],
  controllers: [UserLayoutsController],
  providers: [UserLayoutsService, UserLayoutsResolver],
  exports: [UserLayoutsService],
})
export class UserLayoutsModule {}
