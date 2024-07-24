import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLayoutsServiceBase } from "./base/userLayouts.service.base";

@Injectable()
export class UserLayoutsService extends UserLayoutsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
