import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PendingUserLayoutsServiceBase } from "./base/pendingUserLayouts.service.base";

@Injectable()
export class PendingUserLayoutsService extends PendingUserLayoutsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
