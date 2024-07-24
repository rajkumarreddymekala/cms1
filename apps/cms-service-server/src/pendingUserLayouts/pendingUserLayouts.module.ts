import { Module } from "@nestjs/common";
import { PendingUserLayoutsModuleBase } from "./base/pendingUserLayouts.module.base";
import { PendingUserLayoutsService } from "./pendingUserLayouts.service";
import { PendingUserLayoutsController } from "./pendingUserLayouts.controller";
import { PendingUserLayoutsResolver } from "./pendingUserLayouts.resolver";

@Module({
  imports: [PendingUserLayoutsModuleBase],
  controllers: [PendingUserLayoutsController],
  providers: [PendingUserLayoutsService, PendingUserLayoutsResolver],
  exports: [PendingUserLayoutsService],
})
export class PendingUserLayoutsModule {}
